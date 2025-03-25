import { SceneLoaded } from "../scenes/SceneLoaded.js";
import { StateBase } from "./StateBase.js";

export class StateLoaded extends StateBase {
  protected scene = new SceneLoaded();

  constructor() {
    super();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.scene.draw(ctx);
  }
  update(): void {
    this.scene.update();
  }
  resume(): void {
    throw new Error("Method not implemented.");
  }
  pause(): void {
    throw new Error("Method not implemented.");
  }
}
