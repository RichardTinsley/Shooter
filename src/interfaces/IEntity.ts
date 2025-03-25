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
  position: Position;
  draw(ctx: CanvasRenderingContext2D): void;
  update(event: number): void;
  setPosition(x: number, y: number): void;
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
