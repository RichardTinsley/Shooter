import { Scene } from "../scenes/Scene.js";

export abstract class State {
  protected abstract scene: Scene;
  //MUSIC
  //MENU

  constructor() {}

  abstract draw(ctx: CanvasRenderingContext2D): void;

  abstract update(): void;

  abstract resume(): void;

  abstract pause(): void;

  //MUTE()??
}
