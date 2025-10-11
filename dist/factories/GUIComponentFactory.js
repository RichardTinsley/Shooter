import { Entity, COMPONENTS } from "../classes/Entity.js";
import { ImageComponent } from "../components/ImageComponent.js";
import { SCREEN } from "../constants/screenSizes.js";
export class GUIComponentFactory {
    static DSLogo() {
        const DSLogoImage = document.getElementById("dslogo");
        const DSLogo = new Entity().setComponent(COMPONENTS.IMAGE, new ImageComponent().setImage(DSLogoImage));
        DSLogo.coordinates
            .setSize({ width: DSLogoImage.width, height: DSLogoImage.height }, 1)
            .setPosition({
            x: SCREEN.HALF_WIDTH,
            y: SCREEN.HEIGHT * 0.75,
        });
        return DSLogo;
    }
}
//# sourceMappingURL=GUIComponentFactory.js.map