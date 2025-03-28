export type Position = {
  x: number;
  y: number;
};

export type Sprite = {
  image: CanvasImageSource;
  width: number;
  height: number;
  frame?: number;
  row?: number;
};

export interface IDrawable {
  position: Position;
  // sprite?: Sprite;
  draw(ctx: CanvasRenderingContext2D): void;
  update(event: number): void;
  setPosition(x: number, y: number): this;
  getPosition(): Position;
}

export interface IAnimatedSprite extends IDrawable {
  animate(): void;
}

export interface IMovingSprite extends IAnimatedSprite {
  move(): void;
}

export interface IText extends IDrawable {
  // text: string;
  // size: number;
  // align: CanvasTextAlign;
  // lineWidth: number;
  // alpha: number;
  // state: number;

  setText(text: string): this;
  setSize(size: number): this;
  setAlignment(alignment: CanvasTextAlign): this;
  setState(state: number): this;
}
