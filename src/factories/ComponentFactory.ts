import { ComponentBaseClass } from "../components/ComponentBaseClass.js";
import { ImageComponent } from "../components/Image.js";
import { TextComponent } from "../components/Text.js";

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

const components = new Map<number, ComponentBaseClass>([
  [Components.IMAGE, new ImageComponent()],
  [Components.TEXT, new TextComponent()],
]);

export class ComponentFactory {
  createComponent(key: number): ComponentBaseClass {
    return components.get(key) as ComponentBaseClass;
  }
}
