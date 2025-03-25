import { SIZES } from "../constants/game.js";
import { Text } from "./Text.js";
import { TextFade } from "./TextFade.js";

export enum TEXTS {
  TITLE,
  SUMMONING,
}

export class TextFactory {
  static factory(selector: number) {
    switch (selector) {
      case TEXTS.TITLE:
        return new Text({
          x: SIZES.GAME_WIDTH_HALF,
          y: 100,
        })
          .setText("Death Sorcery")
          .setSize(SIZES.TEXT_TITLE);
      case TEXTS.SUMMONING:
        return new TextFade({
          x: SIZES.GAME_WIDTH_HALF,
          y: SIZES.GAME_HEIGHT - 130,
        })
          .setText("Summoning...")
          .setSize(SIZES.TEXT_MENUITEM);
    }
  }
}
