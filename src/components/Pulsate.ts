import { oscillate, Oscillations } from "../utilities/oscillation.js";

export class PulsateComponent {
  update(information: Information) {
    information.scaledSize.height += oscillate(
      Oscillations.Cosine,
      information.startTime,
      0.7,
      0.25
    );
  }
}
