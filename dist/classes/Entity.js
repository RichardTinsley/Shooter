import { EntityCoordinates } from "./EntityCoordinates.js";
export var Components;
(function (Components) {
    Components[Components["VISUAL"] = 0] = "VISUAL";
    Components[Components["HITBOX"] = 1] = "HITBOX";
    Components[Components["MOUSE"] = 2] = "MOUSE";
    Components[Components["ENEMY_MOVEMENT"] = 3] = "ENEMY_MOVEMENT";
    Components[Components["PROJECTILE_MOVMENT"] = 4] = "PROJECTILE_MOVMENT";
    Components[Components["STATUS_BAR"] = 5] = "STATUS_BAR";
    Components[Components["SHADOW"] = 6] = "SHADOW";
    Components[Components["SOUNDS"] = 7] = "SOUNDS";
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