import { MenuButton } from "../MenuButton.js";

export class MenuButtonText extends MenuButton {
  constructor(public setScreen: Function, public label: any) {
    super(setScreen, label);
  }
}
