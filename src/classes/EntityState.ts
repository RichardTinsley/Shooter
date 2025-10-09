import { IEntityComponent } from "../interfaces/interfaces.js";
import { Coordinates } from "./Coordinates.js";

export abstract class EntityState {
  coordinates!: Coordinates;
  components: IEntityComponent[] = [];

  draw(ctx: CanvasRenderingContext2D): void {
    this.components.forEach((component) => component.draw(ctx, this.coordinates));
  }
  update(): void {
    this.components.forEach((component) => component.update(this.coordinates));
  }

  addComponent(component: IEntityComponent): this {
    this.components.push(component);
    return this;
  }
}
