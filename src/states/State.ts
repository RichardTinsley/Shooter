import { LoadingComplete } from "./LoadingComplete.js";
import { Loading } from "./Loading.js";
import { ScreenBase } from "../screens/ScreenBase.js";

export interface IState {
  state: State;
  screen: ScreenBase;

  draw(ctx: CanvasRenderingContext2D): void;
  update(): void;
  mouseOver(): any;
}

export class State {
  public loadedState = new LoadingComplete(this);

  public currentState: IState = new Loading(this);

  public setState(state: IState) {
    this.currentState = state;
  }

  public getState(): IState {
    return this.currentState;
  }
}
