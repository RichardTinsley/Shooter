import { IDraw, IUpdate, IEntity } from "../interfaces/interfaces.js";
import { Position, Size } from "../types/types.js";

export abstract class Entity implements IDraw, IUpdate, IEntity {
  protected position!: Position;
  protected size!: Size;

  abstract draw(ctx: CanvasRenderingContext2D): void;
  abstract update(): void;

  setPosition(position: Position): this {
    this.position = { ...position };
    return this;
  }

  setSize(size: Size): this {
    this.size = { ...size };
    return this;
  }
}
