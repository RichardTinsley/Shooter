import { Entity } from "../classes/Entity.js";
import { SCREEN } from "../constants/screenSizes.js";

export class EntityFactory {
  DSLogo(): Entity {
    const DSLogoImage = document.getElementById("dslogo") as HTMLImageElement;

    const DSLogo = new Entity();
    DSLogo.information
      .setImage(DSLogoImage)
      .setInformation(
        { x: SCREEN.HALF_WIDTH, y: SCREEN.HEIGHT * 0.75 },
        { width: DSLogoImage.width, height: DSLogoImage.height },
        1
      );

    DSLogo.setDrawComponents();

    return DSLogo;
  }

  // DSTitle(): Entity {
  //   const DSTitleText = "Death Sorcery";

  //   const DSTitle = new Entity()
  //     .setComponent(Components.VISUAL, new TextComponent().setText(DSTitleText))
  //     .setTextSize(DSTitleText, TEXT_SIZES.TITLE_SCREEN_TEXT)
  //     .setPosition({
  //       x: SCREEN.HALF_WIDTH,
  //       y: SCREEN.HEIGHT * 0.15,
  //     });

  //   return DSTitle;
  // }

  // StatusBar(): Entity {
  //   const StatusBar = new Entity()
  //     .setComponent(Components.VISUAL, new StatusBarComponent())
  //     .setPosition({
  //       x: SCREEN.HALF_WIDTH,
  //       y: SCREEN.HEIGHT * 0.9,
  //     })
  //     .setSize({ width: SCREEN.WIDTH / 3, height: 10 }, 1);

  //   return StatusBar;
  // }

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
