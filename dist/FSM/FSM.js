import { GameStates } from "./GameStates.js";
export class CoreFsm {
    constructor(config) {
        this._stateMap = config.states;
        this._initialState = config.initial;
        this._currentState = this._initialState;
        this._previousState = this._initialState;
        this.State = GameStates[this._currentState];
    }
    draw(ctx) {
        this.State.draw(ctx);
    }
    update() {
        this.State.update();
    }
    get state() {
        return this._currentState;
    }
    get previousState() {
        return this._previousState;
    }
    transition(event) {
        const nextState = this._stateMap[this._currentState][event];
        if (nextState) {
            this._previousState = this._currentState;
            this._currentState = nextState;
        }
    }
}
export function createFsm(config) {
    return new CoreFsm(config);
}
//# sourceMappingURL=FSM.js.map