import { Entity, COMPONENTS } from "../classes/Entity.js";
import { ImageComponent } from "../components/ImageComponent.js";
import { SCREEN } from "../constants/screenSizes.js";
export class GUIComponentFactory {
    static DSLogo() {
        const DSLogoImage = document.getElementById("dslogo");
        return new Entity()
            .setComponent(COMPONENTS.VISUAL, new ImageComponent().setImage(DSLogoImage).setDrawOffsets({
            width: SCREEN.HALF_WIDTH,
            height: SCREEN.HEIGHT * 0.75,
        }))
            .setSize({ width: DSLogoImage.width, height: DSLogoImage.height }, 1);
    }
}
//# sourceMappingURL=GUIComponentFactory.js.map