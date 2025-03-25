import { SIZES } from "../constants/game.js";
import { Text } from "./Text.js";
import { TextFade } from "./TextFade.js";

export enum TEXTS {
  TITLE,
  SUMMONING,
  PLAIN,
}

export class TextFactory {
  static createText(selector: number, text: string = ""): Text | undefined {
    switch (selector) {
      case TEXTS.TITLE:
        return new Text()
          .setPosition(SIZES.GAME_WIDTH_HALF, 100)
          .setText("Death Sorcery")
          .setSize(SIZES.TEXT_TITLE);
      case TEXTS.SUMMONING:
        return new TextFade()
          .setPosition(SIZES.GAME_WIDTH_HALF, SIZES.GAME_HEIGHT - 130)
          .setText("Summoning...")
          .setSize(SIZES.TEXT_MENUITEM);
      case TEXTS.PLAIN:
        return new Text().setSize(SIZES.TEXT_IN_GAME).setAlignment("left");
    }
  }
}
