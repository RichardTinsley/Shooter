import { oscillate } from "../utilities/oscillation.js";
import { TextComponent } from "./Text.js";
export class TextPulsateComponent extends TextComponent {
    update(information) {
        information.scaledSize.height += oscillate(1, information.startTime, 0.7, 0.25);
    }
}
//# sourceMappingURL=TextPulsate.js.map