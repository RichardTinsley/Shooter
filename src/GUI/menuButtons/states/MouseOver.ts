import { STATE } from "../../../constants/states.js";
import { IMenuButtonState, MenuButton } from "../MenuButton.js";

export class MouseOver implements IMenuButtonState {
  constructor(public menuButton: MenuButton) {
    this.menuButton.label.setState(STATE.MOUSEOVER);
  }
}
