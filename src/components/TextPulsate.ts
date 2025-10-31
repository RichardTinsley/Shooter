import { Information } from "../types/types.js";
import { oscillate, OSCILLATIONS } from "../utilities/math.js";
import { TextComponent } from "./Text.js";

export class TextPulsateComponent extends TextComponent {
  //   draw(ctx: CanvasRenderingContext2D, information: Information): void {

  //     super.draw(ctx, information);
  //   }
  update(information: Information) {
    information.scaledSize.height += oscillate(OSCILLATIONS.COSINE, information.startTime, 0.65, 1);
  }
}
