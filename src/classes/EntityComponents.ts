import { ComponentBaseClass } from "../components/ComponentBaseClass.js";
import { ComponentFactory } from "../factories/ComponentFactory.js";
import { Information } from "../types/types.js";

export class EntityComponents {
  components = new Map<number, ComponentBaseClass>();

  draw(ctx: CanvasRenderingContext2D): void {
    this.components.forEach((component) => component.draw(ctx));
  }

  update(): void {
    this.components.forEach((component) => component.update());
  }

  getComponent(key: number): ComponentBaseClass {
    return this.components.get(key) as ComponentBaseClass;
  }

  setComponent(key: number): this {
    const factory = new ComponentFactory();
    this.components.set(key, factory.createComponent(key));
    return this;
  }

  setAllComponents(information: Information) {
    this.components.forEach((component) => component.setComponentInformation(information));
  }
}
