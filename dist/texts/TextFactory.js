import { SIZES } from "../constants/game.js";
import { Text } from "./Text.js";
import { TextFade } from "./TextFade.js";
import { TextPulsate } from "./TextPulsate.js";
export class TextFactory {
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
    static createBeginText() {
        return new TextPulsate()
            .setPosition(SIZES.GAME_WIDTH_HALF, SIZES.GAME_HEIGHT - 110)
            .setText("Begin!");
    }
}
//# sourceMappingURL=TextFactory.js.map