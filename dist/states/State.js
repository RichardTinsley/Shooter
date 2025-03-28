import { BeginState } from "./BeginState.js";
import { LoadingState } from "./LoadingState.js";
import { MainMenuState } from "./MainMenuState.js";
export class State {
    constructor() {
        this.beginState = new BeginState(this);
        this.mainMenuState = new MainMenuState(this);
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