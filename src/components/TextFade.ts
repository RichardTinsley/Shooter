import { Information } from "../types/types.js";
import { oscillate, OSCILLATIONS } from "../utilities/math.js";
import { TextComponent } from "./Text.js";

export class TextFadeComponent extends TextComponent {
  update(information: Information) {
    information.alpha += oscillate(OSCILLATIONS.COSINE, information.startTime, 0.1, 1);
    console.log(information.alpha);
  }
}
