import { SCREEN } from "../constants/screenSizes.js";
import { TEXT_SIZES } from "../constants/textSizes.js";
import { Text } from "../components/Text.js";
import { NormalText } from "../components/TextStates/NormalText.js";
import { FadeText } from "../components/TextStates/FadeText.js";
import { PulsateText } from "../components/TextStates/PulsateText.js";

export class TextFactory {
  static DSTitle(): NormalText {
    return new Text()
      .setNormalText()
      .setSharedPosition({
        x: SCREEN.HALF_WIDTH,
        y: SCREEN.HEIGHT * 0.15,
      })
      .setText("Death Sorcery", TEXT_SIZES.TITLE_SCREEN_TEXT);
  }

  static Summoning(): FadeText {
    return new Text()
      .setFadeText()
      .setSharedPosition({
        x: SCREEN.HALF_WIDTH,
        y: SCREEN.HEIGHT * 0.82,
      })
      .setText("Summoning...", TEXT_SIZES.MENU_BUTTON);
  }

  static Begin(): PulsateText {
    return new Text()
      .setPulsateText()
      .setSharedPosition({
        x: SCREEN.HALF_WIDTH,
        y: SCREEN.HEIGHT * 0.85,
      })
      .setText("Begin!", TEXT_SIZES.BEGIN_BUTTON);
  }

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
}
