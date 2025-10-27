import { EntityComponents } from "./EntityComponents.js";
import { EntityInformation } from "./EntityInformation.js";
export class Entity {
    constructor() {
        this.information = new EntityInformation();
        this.components = new EntityComponents();
        this.setComponent = (component) => {
            this.components.setComponent(component);
            return this;
        };
    }
    draw(ctx) {
        this.components.draw(ctx, this.information.getInformation());
    }
    update() {
        this.components.update(this.information.getInformation());
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