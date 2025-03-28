import { BeginState } from "./BeginState.js";
import { LoadingState } from "./LoadingState.js";
export class State {
    constructor() {
        this.beginState = new BeginState(this);
        this.currentState = new LoadingState(this);
    }
    setState(state) {
        this.currentState = state;
    }
    getState() {
        return this.currentState;
    }
}
//# sourceMappingURL=State.js.map