import { IDraw, IUpdate, IComponent } from "../interfaces/interfaces.js";
import { Position, Size } from "../types/types.js";

export abstract class Component implements IDraw, IUpdate, IComponent {
  protected position!: Position;
  protected size!: Size;
  protected drawOffsetX: number = 0;
  protected drawOffsetY: number = 0;

  abstract draw(ctx: CanvasRenderingContext2D): void;
  abstract update(): void;

  constructor() {}

  setPositionPointer(position: Position): this {
    this.position = position;
    return this;
  }

  setSizePointer(size: Size): this {
    this.size = size;
    return this;
  }

  setDrawOffsets(offsetX: number, offsetY: number): this {
    this.drawOffsetX = offsetX;
    this.drawOffsetY = offsetY;
    return this;
  }
}
