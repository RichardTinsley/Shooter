import { Position } from "../constants/types.js";

export interface IDrawable {
  position: Position;

  draw(ctx: CanvasRenderingContext2D): void;
  update(event: number): void;
  setPosition(position: Position): this;
  getPosition(): Position;
}

export interface ISprite extends IDrawable {
  animateFrames(): void;
  animateRows(): void;
}

export interface IMovingSprite extends ISprite {
  updateMovement(): void;
  setSpeed(speed: number): this;
  setDestination(position: Position): this;
}

export interface IText extends IDrawable {
  setText(text: string): this;
  setSize(size: number): this;
  setAlignment(alignment: CanvasTextAlign): this;
  setState(state: number): this;
}
