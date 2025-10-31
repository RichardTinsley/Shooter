import { Entity } from "../classes/Entity.js";
import { SCREEN } from "../constants/screenSizes.js";
import { TEXT_SIZES } from "../constants/textSizes.js";
import { Components } from "./ComponentFactory.js";

export class GUIEntityFactory {
  DSLogo(): Entity {
    const DSLogoImage = document.getElementById("dslogo") as HTMLImageElement;

    return new Entity()
      .setComponents([Components.IMAGE])
      .setInformation(
        DSLogoImage,
        { x: SCREEN.HALF_WIDTH, y: SCREEN.HEIGHT * 0.75 },
        { width: DSLogoImage.width, height: DSLogoImage.height }
      );
  }

  DSTitle(): Entity {
    return new Entity()
      .setComponents([Components.TEXT])
      .setInformation(
        "Death Sorcery",
        { x: SCREEN.HALF_WIDTH, y: SCREEN.HEIGHT * 0.15 },
        { width: 0, height: TEXT_SIZES.TITLE_SCREEN_TEXT }
      );
  }

  StatusBar(): Entity {
    return new Entity()
      .setComponents([Components.STATUS_BAR])
      .setInformation(
        "",
        { x: SCREEN.HALF_WIDTH, y: SCREEN.HEIGHT * 0.9 },
        { width: SCREEN.WIDTH / 3, height: 10 }
      );
  }
}
