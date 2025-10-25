export class CoreFsm {
    constructor(config, states) {
        this._stateMap = config.states;
        this._currentState = config.initial;
        this._state = states[this._currentState];
    }
    draw(ctx) {
        this._state.draw(ctx);
    }
    update() {
        this._state.update();
    }
    get state() {
        return this._currentState;
    }
    transition(event) {
        const nextState = this._stateMap[this._currentState][event];
        if (nextState)
            this._currentState = nextState;
    }
}
export function createFsm(config, state) {
    return new CoreFsm(config, state);
}
//# sourceMappingURL=FSM.js.map