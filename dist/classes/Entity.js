import { EntityCoordinates } from "./EntityCoordinates.js";
export const COMPONENTS = {
    VISUAL: "visual",
    HITBOX: "hitbox",
    MOUSE: "mouse",
    ENEMY_MOVEMENT: "enemyMovement",
    PROJECTILE_MOVMENT: "projectileMovement",
    STATUS_BAR: "statusBar",
    SHADOW: "shadow",
    SOUNDS: "sounds",
};
export class Entity {
    constructor() {
        this.coordinates = new EntityCoordinates();
        this.components = new Map();
    }
    draw(ctx) {
        this.components.forEach((component) => component.draw(ctx, this.coordinates));
    }
    update() {
        this.components.forEach((component) => component.update(this.coordinates));
    }
    getComponent(key) {
        return this.components.get(key);
    }
    setComponent(key, component) {
        this.components.set(key, component);
        return this;
    }
    deleteComponent(key) {
        this.components.delete(key);
        return this;
    }
    getPosition() {
        return this.coordinates.position;
    }
    setPosition(position) {
        this.coordinates.position = Object.assign({}, position);
        return this;
    }
    getSize() {
        return this.coordinates.size;
    }
    setSize(size, scale) {
        this.coordinates.size = Object.assign({}, size);
        this.coordinates.scale = scale;
        this.coordinates.scaleSize = {
            width: size.width * scale,
            height: size.height * scale,
        };
        this.coordinates.halfWidth = this.coordinates.scaleSize.width / 2;
        return this;
    }
}
//# sourceMappingURL=Entity.js.map