import { Information } from "../types/types.js";
import { oscillate, Oscillations } from "../utilities/oscillation.js";
import { ComponentBaseClass } from "./ComponentBaseClass.js";

export class PulsateComponent extends ComponentBaseClass {
  update(information: Information) {
    information.scaledSize.height += oscillate(
      Oscillations.Cosine,
      information.startTime,
      0.7,
      0.25
    );
  }
}
