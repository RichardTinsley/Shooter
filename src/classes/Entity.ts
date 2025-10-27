import { IDraw, IUpdate } from "../interfaces/interfaces.js";
import { Position, Size } from "../types/types.js";
import { EntityComponents } from "./EntityComponents.js";
import { EntityInformation } from "./EntityInformation.js";

export class Entity implements IDraw, IUpdate {
  public information = new EntityInformation();
  public components = new EntityComponents();

  draw(ctx: CanvasRenderingContext2D): void {
    this.components.draw(ctx, this.information.getInformation());
  }
  update(): void {
    this.components.update(this.information.getInformation());
  }

  getComponents(): EntityComponents {
    return this.components;
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

  setComponent = (components: number[]): this => {
    components.forEach((component) => this.components.setComponent(component));
    return this;
  };
}
