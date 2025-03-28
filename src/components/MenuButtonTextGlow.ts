import { TextFactory } from "../texts/TextFactory.js";
import { MenuButtonBase } from "./MenuButtonBase.js";

export class MenuButtonTextGlow extends MenuButtonBase {
  constructor(public text: string, x: number, y: number) {
    super(text, x, y);

    this.menuItem = TextFactory.createMenuItemGlow()
      .setText(this.text)
      .setPosition(this.position.x, this.position.y);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.menuItem.draw(ctx);
  }

  update(): void {
    this.menuItem.update();
  }

  //   collisionDetection(mouse) {
  //     return !checkBoxCollision(mouse, this.hitBox);
  //   }
}
