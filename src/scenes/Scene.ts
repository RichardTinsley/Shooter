import { LoadingScreen } from "../screens/LoadingScreen.js";
import { SceneLoaded } from "./SceneLoaded.js";
import { SceneLoading } from "./SceneLoading.js";

export interface State {
  scene: Scene;

  draw(ctx: CanvasRenderingContext2D): void;
  update(): void;
}

export interface ScreenBase {
  draw(ctx: CanvasRenderingContext2D): void;
  update(): void;
}

export class Scene {
  public screen: any = new LoadingScreen();

  public loadingState = new SceneLoading(this);
  public loadedState = new SceneLoaded(this);

  public currentState: State = this.loadingState;

  public setState(state: State) {
    this.currentState = state;
  }

  public getState(): State {
    return this.currentState;
  }
}

// console.log("Order state: " + (<any>order.getCurrentState()).constructor.name);
