import { SCREEN_SIZES } from "../constants/screenSizes.js";
import { TEXT_SIZES } from "../constants/textSizes.js";
import { Text } from "../components/Text.js";
export class TextFactory {
    static DSTitle() {
        return new Text()
            .setNormalText()
            .setSharedPosition({
            x: SCREEN_SIZES.SCREEN_WIDTH_HALF,
            y: SCREEN_SIZES.SCREEN_HEIGHT * 0.15,
        })
            .setSharedSize({ width: 0, height: TEXT_SIZES.TITLE_SCREEN_TEXT })
            .setText("Death Sorcery");
    }
    static Summoning() {
        return new Text()
            .setFadeText()
            .setSharedPosition({
            x: SCREEN_SIZES.SCREEN_WIDTH_HALF,
            y: SCREEN_SIZES.SCREEN_HEIGHT * 0.82,
        })
            .setSharedSize({ width: 0, height: TEXT_SIZES.MENU_BUTTON })
            .setText("Summoning...");
    }
    static Begin() {
        return new Text()
            .setPulsateText()
            .setSharedPosition({
            x: SCREEN_SIZES.SCREEN_WIDTH_HALF,
            y: SCREEN_SIZES.SCREEN_HEIGHT * 0.85,
        })
            .setSharedSize({ width: 0, height: TEXT_SIZES.BEGIN_BUTTON })
            .setText("Begin!");
    }
}
//# sourceMappingURL=TextFactory.js.map