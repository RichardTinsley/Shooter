import { Components } from "../factories/ComponentFactory.js";
import { EntityComponents } from "./EntityComponents.js";
import { EntityInformation } from "./EntityInformation.js";

export class Entity {
  public information = new EntityInformation();
  public components!: EntityComponents;

  getComponents(): EntityComponents {
    return this.components;
  }

  setStatusBarComponents = (): this => {
    this.components = new EntityComponents().setComponent(Components.STATUS_BAR);
    this.components.setAllComponents(this.information.getInformation());
    return this;
  };

  setDrawComponents = (): this => {
    this.components = new EntityComponents().setComponent(Components.IMAGE);
    this.components.setAllComponents(this.information.getInformation());
    return this;
  };

  setTextComponents = (): this => {
    this.components = new EntityComponents().setComponent(Components.TEXT);
    this.components.setAllComponents(this.information.getInformation());
    return this;
  };
}
