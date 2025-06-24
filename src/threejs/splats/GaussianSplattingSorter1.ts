import { AutoReleaseWorkerPool } from '../utils/workerPool';

export class GaussianSplattingSorter {
    private static _WorkerPool: AutoReleaseWorkerPool;

    private static _CreateWorker = function (self: Worker) {
        self.onmessage = (event: any) => {
            if (!event.data) {
                return;
            }
            switch (event.data.action) {
                case 'init': {
                    postMessage({ action: 'init' });
                    break;
                }
                case 'sort': {
                    const positions = event.data.positions;
                    const count = event.data.vertexCount;
                    const viewProj = event.data.view;

                    const depthValues = new Int32Array(count);
                    const indices = new Uint32Array(count);

                    const tempDepths = new Int32Array(count);
                    const tempIndices = new Uint32Array(count);

                    let maxDepth = -Infinity;
                    let minDepth = Infinity;

                    for (let i = 0; i < count; i++) {
                        indices[i] = i;
                        //const depth = positions[i * 3] * mv2 + positions[i * 3 + 1] * mv6 + positions[i * 3 + 2] * mv10;
                        const depth = viewProj[2] * positions[4 * i] + viewProj[6] * positions[4 * i + 1] + viewProj[10] * positions[4 * i + 2];

                        const depthInt = Math.floor(depth * 4096);
                        depthValues[i] = depthInt;
                        maxDepth = Math.max(maxDepth, depthInt);
                        minDepth = Math.min(minDepth, depthInt);
                    }

                    const depthOffset = -minDepth;
                    for (let i = 0; i < count; i++) {
                        depthValues[i] += depthOffset;
                    }

                    for (let shift = 0; shift < 32; shift += 8) {
                        const counts = new Uint32Array(256);

                        for (let i = 0; i < count; i++) {
                            const byte = (depthValues[i] >> shift) & 0xff;
                            counts[byte] += 1;
                        }

                        let total = 0;
                        for (let i = 0; i < counts.length; i++) {
                            const current = counts[i];
                            counts[i] = total;
                            total += current;
                        }

                        for (let i = 0; i < count; i++) {
                            const byte = (depthValues[i] >> shift) & 0xff;
                            const pos = counts[byte];
                            counts[byte] += 1;

                            tempDepths[pos] = depthValues[i];
                            tempIndices[pos] = indices[i];
                        }

                        depthValues.set(tempDepths);
                        indices.set(tempIndices);
                    }

                    postMessage({ action: 'sort', success: true, splatIndex: indices }, [indices.buffer]);
                    break;
                }
            }
        };
    };

    private static _Initialize(numWorkers: number): void {
        if (GaussianSplattingSorter._WorkerPool) {
            return;
        }

        const workerContent = `(${GaussianSplattingSorter._CreateWorker.toString()})(self)`;
        const workerBlobUrl = URL.createObjectURL(new Blob([workerContent], { type: 'application/javascript' }));

        function initializeWebWorker(worker: Worker): Promise<Worker> {
            return new Promise((resolve, reject) => {
                const onError = (error: ErrorEvent) => {
                    worker.removeEventListener('error', onError);
                    worker.removeEventListener('message', onMessage);
                    reject(error);
                };

                const onMessage = (message: MessageEvent) => {
                    if (message.data.action === 'init') {
                        worker.removeEventListener('error', onError);
                        worker.removeEventListener('message', onMessage);
                        resolve(worker);
                    }
                };

                worker.addEventListener('error', onError);
                worker.addEventListener('message', onMessage);

                worker.postMessage({
                    action: 'init',
                });
            });
        }

        GaussianSplattingSorter._WorkerPool = new AutoReleaseWorkerPool(numWorkers, () => initializeWebWorker(new Worker(workerBlobUrl)));
    }

    cancled: boolean = false;
    actionId: string = '';
    positions: any;
    vertexCount: any;
    onmessage;

    constructor() {
        // Use 50% of the available logical processors but capped at 4.
        const numberOfWorkers = Math.min(Math.floor(navigator.hardwareConcurrency - 1), 16);
        GaussianSplattingSorter._Initialize(numberOfWorkers);
    }

    public terminate(): void {
        this.cancled = true;
        if (this.actionId.length > 0) {
            GaussianSplattingSorter._WorkerPool.cancel(this.actionId);
            this.actionId = '';
        }
        this.positions = null;
        this.vertexCount = 0;
        this.onmessage = null;
    }

    public postMessage(message: any, sth?): void {
        if (this.cancled) {
            return;
        }
        // updated on init
        if (message.positions) {
            this.positions = message.positions;
            this.vertexCount = message.vertexCount;
        }
        // update on view changed
        else {
            if (this.cancled) {
                return;
            }

            this.actionId = GaussianSplattingSorter._WorkerPool.push((worker, onComplete) => {
                if (this.cancled || this.actionId.length <= 0 || this.positions === null || this.positions.buffer.detached || this.vertexCount <= 0 || !message.view) {
                    // If actionId is empty, it means the action was cancelled before it started.
                    onComplete();
                    return;
                }

                const onError = (error: ErrorEvent) => {
                    worker.removeEventListener('error', onError);
                    worker.removeEventListener('message', onMessage);
                    onComplete();
                };

                const onMessage = (message: MessageEvent) => {
                    if (message.data.action === 'sort') {
                        worker.removeEventListener('error', onError);
                        worker.removeEventListener('message', onMessage);
                        if (!message.data.success) {
                        } else {
                            try {
                                this.onmessage(message);
                            } catch (err) {}
                        }
                        onComplete();
                    }
                };

                worker.addEventListener('error', onError);
                worker.addEventListener('message', onMessage);

                const positions = Float32Array.from(this.positions);
                const vertexCount = this.vertexCount;
                try {
                    worker.postMessage(
                        {
                            action: 'sort',
                            positions: positions,
                            vertexCount: vertexCount,
                            view: message.view,
                        },
                        [positions.buffer],
                    );
                } catch (error) {
                    onError(error as ErrorEvent);
                    return;
                }
            });
        }
    }
}
