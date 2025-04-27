import { MenuButton } from "../MenuButton.js";

export class MenuButtonImage extends MenuButton {
  constructor(public setScreen: Function, public label: any) {
    super(setScreen, label);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);
    //DRAW GLOWLING SQUARE
    // this.label.getWidth()
    // this.label.getHeight()
  }
}
