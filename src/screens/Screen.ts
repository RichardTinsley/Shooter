import { Entity } from "../classes/Entity.js";
import { IRender } from "../interfaces/interfaces.js";

export class Screen implements IRender {
  protected entities: Entity[] = [];

  draw(ctx: CanvasRenderingContext2D): void {
    this.entities.forEach((entity) => entity.draw(ctx));
  }
  update(): void {
    this.entities.forEach((entity) => entity.update());
  }
}
