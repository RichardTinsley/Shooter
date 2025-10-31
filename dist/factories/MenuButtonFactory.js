import { Entity } from "../classes/Entity.js";
import { SCREEN } from "../constants/screenSizes.js";
import { TEXT_SIZES } from "../constants/textSizes.js";
import { Components } from "./ComponentFactory.js";
export class MenuButtonFactory {
    BeginButton() {
        return new Entity()
            .setComponents([Components.TextPulsate])
            .setInformation("Begin!", { x: SCREEN.HALF_WIDTH, y: SCREEN.HEIGHT * 0.85 }, { width: 0, height: TEXT_SIZES.BEGIN_BUTTON });
    }
}
//# sourceMappingURL=MenuButtonFactory.js.map