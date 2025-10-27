import { Position, Size } from "../types/types.js";
import { EntityComponents } from "./EntityComponents.js";
import { EntityInformation } from "./EntityInformation.js";

export class Entity {
  public information = new EntityInformation();
  public components!: EntityComponents;

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

  //MAKE THIS TAKE AN ARRAY AND LOOP THROUGH TO ADD MULTIPLE COMPONENTS
  setComponent = (component: number): this => {
    this.components = new EntityComponents().setComponent(component);
    this.components.setAllComponents(this.information.getInformation());
    return this;
  };
}
