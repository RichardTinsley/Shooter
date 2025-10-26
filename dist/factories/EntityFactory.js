import { Entity } from "../classes/Entity.js";
import { SCREEN } from "../constants/screenSizes.js";
import { TEXT_SIZES } from "../constants/textSizes.js";
export class EntityFactory {
    DSLogo() {
        const DSLogoImage = document.getElementById("dslogo");
        const DSLogo = new Entity();
        DSLogo.information
            .setInformation({ x: SCREEN.HALF_WIDTH, y: SCREEN.HEIGHT * 0.75 }, { width: DSLogoImage.width, height: DSLogoImage.height }, 1)
            .setImage(DSLogoImage);
        DSLogo.setDrawComponents();
        return DSLogo;
    }
    DSTitle() {
        const DSTitle = new Entity();
        DSTitle.information
            .setText("Death Sorcery", TEXT_SIZES.TITLE_SCREEN_TEXT)
            .setInformation({ x: SCREEN.HALF_WIDTH, y: SCREEN.HEIGHT * 0.15 }, { width: 0, height: TEXT_SIZES.TITLE_SCREEN_TEXT }, 1);
        DSTitle.setTextComponents();
        return DSTitle;
    }
}
//# sourceMappingURL=EntityFactory.js.map