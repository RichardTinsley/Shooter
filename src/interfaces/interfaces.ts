import { Position, Size } from "../types/types.js";

export interface IDraw {
  draw(ctx: CanvasRenderingContext2D): void;
}

export interface IUpdate {
  update(): void;
}

export interface IEntity {
  setPosition(position: Position): this;
  setSize(size: Size): this;
}

export interface IComponent {
  setPositionPointer(position: Position): this;
  setSizePointer(size: Size): this;
}
