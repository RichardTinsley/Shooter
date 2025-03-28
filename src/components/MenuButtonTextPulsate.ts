import { TextFactory } from "../texts/TextFactory.js";
import { MenuButtonBase } from "./MenuButtonBase.js";

export class MenuButtonTextPulsate extends MenuButtonBase {
  constructor(public text: string, x: number, y: number) {
    super(text, x, y);

    this.menuItem = TextFactory.createMenuItemPulsate()
      .setText(this.text)
      .setPosition(x, y);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.menuItem.draw(ctx);
  }

  update(): void {
    this.menuItem.update();
  }
}
