import { ImageComponent } from "../components/Image.js";
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
export class ComponentFactory {
    createComponent(key) {
        switch (key) {
            case Components.IMAGE:
                return new ImageComponent();
            default:
                throw new Error("Component Type Not Recognised!");
        }
    }
}
//# sourceMappingURL=ComponentFactory.js.map