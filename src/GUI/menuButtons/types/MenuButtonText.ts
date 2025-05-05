import { MenuButton } from "../MenuButton.js";

export class MenuButtonTextPulsate extends MenuButton {
  constructor(public setScreen: Function, public label: any) {
    super(setScreen, label);
  }
}
