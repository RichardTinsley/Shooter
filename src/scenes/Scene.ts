import { Menu } from "../menus/Menu.js";
import { SceneLoaded } from "./SceneLoaded.js";
import { SceneLoading } from "./SceneLoading.js";

export interface State {
  scene: Scene;

  draw(ctx: CanvasRenderingContext2D): void;
  update(): void;
  loadingScene(): void;
  loadedScene(): void;
}

export class Scene {
  public loadingState = new SceneLoading(this);
  public loadedState = new SceneLoaded(this);

  public currentState: State = this.loadingState;

  public menu!: Menu;

  public setState(state: State) {
    this.currentState = state;
  }

  public getState(): State {
    return this.currentState;
  }
}

// console.log("Order state: " + (<any>order.getCurrentState()).constructor.name);
