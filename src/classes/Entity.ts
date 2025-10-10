import { EntityComponent } from "./EntityComponent.js";
import { EntityCoordinates } from "./EntityCoordinates.js";

const COMPONENTS = {
  VISUAL: "visual",
  HITBOX: "hitbox",
  MOUSE: "mouse",
  ENEMY_MOVEMENT: "enemyMovement",
  PROJECTILE_MOVMENT: "projectileMovement",
  STATUS_BAR: "statusBar",
  SHADOW: "shadow",
  SOUNDS: "sounds",
};

export abstract class Entity {
  coordinates = new EntityCoordinates();
  components = new Map<string, EntityComponent>();

  draw(ctx: CanvasRenderingContext2D): void {
    this.components.forEach((component) => component.draw(ctx, this.coordinates));
  }
  update(): void {
    this.components.forEach((component) => component.update(this.coordinates));
  }

  getComponent(key: string): EntityComponent {
    return this.components.get(key) as EntityComponent;
  }

  setComponent(key: string, component: EntityComponent): this {
    this.components.set(key, component);
    return this;
  }

  deleteComponent(key: string): this {
    this.components.delete(key);
    return this;
  }
}
