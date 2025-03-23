import { LoadingScene } from "../scenes/LoadingScene.js";
import { SceneBase } from "../scenes/SceneBase.js";
import { StateBase } from "./StateBase.js";

export class LoadingState extends StateBase {
  protected scene: SceneBase = new LoadingScene();

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
