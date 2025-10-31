import { ComponentBaseClass } from "../components/ComponentBaseClass.js";
import { ImageComponent } from "../components/Image.js";
import { StatusBarComponent } from "../components/StatusBar.js";
import { TextComponent } from "../components/Text.js";
import { TextFadeComponent } from "../components/TextFade.js";
import { TextPulsateComponent } from "../components/TextPulsate.js";

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
  TEXT_FADE,
  TEXT_PULSATING,
}

export class ComponentFactory {
  createComponent(key: number): ComponentBaseClass {
    const components = new Map<number, ComponentBaseClass>([
      [Components.IMAGE, new ImageComponent()],
      [Components.TEXT, new TextComponent()],
      [Components.STATUS_BAR, new StatusBarComponent()],
      [Components.TEXT_PULSATING, new TextPulsateComponent()],
      [Components.TEXT_FADE, new TextFadeComponent()],
    ]);

    return components.get(key) as ComponentBaseClass;
  }
}
