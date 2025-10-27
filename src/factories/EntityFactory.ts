import { Entity } from "../classes/Entity.js";
import { getColour, COLOURS } from "../constants/colours.js";
import { SCREEN } from "../constants/screenSizes.js";
import { TEXT_SIZES } from "../constants/textSizes.js";

export class EntityFactory {
  DSLogo(): Entity {
    const DSLogoImage = document.getElementById("dslogo") as HTMLImageElement;

    return new Entity()
      .setInformation(
        DSLogoImage,
        { x: SCREEN.HALF_WIDTH, y: SCREEN.HEIGHT * 0.75 },
        { width: DSLogoImage.width, height: DSLogoImage.height }
      )
      .setDrawComponents();
  }

  DSTitle(): Entity {
    return new Entity()
      .setInformation(
        "Death Sorcery",
        { x: SCREEN.HALF_WIDTH, y: SCREEN.HEIGHT * 0.15 },
        { width: 0, height: TEXT_SIZES.TITLE_SCREEN_TEXT }
      )
      .setTextComponents();
  }

  StatusBar(): Entity {
    const StatusBar = new Entity().setInformation(
      "",
      { x: SCREEN.HALF_WIDTH, y: SCREEN.HEIGHT * 0.9 },
      { width: SCREEN.WIDTH / 3, height: 10 }
    );

    StatusBar.information.setStatusBarColour(getColour(COLOURS.WHITE));

    StatusBar.setStatusBarComponents();

    return StatusBar;
  }

  //   static LoadingBar(currentStatus: number, maximumStatus: number): StatusBar {
  //     return new StatusBar()
  //       .setSharedPosition({
  //         x: SCREEN.HALF_WIDTH,
  //         y: SCREEN.HEIGHT * 0.9,
  //       })
  //       .setSharedSize({ width: SCREEN.WIDTH / 3, height: 10 })
  //       .setStatus(currentStatus, maximumStatus)
  //       .setDrawOffsets(0);
  //   }
}
