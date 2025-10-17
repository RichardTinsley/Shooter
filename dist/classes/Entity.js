import { EntityCoordinates } from "./EntityCoordinates.js";
export var Components;
(function (Components) {
    Components[Components["IMAGE"] = 0] = "IMAGE";
    Components[Components["TEXT"] = 1] = "TEXT";
    Components[Components["HITBOX"] = 2] = "HITBOX";
    Components[Components["MOUSE"] = 3] = "MOUSE";
    Components[Components["ENEMY_MOVEMENT"] = 4] = "ENEMY_MOVEMENT";
    Components[Components["PROJECTILE_MOVMENT"] = 5] = "PROJECTILE_MOVMENT";
    Components[Components["STATUS_BAR"] = 6] = "STATUS_BAR";
    Components[Components["SHADOW"] = 7] = "SHADOW";
    Components[Components["SOUNDS"] = 8] = "SOUNDS";
})(Components || (Components = {}));
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
}
//# sourceMappingURL=Entity.js.map