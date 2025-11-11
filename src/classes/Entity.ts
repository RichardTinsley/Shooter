import { ComponentBaseClass } from "../components/ComponentBaseClass.js";
import { ComponentFactory } from "../factories/ComponentFactory.js";
import { IRender } from "../interfaces/interfaces.js";
import { VisualInformation } from "../types/entities.js";
import { Position, Size } from "../types/types.js";

export class Entity implements IRender {
  protected information!: VisualInformation;
  protected components = new Map<number, ComponentBaseClass>();

  draw(ctx: CanvasRenderingContext2D): void {
    this.components.forEach((component) => component.draw(ctx, this.information));
  }

  update(): void {
    this.components.forEach((component) => component.update(this.information));
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

  setPosition(position: Position): this {
    this.information.position = { ...position };
    return this;
  }

  setSize(size: Size, scale: number = 1): this {
    this.information.size = { ...size };
    this.information.scale = scale;

    this.information.scaledSize = {
      width: size.width * scale,
      height: size.height * scale,
    };

    this.information.halfWidth = this.information.scaledSize.width / 2;
    this.information.halfHeight = this.information.scaledSize.height / 2;
    return this;
  }
}
