import { ImageComponent } from "../components/Image.js";
import { StatusBarComponent } from "../components/StatusBar.js";
import { TextComponent } from "../components/Text.js";
import { TextFadeComponent } from "../components/TextFade.js";
import { TextPulsateComponent } from "../components/TextPulsate.js";
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
    Components[Components["TEXT_FADE"] = 9] = "TEXT_FADE";
    Components[Components["TEXT_PULSATING"] = 10] = "TEXT_PULSATING";
})(Components || (Components = {}));
export class ComponentFactory {
    createComponent(key) {
        const components = new Map([
            [Components.IMAGE, new ImageComponent()],
            [Components.TEXT, new TextComponent()],
            [Components.STATUS_BAR, new StatusBarComponent()],
            [Components.TEXT_PULSATING, new TextPulsateComponent()],
            [Components.TEXT_FADE, new TextFadeComponent()],
        ]);
        return components.get(key);
    }
}
//# sourceMappingURL=ComponentFactory.js.map