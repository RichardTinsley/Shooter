import { Entity, Components } from "../classes/Entity.js";
import { ImageComponent } from "../components/ImageComponent.js";
import { TextComponent } from "../components/TextComponent.js";
import { SCREEN } from "../constants/screenSizes.js";
import { TEXT_SIZES } from "../constants/textSizes.js";

export class GUIComponentFactory {
  DSLogo(): Entity {
    const DSLogoImage = document.getElementById("dslogo") as HTMLImageElement;

    const DSLogo = new Entity().setComponent(
      Components.IMAGE,
      new ImageComponent().setImage(DSLogoImage)
    );

    DSLogo.coordinates
      .setSize({ width: DSLogoImage.width, height: DSLogoImage.height }, 1)
      .setPosition({
        x: SCREEN.HALF_WIDTH,
        y: SCREEN.HEIGHT * 0.75,
      });

    return DSLogo;
  }

  DSTitle(): Entity {
    const DSTitleText = "Death Sorcery";

    const DSTitle = new Entity().setComponent(
      Components.TEXT,
      new TextComponent().setText(DSTitleText)
    );

    DSTitle.coordinates.setTextSize(DSTitleText, TEXT_SIZES.TITLE_SCREEN_TEXT).setPosition({
      x: SCREEN.HALF_WIDTH,
      y: SCREEN.HEIGHT * 0.15,
    });

    return DSTitle;
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
