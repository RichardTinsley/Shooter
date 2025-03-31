import { BeginState } from "./BeginState.js";
import { LoadingState } from "./LoadingState.js";
import { MainMenuState } from "./MainMenuState.js";
import { GUI } from "../GUI/GUI.js";

export interface IState {
  state: State;
  gui: GUI;

  draw(ctx: CanvasRenderingContext2D): void;
  update(event: [boolean, number]): void;
}

export class State {
  public currentState: IState = new LoadingState(this);

  public getCurrentState(): IState {
    return this.currentState;
  }

  public setBeginState = () => (this.currentState = new BeginState(this));

  public setMainMenuState = () => (this.currentState = new MainMenuState(this));

  public setNewGameState = () => (this.currentState = new BeginState(this));

  public setOptionsState = () => (this.currentState = new BeginState(this));

  public setAboutState = () => (this.currentState = new BeginState(this));
}
