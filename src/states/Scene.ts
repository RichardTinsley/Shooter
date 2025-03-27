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
  public loadingState: State;
  public loadedState: State;

  public currentState!: State;

  constructor() {
    this.loadingState = new SceneLoading(this);
    this.loadedState = new SceneLoaded(this);

    this.setState(this.loadingState);
  }

  public setState(state: State) {
    this.currentState = state;
  }

  public getCurrentState(): State {
    return this.currentState;
  }
}

// let order = new Order();

// order.getCurrentState().verifyPayment();
// order.getCurrentState().shipOrder();
// order.getCurrentState().cancelOrder();

// console.log("Order state: " + (<any>order.getCurrentState()).constructor.name);
