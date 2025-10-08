import { IEntityComponent, IStateRender } from "../../interfaces/interfaces.js";
import { Entity } from "../Entity.js";

export class EntityDrawState implements IStateRender {
  constructor(public entity: Entity) {}

  draw(ctx: CanvasRenderingContext2D): void {
    this.entity.visual.draw(ctx, this.entity.coordinates);
  }

  update(): void {
    throw new Error("Method not implemented.");
  }
}
