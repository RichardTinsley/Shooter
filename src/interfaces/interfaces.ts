export interface IDrawable {
  draw(ctx: CanvasRenderingContext2D): void;
}

export interface IRenderable extends IDrawable {
  update(): void;
}
