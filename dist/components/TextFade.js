import { oscillate } from "../utilities/math.js";
import { TextComponent } from "./Text.js";
export class TextFadeComponent extends TextComponent {
    update(information) {
        information.alpha += oscillate(1, information.startTime, 0.1, 1);
        console.log(information.alpha);
    }
}
//# sourceMappingURL=TextFade.js.map