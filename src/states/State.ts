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
  public beginState = new BeginState(this);
  public mainMenuState = new MainMenuState(this);

  public currentState: IState = new LoadingState(this);

  public setState(state: IState) {
    this.currentState = state;
  }

  public getState(): IState {
    return this.currentState;
  }
}
