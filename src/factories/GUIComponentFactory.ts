import { Entity, COMPONENTS } from "../classes/Entity.js";
import { ComponentBaseClass } from "../components/ComponentBaseClass.js";
import { ImageComponent } from "../components/ImageComponent.js";
import { SCREEN } from "../constants/screenSizes.js";

export class GUIComponentFactory {
  static DSLogo(): Entity {
    const DSLogoImage = document.getElementById("dslogo") as HTMLImageElement;

    return new Entity()
      .setComponent(
        COMPONENTS.VISUAL,
        new ImageComponent().setImage(DSLogoImage).setDrawOffsets({
          width: SCREEN.HALF_WIDTH,
          height: SCREEN.HEIGHT * 0.75,
        })
      )
      .setSize({ width: DSLogoImage.width, height: DSLogoImage.height }, 1);
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
