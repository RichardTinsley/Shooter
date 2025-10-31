import { oscillate } from "../utilities/math.js";
import { TextComponent } from "./Text.js";
export class TextPulsateComponent extends TextComponent {
    update(information) {
        information.scaledSize.height += oscillate(1, information.startTime, 0.65, 1);
    }
}
//# sourceMappingURL=TextPulsate.js.map