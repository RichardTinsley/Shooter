import { Components } from "../factories/ComponentFactory.js";
import { EntityComponents } from "./EntityComponents.js";
import { EntityInformation } from "./EntityInformation.js";
export class Entity {
    constructor() {
        this.information = new EntityInformation();
        this.setStatusBarComponents = () => {
            this.components = new EntityComponents().setComponent(Components.STATUS_BAR);
            this.components.setAllComponents(this.information.getInformation());
            return this;
        };
        this.setDrawComponents = () => {
            this.components = new EntityComponents().setComponent(Components.IMAGE);
            this.components.setAllComponents(this.information.getInformation());
            return this;
        };
        this.setTextComponents = () => {
            this.components = new EntityComponents().setComponent(Components.TEXT);
            this.components.setAllComponents(this.information.getInformation());
            return this;
        };
    }
    getComponents() {
        return this.components;
    }
}
//# sourceMappingURL=Entity.js.map