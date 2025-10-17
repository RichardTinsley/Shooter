export class CoreFsm {
    constructor(config) {
        this._stateMap = config.states;
        this._initialState = config.initial;
        this._currentState = this._initialState;
        this._previousState = this._initialState;
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
    canTransition(event) {
        const nextState = this._stateMap[this._currentState][event];
        return nextState !== undefined;
    }
}
export function createFsm(config) {
    return new CoreFsm(config);
}
//# sourceMappingURL=FSM.js.map