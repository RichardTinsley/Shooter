import { Information } from "../types/types.js";
import { oscillate, Oscillations } from "../utilities/oscillation.js";
import { ComponentBaseClass } from "./ComponentBaseClass.js";

export class FadeComponent extends ComponentBaseClass {
  draw(ctx: CanvasRenderingContext2D, information: Information): void {
    return;
  }
  update(information: Information) {
    information.alpha = oscillate(Oscillations.Cosine, information.startTime, 0.15, 1) + 0.75;
  }
}
