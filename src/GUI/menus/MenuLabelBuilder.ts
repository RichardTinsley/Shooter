import { SIZES } from "../../constants/game.js";
import { TextFactory } from "../../entities/texts/TextFactory.js";

export enum LABELS {
  BEGIN = "Begin!",
  NEWGAME = "New Game",
  OPTIONS = "Options",
  ABOUT = "About",
}

export class MenuLabelBuilder {
  static createLabel(label: string): any {
    let text!: any;

    switch (label) {
      case LABELS.BEGIN:
        text = TextFactory.textPulsate()
          .setText(LABELS.BEGIN)
          .setSize(SIZES.TEXT_MENUITEM);
        break;
      case LABELS.NEWGAME:
        text = TextFactory.textGlow()
          .setText(LABELS.NEWGAME)
          .setSize(SIZES.TEXT_MENUITEM);
        break;
      case LABELS.OPTIONS:
        text = TextFactory.textGlow()
          .setText(LABELS.OPTIONS)
          .setSize(SIZES.TEXT_MENUITEM);
        break;
      case LABELS.ABOUT:
        text = TextFactory.textGlow()
          .setText(LABELS.ABOUT)
          .setSize(SIZES.TEXT_MENUITEM);
        break;
    }

    return text;
  }
}
