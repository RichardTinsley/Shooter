export abstract class Scene {
  constructor() {}

  abstract draw(ctx: CanvasRenderingContext2D): void;

  abstract update(): void;
}
