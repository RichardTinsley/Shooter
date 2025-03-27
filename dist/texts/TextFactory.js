import { SIZES } from "../constants/game.js";
import { Text } from "./Text.js";
import { TextFade } from "./TextFade.js";
export var TEXTS;
(function (TEXTS) {
    TEXTS[TEXTS["TITLE"] = 0] = "TITLE";
    TEXTS[TEXTS["SUMMONING"] = 1] = "SUMMONING";
    TEXTS[TEXTS["PLAIN"] = 2] = "PLAIN";
})(TEXTS || (TEXTS = {}));
export class TextFactory {
    static createText(selector, text = "") {
        switch (selector) {
            case TEXTS.TITLE:
                return new Text()
                    .setPosition(SIZES.GAME_WIDTH_HALF, 100)
                    .setText("Death Sorcery")
                    .setSize(SIZES.TEXT_TITLE);
            case TEXTS.SUMMONING:
                return new TextFade()
                    .setPosition(SIZES.GAME_WIDTH_HALF, SIZES.GAME_HEIGHT - 130)
                    .setText("Summoning...")
                    .setSize(SIZES.TEXT_MENUITEM);
            case TEXTS.PLAIN:
                return new Text().setSize(SIZES.TEXT_IN_GAME).setAlignment("left");
        }
    }
}
export class TextFactory2 {
    static createTitleText() {
        return new Text()
            .setPosition(SIZES.GAME_WIDTH_HALF, 100)
            .setText("Death Sorcery")
            .setSize(SIZES.TEXT_TITLE);
    }
    static createSummongText() {
        return new TextFade()
            .setPosition(SIZES.GAME_WIDTH_HALF, SIZES.GAME_HEIGHT - 130)
            .setText("Summoning...")
            .setSize(SIZES.TEXT_MENUITEM);
    }
    static createTextPlain() {
        return new Text().setSize(SIZES.TEXT_IN_GAME).setAlignment("left");
    }
}
//# sourceMappingURL=TextFactory.js.map