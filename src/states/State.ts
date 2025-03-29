import { BeginState } from "./BeginState.js";
import { LoadingState } from "./LoadingState.js";
import { MainMenuState } from "./MainMenuState.js";
import { GUI } from "../GUI/GUI.js";

export interface IState {
  state: State;
  gui: GUI;

  draw(ctx: CanvasRenderingContext2D): void;
  update(): void;
}

export class State {
  // public beginState = new BeginState(this);
  // public mainMenuState = new MainMenuState(this);

  public currentState: IState = new LoadingState(this);

  public setCurrentState(state: IState) {
    this.currentState = state;
  }

  public getCurrentState(): IState {
    return this.currentState;
  }

  public setBeginState() {
    this.currentState = new BeginState(this);
  }

  public setMainMenuState = () => {
    this.currentState = new MainMenuState(this);
  };

  public setNewGameState = () => {
    this.currentState = new BeginState(this);
  };
  public setOptionsState = () => {
    this.currentState = new BeginState(this);
  };
  public setAboutState = () => {
    this.currentState = new BeginState(this);
  };
}
