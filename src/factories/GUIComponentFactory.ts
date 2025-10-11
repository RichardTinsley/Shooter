import { Entity, COMPONENTS } from "../classes/Entity.js";
import { ComponentBaseClass } from "../components/ComponentBaseClass.js";
import { ImageComponent } from "../components/ImageComponent.js";
import { SCREEN } from "../constants/screenSizes.js";

export class GUIComponentFactory {
  static DSLogo(): Entity {
    const DSLogoImage = document.getElementById("dslogo") as HTMLImageElement;

    const DSLogo = new Entity().setComponent(
      COMPONENTS.IMAGE,
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
