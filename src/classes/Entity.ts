import { ComponentBaseClass } from "../components/ComponentBaseClass.js";
import { ComponentFactory } from "../factories/ComponentFactory.js";
import { IDraw, IUpdate } from "../interfaces/interfaces.js";
import { Position, Size } from "../types/types.js";
import { EntityInformation } from "./EntityInformation.js";

export class Entity implements IDraw, IUpdate {
  public information = new EntityInformation();
  private components = new Map<number, ComponentBaseClass>();

  draw(ctx: CanvasRenderingContext2D): void {
    this.components.forEach((component) => component.draw(ctx, this.information.getInformation()));
  }

  update(): void {
    this.components.forEach((component) => component.update(this.information.getInformation()));
  }

  getComponent(key: number): ComponentBaseClass {
    return this.components.get(key) as ComponentBaseClass;
  }

  setComponents(components: number[]): this {
    const factory = new ComponentFactory();
    components.forEach((component) =>
      this.components.set(component, factory.createComponent(component))
    );
    return this;
  }

  setInformation(
    visual: CanvasImageSource | string,
    position: Position,
    size: Size,
    scale: number = 1
  ): this {
    this.information.setVisual(visual);
    this.information.setPosition(position);
    this.information.setSize(size, scale);
    return this;
  }
}
