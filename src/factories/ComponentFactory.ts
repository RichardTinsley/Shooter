import { ComponentBaseClass } from "../components/ComponentBaseClass.js";
import { ImageComponent } from "../components/Image.js";

export enum Components {
  IMAGE,
  TEXT,
  HITBOX,
  MOUSE,
  ENEMY_MOVEMENT,
  PROJECTILE_MOVMENT,
  STATUS_BAR,
  SHADOW,
  SOUNDS,
}

export class ComponentFactory {
  createComponent(key: number): ComponentBaseClass {
    switch (key) {
      case Components.IMAGE:
        return new ImageComponent();

      default:
        throw new Error("Component Type Not Recognised!");
    }
  }
}
