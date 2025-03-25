import { SceneLoading } from "../scenes/SceneLoading.js";
import { SceneBase } from "../scenes/SceneBase.js";
import { StateBase } from "./StateBase.js";

export class StateLoading extends StateBase {
  protected scene: SceneBase = new SceneLoading();

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
