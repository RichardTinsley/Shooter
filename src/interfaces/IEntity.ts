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
  // position: Position;
  draw(ctx: CanvasRenderingContext2D): void;
  update(event: number): void;
  setPosition(x: number, y: number): this;
  getPosition(): Position;
}

export interface ISprite extends IEntity {
  sprite: Sprite;
}

export interface IAnimatedSprite extends ISprite {
  animate(): void;
}

export interface IMovingSprite extends IAnimatedSprite {
  move(): void;
}

export interface IText extends IEntity {
  // text: string;
  // size: number;
  // align: CanvasTextAlign;
  // lineWidth: number;
  // alpha: number;
  // state: number;
  // position: Position;

  setText(text: string): this;
  setSize(size: number): this;
  setAlignment(alignment: CanvasTextAlign): this;
  setState(state: number): this;
}
