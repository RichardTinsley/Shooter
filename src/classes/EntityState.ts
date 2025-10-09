import { EntityComponent } from "./EntityComponent.js";
import { EntityCoordinates } from "./EntityCoordinates.js";

export abstract class EntityState {
  coordinates = new EntityCoordinates();
  components: EntityComponent[] = [];

  draw(ctx: CanvasRenderingContext2D): void {
    this.components.forEach((component) => component.draw(ctx, this.coordinates));
  }
  update(): void {
    this.components.forEach((component) => component.update(this.coordinates));
  }

  addComponent(component: EntityComponent): this {
    this.components.push(component);
    return this;
  }
}
