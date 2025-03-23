import { SceneBase } from "../scenes/SceneBase.js";

export abstract class StateBase {
  protected abstract scene: SceneBase;
  //MUSIC
  //MENU

  constructor() {}

  abstract draw(ctx: CanvasRenderingContext2D): void;

  abstract update(): void;

  abstract resume(): void;

  abstract pause(): void;

  //MUTE()??
}
