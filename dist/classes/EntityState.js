import { EntityCoordinates } from "./EntityCoordinates.js";
export class EntityState {
    constructor() {
        this.coordinates = new EntityCoordinates();
        this.components = [];
    }
    draw(ctx) {
        this.components.forEach((component) => component.draw(ctx, this.coordinates));
    }
    update() {
        this.components.forEach((component) => component.update(this.coordinates));
    }
    addComponent(component) {
        this.components.push(component);
        return this;
    }
}
//# sourceMappingURL=EntityState.js.map