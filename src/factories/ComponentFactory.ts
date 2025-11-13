import { ComponentBaseClass } from "../components/ComponentBaseClass.js";
import { AnimateOnceComponent } from "../components/AnimateOnce.js";
import { EnemyMovementComponent } from "../components/EnemyMovement.js";
import { FadeComponent } from "../components/Fade.js";
import { PulsateComponent } from "../components/Pulsate.js";

export enum Components {
  Animation,
  EnemyMovement,
  Fade,
  Pulsate,
}
export const components = new Map<number, ComponentBaseClass>([
  [Components.Animation, new AnimateOnceComponent()],
  [Components.EnemyMovement, new EnemyMovementComponent()],
  [Components.Fade, new FadeComponent()],
  [Components.Pulsate, new PulsateComponent()],
]);

export class ComponentFactory {
  createComponent(key: number): ComponentBaseClass {
    return components.get(key) as ComponentBaseClass;
  }
}
