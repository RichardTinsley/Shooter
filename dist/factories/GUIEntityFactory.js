import { Entity } from "../classes/Entity.js";
import { SCREEN } from "../constants/screenSizes.js";
import { TEXT_SIZES } from "../constants/textSizes.js";
import { Components } from "./ComponentFactory.js";
export class GUIEntityFactory {
    DSLogo() {
        const DSLogoImage = document.getElementById("dslogo");
        return new Entity()
            .setComponents([Components.IMAGE])
            .setInformation(DSLogoImage, { x: SCREEN.HALF_WIDTH, y: SCREEN.HEIGHT * 0.75 }, { width: DSLogoImage.width, height: DSLogoImage.height });
    }
    DSTitle() {
        return new Entity()
            .setComponents([Components.TEXT])
            .setInformation("Death Sorcery", { x: SCREEN.HALF_WIDTH, y: SCREEN.HEIGHT * 0.15 }, { width: 0, height: TEXT_SIZES.TITLE_SCREEN_TEXT });
    }
    Summoning() {
        return new Entity()
            .setComponents([Components.TEXT_FADE])
            .setInformation("Summoning...", { x: SCREEN.HALF_WIDTH, y: SCREEN.HEIGHT * 0.8 }, { width: 0, height: TEXT_SIZES.MENU_BUTTON });
    }
    StatusBar() {
        return new Entity()
            .setComponents([Components.STATUS_BAR])
            .setInformation("", { x: SCREEN.HALF_WIDTH, y: SCREEN.HEIGHT * 0.9 }, { width: SCREEN.WIDTH / 3, height: 10 });
    }
}
//# sourceMappingURL=GUIEntityFactory.js.map