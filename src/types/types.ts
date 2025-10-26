export type Position = {
  x: number;
  y: number;
};

export type Size = {
  width: number;
  height: number;
};

export type Information = {
  image: CanvasImageSource;
  text: string;
  position: Position;
  destination: Position;
  size: Size;
  scaledSize: Size;
  speed: number;
  scale: number;
  halfWidth: number;
};

//MERGE TYPES WITH & and shit
export type Cursor = {
  x: number;
  y: number;
  radius: number;
  width: number;
  height: number;
  style: CSSStyleDeclaration;
};

export type HitBox = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type HitCircle = {
  x: number;
  y: number;
  radius: number;
};

export type Sprites = {
  move: string;
  death: string;
  idle: string;
  attack: string;
  attack2?: string;
  attack3?: string;
};
