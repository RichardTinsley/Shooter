export interface IDraw {
  draw(ctx: CanvasRenderingContext2D): void;
}

export interface IUpdate {
  update(): void;
}
