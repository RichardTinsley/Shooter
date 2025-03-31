import { SIZES } from "../constants/game";
import { TextFactory } from "../entities/texts/TextFactory";
export var LABELS;
(function (LABELS) {
    LABELS["BEGIN"] = "Begin!";
    LABELS["NEWGAME"] = "New Game";
    LABELS["OPTIONS"] = "Options";
    LABELS["ABOUT"] = "About";
})(LABELS || (LABELS = {}));
export class MenuLabelBuilder {
    static textBuilder(label) {
        let text;
        switch (label) {
            case LABELS.BEGIN:
                text = TextFactory.textPulsate()
                    .setText(LABELS.BEGIN)
                    .setSize(SIZES.TEXT_MENUITEM);
                break;
            case LABELS.NEWGAME:
                text = TextFactory.textGlow()
                    .setText(LABELS.NEWGAME)
                    .setSize(SIZES.TEXT_MENUITEM);
                break;
            case LABELS.OPTIONS:
                text = TextFactory.textGlow()
                    .setText(LABELS.NEWGAME)
                    .setSize(SIZES.TEXT_MENUITEM);
                break;
            case LABELS.ABOUT:
                text = TextFactory.textGlow()
                    .setText(LABELS.NEWGAME)
                    .setSize(SIZES.TEXT_MENUITEM);
                break;
        }
        return text;
    }
}
//# sourceMappingURL=MenuButtonLabelBuilder.js.map