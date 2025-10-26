import { Entity } from "../classes/Entity.js";
import { SCREEN } from "../constants/screenSizes.js";
import { TEXT_SIZES } from "../constants/textSizes.js";
export class EntityFactory {
    DSLogo() {
        const DSLogoImage = document.getElementById("dslogo");
        const DSLogo = new Entity();
        DSLogo.information
            .setImage(DSLogoImage)
            .setInformation({ x: SCREEN.HALF_WIDTH, y: SCREEN.HEIGHT * 0.75 }, { width: DSLogoImage.width, height: DSLogoImage.height });
        DSLogo.setDrawComponents();
        return DSLogo;
    }
    DSTitle() {
        const DSTitle = new Entity();
        DSTitle.information
            .setText("Death Sorcery", TEXT_SIZES.TITLE_SCREEN_TEXT)
            .setInformation({ x: SCREEN.HALF_WIDTH, y: SCREEN.HEIGHT * 0.15 }, { width: 0, height: TEXT_SIZES.TITLE_SCREEN_TEXT });
        DSTitle.setTextComponents();
        return DSTitle;
    }
    StatusBar() {
        const StatusBar = new Entity();
        StatusBar.information.setInformation({ x: SCREEN.HALF_WIDTH, y: SCREEN.HEIGHT * 0.9 }, { width: SCREEN.WIDTH / 3, height: 10 });
        StatusBar.setStatusBarComponents();
        return StatusBar;
    }
}
//# sourceMappingURL=EntityFactory.js.map