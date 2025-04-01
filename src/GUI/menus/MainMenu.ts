import { MenuTemplate } from "../../constants/types.js";
import { State } from "../../states/State.js";
import { LABELS } from "./MenuLabelBuilder.js";
import { VerticalMenu } from "./VerticalMenu.js";

export class MainMenu extends VerticalMenu {
  constructor(state: State, position: number) {
    super();

    const menuTemplate: Array<MenuTemplate> = [
      { state: state.setNewGameState, label: LABELS.NEWGAME },
      { state: state.setOptionsState, label: LABELS.OPTIONS },
      { state: state.setAboutState, label: LABELS.ABOUT },
    ];

    this.menuItems = this.initialiseVerticalMenu(state, menuTemplate, position);
  }
}
