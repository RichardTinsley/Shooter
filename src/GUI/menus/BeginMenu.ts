import { MenuTemplate } from "../../constants/types.js";
import { State } from "../../states/State.js";
import { LABELS } from "./MenuLabelBuilder.js";
import { VerticalMenu } from "./VerticalMenu.js";

export class BeginMenu extends VerticalMenu {
  constructor(state: State, position: number) {
    super();

    const menuTemplate: Array<MenuTemplate> = [
      { state: state.setMainMenuState, label: LABELS.BEGIN },
    ];

    this.menuItems = this.initialiseVerticalMenu(state, menuTemplate, position);
  }
}
