import { SIZES } from "../../constants/game.js";
import { Text } from "./Text.js";
import { TextFade } from "./TextFade.js";
import { TextGlow } from "./TextGlow.js";
import { TextPulsate } from "./TextPulsate.js";

export class TextFactory {
  static createMenuItemGlow(): TextGlow {
    return new TextGlow().setSize(SIZES.TEXT_MENUITEM);
  }

  static createMenuItemPulsate(): TextPulsate {
    return new TextPulsate().setSize(SIZES.TEXT_MENUITEM);
  }

  static createTextPlain(): Text {
    return new Text().setSize(SIZES.TEXT_IN_GAME).setAlignment("left");
  }

  static createTitleText(): Text {
    return new Text()
      .setPosition(SIZES.GAME_WIDTH_HALF, 100)
      .setText("Death Sorcery")
      .setSize(SIZES.TEXT_TITLE);
  }

  static createSummongText(): TextFade {
    return new TextFade()
      .setPosition(SIZES.GAME_WIDTH_HALF, SIZES.GAME_HEIGHT - 130)
      .setText("Summoning...")
      .setSize(SIZES.TEXT_MENUITEM);
  }

  static createBeginText(): Text {
    return new TextPulsate()
      .setPosition(SIZES.GAME_WIDTH_HALF, SIZES.GAME_HEIGHT - 110)
      .setText("Begin!");
  }
}
