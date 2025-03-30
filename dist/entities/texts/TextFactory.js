import { SIZES } from "../../constants/game.js";
import { Text } from "./Text.js";
import { TextFade } from "./TextFade.js";
import { TextGlow } from "./TextGlow.js";
import { TextPulsate } from "./TextPulsate.js";
export class TextFactory {
    static createMenuItemGlow() {
        return new TextGlow().setSize(SIZES.TEXT_MENUITEM);
    }
    static createMenuItemPulsate() {
        return new TextPulsate().setSize(SIZES.TEXT_MENUITEM);
    }
    static createTextPlain() {
        return new Text().setSize(SIZES.TEXT_IN_GAME).setAlignment("left");
    }
    static createTitleText() {
        return new Text()
            .setPosition({ x: SIZES.GAME_WIDTH_HALF, y: 100 })
            .setText("Death Sorcery")
            .setSize(SIZES.TEXT_TITLE);
    }
    static createSummongText() {
        return new TextFade()
            .setPosition({ x: SIZES.GAME_WIDTH_HALF, y: SIZES.GAME_HEIGHT - 130 })
            .setText("Summoning...")
            .setSize(SIZES.TEXT_MENUITEM);
    }
    static createBeginText() {
        return new TextPulsate()
            .setPosition({ x: SIZES.GAME_WIDTH_HALF, y: SIZES.GAME_HEIGHT - 110 })
            .setText("Begin!");
    }
}
//# sourceMappingURL=TextFactory.js.map