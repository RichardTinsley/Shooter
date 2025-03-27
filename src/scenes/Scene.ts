import { LoadingComplete } from "./LoadingComplete.js";
import { Loading } from "./Loading.js";
import { ScreenBase } from "../screens/ScreenBase.js";

export interface State {
  scene: Scene;
  screen: ScreenBase;

  draw(ctx: CanvasRenderingContext2D): void;
  update(): void;
}

export class Scene {
  public loadingState = new Loading(this);
  public loadedState = new LoadingComplete(this);

  public currentState: State = this.loadingState;

  public setState(state: State) {
    this.currentState = state;
  }

  public getState(): State {
    return this.currentState;
  }
}

// console.log("Order state: " + (<any>order.getCurrentState()).constructor.name);
