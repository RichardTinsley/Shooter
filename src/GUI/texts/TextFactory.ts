import { SIZES } from "../../constants/game.js";
import { Text } from "./Text.js";
import { TextFade } from "./TextFade.js";
import { TextGlow } from "./TextGlow.js";
import { TextPulsate } from "./TextPulsate.js";

export class TextFactory {
  static text(): Text {
    return new Text();
  }

  static textGlow(): TextGlow {
    return new TextGlow();
  }

  static textPulsate(): TextPulsate {
    return new TextPulsate();
  }

  static textFade(): TextFade {
    return new TextFade();
  }

  static createTextPlain(): Text {
    return new Text().setHeight(SIZES.TEXT_IN_GAME).setAlignment("left");
  }
}
