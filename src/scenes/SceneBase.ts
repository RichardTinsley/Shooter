export abstract class SceneBase {
  constructor() {}

  abstract draw(ctx: CanvasRenderingContext2D): void;

  abstract update(): void;
}
