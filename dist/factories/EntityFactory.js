import { Entity } from "../classes/Entity.js";
import { getColour, COLOURS } from "../constants/colours.js";
import { SCREEN } from "../constants/screenSizes.js";
import { TEXT_SIZES } from "../constants/textSizes.js";
import { Components } from "./ComponentFactory.js";
export class EntityFactory {
    DSLogo() {
        const DSLogoImage = document.getElementById("dslogo");
        return new Entity()
            .setInformation(DSLogoImage, { x: SCREEN.HALF_WIDTH, y: SCREEN.HEIGHT * 0.75 }, { width: DSLogoImage.width, height: DSLogoImage.height })
            .setComponent(Components.IMAGE);
    }
    DSTitle() {
        return new Entity()
            .setInformation("Death Sorcery", { x: SCREEN.HALF_WIDTH, y: SCREEN.HEIGHT * 0.15 }, { width: 0, height: TEXT_SIZES.TITLE_SCREEN_TEXT })
            .setComponent(Components.TEXT);
    }
    StatusBar() {
        const StatusBar = new Entity().setInformation("", { x: SCREEN.HALF_WIDTH, y: SCREEN.HEIGHT * 0.9 }, { width: SCREEN.WIDTH / 3, height: 10 });
        StatusBar.information.setStatusBarColour(getColour(COLOURS.WHITE));
        StatusBar.setComponent(Components.STATUS_BAR);
        return StatusBar;
    }
}
//# sourceMappingURL=EntityFactory.js.map