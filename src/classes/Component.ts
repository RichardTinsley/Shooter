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

  getSharedPosition(): Position {
    return this.position;
  }

  setSharedPosition(position: Position): this {
    this.position = position;
    return this;
  }

  getSharedSize(): Size {
    return this.size;
  }

  setSharedSize(size: Size): this {
    this.size = size;
    return this;
  }

  setDrawOffsets(offsetY: number, offsetX: number = this.size.width / 2): this {
    this.drawOffsetX = offsetX;
    this.drawOffsetY = offsetY;
    return this;
  }
}
