import { Scene, State } from "./Scene.js";

export class SceneLoaded implements State {
  scene: Scene;

  constructor(scene: Scene) {
    this.scene = scene;
    console.log("LOADED!!!!");
  }

  draw(ctx: CanvasRenderingContext2D): void {
    throw new Error("Method not implemented.");
  }

  update(): void {
    throw new Error("Method not implemented.");
  }

  loadingScene() {
    return;
  }

  loadedScene() {
    return;
  }
}
