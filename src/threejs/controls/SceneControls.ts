import { FirstPersonControls, FirstPersonControlsOptions } from './FirstPersonControls';
import { ThreejsSceneLayer } from '../threejs-scene';

export type ControlsOptions = { type } & (FirstPersonControlsOptions | undefined);
export type Controls = FirstPersonControls | undefined;

export class SceneControls {
    private _scene: ThreejsSceneLayer;
    private _controls: Controls;

    constructor(scene: ThreejsSceneLayer) {
        this._scene = scene;
        this._controls = undefined;
    }

    setControls(controlsOptions: ControlsOptions) {
        let threeControls = null;
        switch (controlsOptions.type) {
            case 'firstPerson':
                threeControls = new FirstPersonControls(this._scene, controlsOptions);
                break;
        }

        this._setControls(threeControls);
        return threeControls;
    }

    getControls() {
        return this._controls;
    }

    private _setControls(controls: Controls) {
        if (this._controls === controls) return;

        if (this._controls) {
            this._controls.disable();
        }

        this._controls = controls;

        if (this._controls) {
            this._controls.enable();
        }
    }
}
