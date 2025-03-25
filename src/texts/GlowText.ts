// import { TextBase } from "./Text.js";
// import { Position } from "../constants/types.js";
// import { ANIMATION } from "../constants/animation.js";
// import { oscillate, OSCILLATIONS } from "../utilities/math.js";

// export class GlowText extends TextBase {
//   lineWidth: number = 3;
//   private glow: number = 13;
//   private frequency: number = 0.7;
//   private amplitude: number = 0.2;

//   constructor(protected position: Position) {
//     super(position);
//   }

//   draw(ctx: CanvasRenderingContext2D) {
//     ctx.shadowColor = "#d53";
//     ctx.shadowBlur = this.glow;
//     super.draw(ctx);
//     ctx.shadowBlur = 0;
//   }

//   update() {
//     switch (this.state) {
//       case ANIMATION.ANIMATING:
//         this.glow += oscillate(
//           OSCILLATIONS.COSINE,
//           this.frequency,
//           this.amplitude
//         );
//         break;
//       case ANIMATION.FINISHED:
//         break;
//     }
//   }
// }
