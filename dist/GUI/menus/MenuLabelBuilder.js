import { SIZES } from "../../constants/game.js";
import { TextFactory } from "../texts/TextFactory.js";
export var LABELS;
(function (LABELS) {
    LABELS["BEGIN"] = "Begin!";
    LABELS["NEWGAME"] = "New Game";
    LABELS["OPTIONS"] = "Options";
    LABELS["ABOUT"] = "About";
})(LABELS || (LABELS = {}));
export class MenuLabelBuilder {
    static createLabel(label) {
        let text;
        switch (label) {
            case LABELS.BEGIN:
                text = TextFactory.textPulsate()
                    .setText(LABELS.BEGIN)
                    .setSize(SIZES.TEXT_BEGIN);
                break;
            case LABELS.NEWGAME:
                text = TextFactory.textGlow()
                    .setText(LABELS.NEWGAME)
                    .setSize(SIZES.TEXT_MENUITEM);
                break;
            case LABELS.OPTIONS:
                text = TextFactory.textGlow()
                    .setText(LABELS.OPTIONS)
                    .setSize(SIZES.TEXT_MENUITEM);
                break;
            case LABELS.ABOUT:
                text = TextFactory.textGlow()
                    .setText(LABELS.ABOUT)
                    .setSize(SIZES.TEXT_MENUITEM);
                break;
        }
        return text;
    }
}
//# sourceMappingURL=MenuLabelBuilder.js.map