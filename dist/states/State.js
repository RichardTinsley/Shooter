import { LoadingComplete } from "./LoadingComplete.js";
import { Loading } from "./Loading.js";
export class State {
    constructor() {
        this.loadedState = new LoadingComplete(this);
        this.currentState = new Loading(this);
    }
    setState(state) {
        this.currentState = state;
    }
    getState() {
        return this.currentState;
    }
}
//# sourceMappingURL=State.js.map