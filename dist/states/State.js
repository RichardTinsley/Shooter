import { BeginState } from "./BeginState.js";
import { LoadingState } from "./LoadingState.js";
import { MainMenuState } from "./MainMenuState.js";
export class State {
    constructor() {
        this.currentState = new LoadingState(this);
        this.setBeginState = () => (this.currentState = new BeginState(this));
        this.setMainMenuState = () => (this.currentState = new MainMenuState(this));
        this.setNewGameState = () => (this.currentState = new BeginState(this));
        this.setOptionsState = () => (this.currentState = new BeginState(this));
        this.setAboutState = () => (this.currentState = new BeginState(this));
    }
    getCurrentState() {
        return this.currentState;
    }
}
//# sourceMappingURL=State.js.map