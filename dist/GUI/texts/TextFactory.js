import { SIZES } from "../../constants/sizes.js";
import { Text } from "./Text.js";
import { TextFade } from "./TextFade.js";
import { TextGlow } from "./TextGlow.js";
import { TextPulsate } from "./TextPulsate.js";
export class TextFactory {
    static text() {
        return new Text();
    }
    static textGlow() {
        return new TextGlow();
    }
    static textPulsate() {
        return new TextPulsate();
    }
    static textFade() {
        return new TextFade();
    }
    static createTextPlain() {
        return new Text().setHeight(SIZES.TEXT_IN_GAME).setAlignment("left");
    }
}
//# sourceMappingURL=TextFactory.js.map