import { ComponentFactory } from "../factories/ComponentFactory.js";
export class EntityComponents {
    constructor() {
        this.components = new Map();
    }
    draw(ctx) {
        this.components.forEach((component) => component.draw(ctx));
    }
    update() {
        this.components.forEach((component) => component.update());
    }
    getComponent(key) {
        return this.components.get(key);
    }
    setComponent(key) {
        const factory = new ComponentFactory();
        this.components.set(key, factory.createComponent(key));
        return this;
    }
    setAllComponents(information) {
        this.components.forEach((component) => component.setComponentInformation(information));
    }
}
//# sourceMappingURL=EntityComponents.js.map