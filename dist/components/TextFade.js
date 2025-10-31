import { oscillate } from "../utilities/oscillation.js";
import { TextComponent } from "./Text.js";
export class TextFadeComponent extends TextComponent {
    update(information) {
        information.alpha = oscillate(1, information.startTime, 0.15, 1) + 0.75;
    }
}
//# sourceMappingURL=TextFade.js.map