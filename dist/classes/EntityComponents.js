import { ComponentFactory } from "../factories/ComponentFactory.js";
export class EntityComponents {
    constructor() {
        this.components = new Map();
    }
    draw(ctx, information) {
        this.components.forEach((component) => component.draw(ctx, information));
    }
    update(information) {
        this.components.forEach((component) => component.update(information));
    }
    getComponent(key) {
        return this.components.get(key);
    }
    setComponent(key) {
        const factory = new ComponentFactory();
        this.components.set(key, factory.createComponent(key));
        return this;
    }
}
//# sourceMappingURL=EntityComponents.js.map