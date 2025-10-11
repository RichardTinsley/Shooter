import { Position, Size } from "../types/types.js";
import { ComponentBaseClass } from "../components/ComponentBaseClass.js";
import { EntityCoordinates } from "./EntityCoordinates.js";

export const COMPONENTS = {
  IMAGE: "image",
  TEXT: "text",
  HITBOX: "hitbox",
  MOUSE: "mouse",
  ENEMY_MOVEMENT: "enemyMovement",
  PROJECTILE_MOVMENT: "projectileMovement",
  STATUS_BAR: "statusBar",
  SHADOW: "shadow",
  SOUNDS: "sounds",
};

export class Entity {
  coordinates = new EntityCoordinates();
  components = new Map<string, ComponentBaseClass>();

  draw(ctx: CanvasRenderingContext2D): void {
    this.components.forEach((component) => component.draw(ctx, this.coordinates));
  }
  update(): void {
    this.components.forEach((component) => component.update(this.coordinates));
  }

  getComponent(key: string): ComponentBaseClass {
    return this.components.get(key) as ComponentBaseClass;
  }

  setComponent(key: string, component: ComponentBaseClass): this {
    this.components.set(key, component);
    return this;
  }

  deleteComponent(key: string): this {
    this.components.delete(key);
    return this;
  }
}
