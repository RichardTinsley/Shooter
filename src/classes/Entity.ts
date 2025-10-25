import { ComponentBaseClass } from "../components/ComponentBaseClass.js";
import { EntityCoordinates } from "./EntityCoordinates.js";

export enum Components {
  VISUAL,
  HITBOX,
  MOUSE,
  ENEMY_MOVEMENT,
  PROJECTILE_MOVMENT,
  STATUS_BAR,
  SHADOW,
  SOUNDS,
}

export class Entity {
  //THIS IS A STATE AND COORDINATES AND GO UP INTO ENTITY
  coordinates = new EntityCoordinates();
  components = new Map<number, ComponentBaseClass>();

  draw(ctx: CanvasRenderingContext2D): void {
    this.components.forEach((component) => component.draw(ctx, this.coordinates));
  }

  update(): void {
    this.components.forEach((component) => component.update(this.coordinates));
  }

  getComponent(key: number): ComponentBaseClass {
    return this.components.get(key) as ComponentBaseClass;
  }

  setComponent(key: number, component: ComponentBaseClass): this {
    this.components.set(key, component);
    return this;
  }
}
