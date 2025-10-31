import { ComponentBaseClass } from "../components/ComponentBaseClass.js";
import { ImageComponent } from "../components/Image.js";
import { StatusBarComponent } from "../components/StatusBar.js";
import { TextComponent } from "../components/Text.js";
import { TextFadeComponent } from "../components/TextFade.js";
import { TextPulsateComponent } from "../components/TextPulsate.js";

export enum Components {
  Image,
  Text,
  Hitbox,
  EnemyMovement,
  ProjectileMovement,
  StatusBar,
  Shadow,
  TextFade,
  TextPulsate,
}

export class ComponentFactory {
  createComponent(key: number): ComponentBaseClass {
    const components = new Map<number, ComponentBaseClass>([
      [Components.Image, new ImageComponent()],
      [Components.Text, new TextComponent()],
      [Components.StatusBar, new StatusBarComponent()],
      [Components.TextPulsate, new TextPulsateComponent()],
      [Components.TextFade, new TextFadeComponent()],
    ]);

    return components.get(key) as ComponentBaseClass;
  }
}
