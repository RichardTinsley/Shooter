import { NormalText } from "../components/TextStates/NormalText.js";
import { Text } from "../components/Text.js";

export class TextFactory {
  //   static text(): Text {
  //     return new Text();
  //   }

  static DeathSorceryTitle(): NormalText {
    return new Text()
      .setNormalText()
      .setSharedPosition({ x: 100, y: 100 })
      .setSharedSize({ width: 0, height: 10 })
      .setText("Death  Sorcery");
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
