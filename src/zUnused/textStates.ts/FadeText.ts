// import { oscillate, OSCILLATIONS } from "../../utilities/math.js";
// import { ITextState, Text } from "../Text.js";
// import { NormalText } from "./NormalText.js";

// export class FadeText extends NormalText implements ITextState {
//   protected frequency: number = 0.1;
//   protected alpha: number = -0.5;

//   constructor(protected state: Text) {
//     super(state);
//   }

//   draw(ctx: CanvasRenderingContext2D) {
//     super.draw(ctx);
//   }

//   update() {
//     const newAlpha = oscillate(OSCILLATIONS.COSINE, this.startTime, this.frequency, this.amplitude);
//     this.alpha = newAlpha * -1 + 0.5;
//   }
// }
