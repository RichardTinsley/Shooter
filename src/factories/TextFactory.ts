import { SCREEN_SIZES } from "../constants/screenSizes.js";
import { TEXT_SIZES } from "../constants/textSizes.js";
import { Text } from "../components/Text.js";
import { NormalText } from "../components/TextStates/NormalText.js";
import { FadeText } from "../components/TextStates/FadeText.js";

export class TextFactory {
  //   static text(): Text {
  //     return new Text();
  //   }

  static DSTitle(): NormalText {
    return new Text()
      .setNormalText()
      .setSharedPosition({
        x: SCREEN_SIZES.SCREEN_WIDTH_HALF,
        y: SCREEN_SIZES.SCREEN_HEIGHT * 0.15,
      })
      .setSharedSize({ width: 0, height: TEXT_SIZES.TITLE_SCREEN_TEXT })
      .setText("Death Sorcery");
  }

  static Summoning(): FadeText {
    return new Text()
      .setFadeText()
      .setSharedPosition({
        x: SCREEN_SIZES.SCREEN_WIDTH_HALF,
        y: SCREEN_SIZES.SCREEN_HEIGHT * 0.8,
      })
      .setSharedSize({ width: 0, height: TEXT_SIZES.MENU_BUTTON })
      .setText("Summoning...");
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
