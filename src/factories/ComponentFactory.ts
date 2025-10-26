import { ComponentBaseClass } from "../components/ComponentBaseClass.js";
import { ImageComponent } from "../components/Image.js";
import { StatusBarComponent } from "../components/StatusBar.js";
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

export class ComponentFactory {
  createComponent(key: number): ComponentBaseClass {
    const components = new Map<number, ComponentBaseClass>([
      [Components.IMAGE, new ImageComponent()],
      [Components.TEXT, new TextComponent()],
      [Components.STATUS_BAR, new StatusBarComponent()],
    ]);

    return components.get(key) as ComponentBaseClass;
  }
}
