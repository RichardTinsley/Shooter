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
        this.coordinates = {
            position: { x: 0, y: 0 },
            destination: { x: 0, y: 0 },
            size: { width: 0, height: 0 },
            scaledSize: { width: 0, height: 0 },
            speed: 0,
            scale: 0,
            halfWidth: 0,
            drawOffsetX: 0,
            drawOffsetY: 0,
            currentStatus: 0,
            maxStatus: 0,
        };
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
    setPosition(position) {
        this.coordinates.position = Object.assign({}, position);
        return this;
    }
    setSize(size, scale) {
        console.log(this.coordinates);
        this.coordinates.size = Object.assign({}, size);
        this.coordinates.scale = scale;
        this.coordinates.scaledSize = {
            width: size.width * scale,
            height: size.height * scale,
        };
        this.coordinates.halfWidth = this.coordinates.scaledSize.width / 2;
        return this;
    }
    setTextSize(text, height) {
        this.coordinates.size = {
            width: Math.ceil(text.length * (height / 1.85)),
            height: height,
        };
        this.coordinates.halfWidth = this.coordinates.size.width / 2;
        return this;
    }
}
//# sourceMappingURL=Entity.js.map