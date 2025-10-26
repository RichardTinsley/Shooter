import { Entity } from "../classes/Entity.js";
import { SCREEN } from "../constants/screenSizes.js";
export class EntityFactory {
    DSLogo() {
        const DSLogoImage = document.getElementById("dslogo");
        const DSLogo = new Entity();
        DSLogo.information
            .setImage(DSLogoImage)
            .setInformation({ x: SCREEN.HALF_WIDTH, y: SCREEN.HEIGHT * 0.75 }, { width: DSLogoImage.width, height: DSLogoImage.height }, 1);
        DSLogo.setDrawComponents();
        return DSLogo;
    }
}
//# sourceMappingURL=EntityFactory.js.map