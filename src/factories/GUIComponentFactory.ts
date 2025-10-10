import { EntityComponent } from "../classes/EntityComponent.js";
import { ImageComponent } from "../components/ImageComponent.js";
import { SCREEN } from "../constants/screenSizes.js";

export class GUIComponentFactory {
  static DSLogo(): EntityComponent {
    const DSLogoImage = document.getElementById("dslogo") as HTMLImageElement;

    return new ImageComponent().setVisual(DSLogoImage).setDrawOffsets({
      width: SCREEN.HALF_WIDTH - DSLogoImage.width / 2,
      height: SCREEN.HEIGHT * 0.52 - DSLogoImage.height / 2,
    });
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
