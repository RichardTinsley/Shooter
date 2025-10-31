export interface IRender {
  draw(ctx: CanvasRenderingContext2D): void;
  update(): void;
}
