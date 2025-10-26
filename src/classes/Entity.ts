import { EntityComponents } from "./EntityComponents.js";
import { EntityInformation } from "./EntityInformation.js";
import { DrawEntityComponents } from "./states/DrawEntityComponents.js";

export class Entity {
  public information = new EntityInformation();
  public components!: EntityComponents;

  getComponents(): EntityComponents {
    return this.components;
  }

  setDrawComponents = (): this => {
    this.components = new DrawEntityComponents();
    this.components.setAllComponents(this.information.getInformation());
    return this;
  };

  // setTextSize(text: string, height: number): this {
  //   this.information.size = {
  //     width: Math.ceil(text.length * (height / 1.85)),
  //     height: height,
  //   };
  //   this.information.halfWidth = this.information.size.width / 2;
  //   return this;
  // }
}
