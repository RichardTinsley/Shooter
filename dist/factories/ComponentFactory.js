import { ImageComponent } from "../components/Image.js";
import { StatusBarComponent } from "../components/StatusBar.js";
import { TextComponent } from "../components/Text.js";
import { TextFadeComponent } from "../components/TextFade.js";
import { TextPulsateComponent } from "../components/TextPulsate.js";
export var Components;
(function (Components) {
    Components[Components["Image"] = 0] = "Image";
    Components[Components["Text"] = 1] = "Text";
    Components[Components["Hitbox"] = 2] = "Hitbox";
    Components[Components["EnemyMovement"] = 3] = "EnemyMovement";
    Components[Components["ProjectileMovement"] = 4] = "ProjectileMovement";
    Components[Components["StatusBar"] = 5] = "StatusBar";
    Components[Components["Shadow"] = 6] = "Shadow";
    Components[Components["TextFade"] = 7] = "TextFade";
    Components[Components["TextPulsate"] = 8] = "TextPulsate";
})(Components || (Components = {}));
export class ComponentFactory {
    createComponent(key) {
        const components = new Map([
            [Components.Image, new ImageComponent()],
            [Components.Text, new TextComponent()],
            [Components.StatusBar, new StatusBarComponent()],
            [Components.TextPulsate, new TextPulsateComponent()],
            [Components.TextFade, new TextFadeComponent()],
        ]);
        return components.get(key);
    }
}
//# sourceMappingURL=ComponentFactory.js.map