import { Information } from "../types/types.js";
import { oscillate, Oscillations } from "../utilities/oscillation.js";
import { TextComponent } from "./Text.js";

export class TextPulsateComponent extends TextComponent {
  update(information: Information) {
    information.scaledSize.height += oscillate(
      Oscillations.Cosine,
      information.startTime,
      0.7,
      0.25
    );
  }
}
