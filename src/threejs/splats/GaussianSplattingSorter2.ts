export class GaussianSplattingSorter {
    private _worker: Worker = null;

    private static _CreateWorker = function (self: Worker) {
        let vertexCount = 0;
        let positions: Float32Array;
        let depthMix: BigInt64Array;
        let indices: Uint32Array;
        let floatMix: Float32Array;

        self.onmessage = (e: any) => {
            // updated on init
            if (e.data.positions) {
                positions = e.data.positions;
                vertexCount = e.data.vertexCount;
                depthMix = e.data.depthMix;
                indices = new Uint32Array(depthMix.buffer);
                floatMix = new Float32Array(depthMix.buffer);
            }
            // udpate on view changed
            else {
                const viewProj = e.data.view;
                if (!positions || !viewProj) {
                    // Sanity check, it shouldn't happen!
                    throw new Error('positions or view is not defined!');
                }

                // Sort
                for (let j = 0; j < vertexCount; j++) {
                    indices[2 * j] = j;
                }

                let depthFactor = -1;
                if (e.data.useRightHandedSystem) {
                    depthFactor = 1;
                }

                for (let j = 0; j < vertexCount; j++) {
                    floatMix[2 * j + 1] = 10000 + (viewProj[2] * positions[4 * j + 0] + viewProj[6] * positions[4 * j + 1] + viewProj[10] * positions[4 * j + 2]) * depthFactor;
                }

                depthMix.sort();

                self.postMessage({ depthMix }, [depthMix.buffer]);
            }
        };
    };

    constructor() {
        this._worker = new Worker(
            URL.createObjectURL(
                new Blob(['(', GaussianSplattingSorter._CreateWorker.toString(), ')(self)'], {
                    type: 'application/javascript',
                }),
            ),
        );
    }

    public terminate(): void {
        this._worker?.terminate();
        this._worker = null;
    }

    public postMessage(message: any, options?: StructuredSerializeOptions): void;
    public postMessage(message: any, transfer: Transferable[]): void;
    public postMessage(message: any, sth): void {
        this._worker!.postMessage(message, sth);
    }

    public get onmessage() {
        return this._worker!.onmessage;
    }
    public set onmessage(val) {
        this._worker!.onmessage = val;
    }
}
