import { EntityComponents } from "./EntityComponents.js";
import { EntityInformation } from "./EntityInformation.js";
export class Entity {
    constructor() {
        this.information = new EntityInformation();
        this.setComponent = (component) => {
            this.components = new EntityComponents().setComponent(component);
            this.components.setAllComponents(this.information.getInformation());
            return this;
        };
    }
    getComponents() {
        return this.components;
    }
    setInformation(visual, position, size, scale = 1) {
        this.information.setVisual(visual);
        this.information.setPosition(position);
        this.information.setSize(size, scale);
        return this;
    }
}
//# sourceMappingURL=Entity.js.map