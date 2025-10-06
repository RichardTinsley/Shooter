import { SCREEN } from "../constants/screenSizes.js";
import { TEXT_SIZES } from "../constants/textSizes.js";
import { Text } from "../components/Text.js";
export class TextFactory {
    static DSTitle() {
        return new Text()
            .setNormalText()
            .setSharedPosition({
            x: SCREEN.HALF_WIDTH,
            y: SCREEN.HEIGHT * 0.15,
        })
            .setText("Death Sorcery", TEXT_SIZES.TITLE_SCREEN_TEXT);
    }
    static Summoning() {
        return new Text()
            .setFadeText()
            .setSharedPosition({
            x: SCREEN.HALF_WIDTH,
            y: SCREEN.HEIGHT * 0.82,
        })
            .setText("Summoning...", TEXT_SIZES.MENU_BUTTON);
    }
    static Begin() {
        return new Text()
            .setPulsateText()
            .setSharedPosition({
            x: SCREEN.HALF_WIDTH,
            y: SCREEN.HEIGHT * 0.85,
        })
            .setText("Begin!", TEXT_SIZES.BEGIN_BUTTON);
    }
}
//# sourceMappingURL=TextFactory.js.map