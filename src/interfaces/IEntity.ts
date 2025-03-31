import { Position } from "../constants/types.js";

export interface IDrawable {
  position: Position;

  draw(ctx: CanvasRenderingContext2D): void;
  update(event: { update: boolean; delta: number }): void;
  setPosition(position: Position): this;
  getPosition(): Position;
}

export interface IAnimatedSprite extends IDrawable {
  animateFrames(event: { update: boolean; delta: number }): void;
  animateRows(event: { update: boolean; delta: number }): void;
}

export interface IMovingSprite extends IAnimatedSprite {
  updateMovement(event: { update: boolean; delta: number }): void;
  setSpeed(speed: number): this;
  setDestination(position: Position): this;
}

export interface IText extends IDrawable {
  setText(text: string): this;
  setSize(size: number): this;
  setAlignment(alignment: CanvasTextAlign): this;
  setState(state: number): this;
}
