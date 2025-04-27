export type Position = {
  x: number;
  y: number;
};

export type Cursor = {
  x: number;
  y: number;
  radius: number;
  width: number;
  height: number;
  style: CSSStyleDeclaration;
  mouseOverEntity: any;
};

export const PLAIN_CURSOR = {
  getType: function (): string {
    return "Plain";
  },
  mouseClick: function (): void {
    return;
  },
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
