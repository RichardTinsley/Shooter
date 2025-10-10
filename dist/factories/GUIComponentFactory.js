import { ImageComponent } from "../components/ImageComponent.js";
import { SCREEN } from "../constants/screenSizes.js";
export class GUIComponentFactory {
    static DSLogo() {
        const DSLogoImage = document.getElementById("dslogo");
        return new ImageComponent().setVisual(DSLogoImage).setDrawOffsets({
            width: SCREEN.HALF_WIDTH - DSLogoImage.width / 2,
            height: SCREEN.HEIGHT * 0.52 - DSLogoImage.height / 2,
        });
    }
}
//# sourceMappingURL=GUIComponentFactory.js.map