export type Position = {
  x: number;
  y: number;
};

export type Sprite = {
  image: CanvasImageSource;
  width: number;
  height: number;
  frame: number;
  row: number;
};

export interface IEntity {
  sprite: Sprite;
  position: Position;
  draw(ctx: CanvasRenderingContext2D): void;
  setPosition(x: number, y: number): void;
  getPosition(): Position;
}

// export interface IText{
//     setText()
// }

export interface IAnimate extends IEntity {
  update(event: number): void;
  animate(): void;
}
