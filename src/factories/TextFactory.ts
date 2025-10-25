// import { SCREEN } from "../constants/screenSizes.js";
// import { TEXT_SIZES } from "../constants/textSizes.js";
// import { Text } from "../components/Text.js";
// import { NormalText } from "../components/TextStates/NormalText.js";
// import { FadeText } from "../components/TextStates/FadeText.js";
// import { PulsateText } from "../components/TextStates/PulsateText.js";

// export class TextFactory {
//      DSTitle(): NormalText {
//       return new Text()
//         // .setNormalText()
//         .setText("Death Sorcery", TEXT_SIZES.TITLE_SCREEN_TEXT)
//         .setSharedPosition({
//           x: SCREEN.HALF_WIDTH,
//           y: SCREEN.HEIGHT * 0.15,
//         });
//     }
//   }
//   static Summoning(): FadeText {
//     return new Text()
//       .setFadeText()
//       .setText("Summoning...", TEXT_SIZES.MENU_BUTTON)
//       .setSharedPosition({
//         x: SCREEN.HALF_WIDTH,
//         y: SCREEN.HEIGHT * 0.82,
//       });
//   }
//   static Begin(): PulsateText {
//     return new Text()
//       .setPulsateText()
//       .setText("Begin!", TEXT_SIZES.BEGIN_BUTTON)
//       .setSharedPosition({
//         x: SCREEN.HALF_WIDTH,
//         y: SCREEN.HEIGHT * 0.85,
//       });
//   }
//   static textGlow(): TextGlow {
//     return new TextGlow();
//   }
//   static textPulsate(): TextPulsate {
//     return new TextPulsate();
//   }
//   static textFade(): TextFade {
//     return new TextFade();
//   }
//   static createTextPlain(): Text {
//     return new Text().setHeight(SIZES.TEXT_IN_GAME).setAlignment("left");
//   }
// }
