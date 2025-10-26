import { EntityComponents } from "./EntityComponents.js";
import { EntityInformation } from "./EntityInformation.js";
import { DrawEntityComponents } from "./states/DrawEntityComponents.js";
import { TextEntityComponents } from "./states/TextEntityComponents.js";

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

  setTextComponents = (): this => {
    this.components = new TextEntityComponents();
    this.components.setAllComponents(this.information.getInformation());
    return this;
  };
}
