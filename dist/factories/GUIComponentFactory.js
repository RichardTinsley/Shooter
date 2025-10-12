import { Entity, Components } from "../classes/Entity.js";
import { ImageComponent } from "../components/ImageComponent.js";
import { SCREEN } from "../constants/screenSizes.js";
export class GUIComponentFactory {
    DSLogo() {
        const DSLogoImage = document.getElementById("dslogo");
        const DSLogo = new Entity().setComponent(Components.IMAGE, new ImageComponent().setImage(DSLogoImage));
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