import { BeginState } from "./BeginState.js";
import { LoadingState } from "./LoadingState.js";
import { Screen } from "../screens/Screen.js";

export interface IState {
  state: State;
  screen: Screen;

  draw(ctx: CanvasRenderingContext2D): void;
  update(): void;
}

export class State {
  public beginState = new BeginState(this);

  public currentState: IState = new LoadingState(this);

  public setState(state: IState) {
    this.currentState = state;
  }

  public getState(): IState {
    return this.currentState;
  }
}
