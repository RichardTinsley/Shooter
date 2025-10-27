import { ComponentFactory } from "../factories/ComponentFactory.js";
import { EntityInformation } from "./EntityInformation.js";
export class Entity {
    constructor() {
        this.information = new EntityInformation();
        this.components = new Map();
    }
    draw(ctx) {
        this.components.forEach((component) => component.draw(ctx, this.information.getInformation()));
    }
    update() {
        this.components.forEach((component) => component.update(this.information.getInformation()));
    }
    getComponent(key) {
        return this.components.get(key);
    }
    setComponents(components) {
        const factory = new ComponentFactory();
        components.forEach((component) => this.components.set(component, factory.createComponent(component)));
        return this;
    }
    setInformation(visual, position, size, scale = 1) {
        this.information.setVisual(visual);
        this.information.setPosition(position);
        this.information.setSize(size, scale);
        return this;
    }
}
//# sourceMappingURL=Entity.js.map