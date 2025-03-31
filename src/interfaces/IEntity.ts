import { Position } from "../constants/types.js";

export interface IDrawable {
  position: Position;

  draw(ctx: CanvasRenderingContext2D): void;
  update(event: [boolean, number]): void;
  setPosition(position: Position): this;
  getPosition(): Position;
}

export interface IAnimatedSprite extends IDrawable {
  animateFrames(event: [boolean, number]): void;
  animateRows(event: [boolean, number]): void;
}

export interface IMovingSprite extends IAnimatedSprite {
  updateMovement(event: [boolean, number]): void;
  setSpeed(speed: number): this;
  setDestination(position: Position): this;
}

export interface IText extends IDrawable {
  setText(text: string): this;
  setSize(size: number): this;
  setAlignment(alignment: CanvasTextAlign): this;
  setState(state: number): this;
}
