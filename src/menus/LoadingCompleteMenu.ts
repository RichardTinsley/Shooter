import { MenuButtonTextPulsate } from "../components/MenuButtonTextPulsate.js";
import { Menu } from "./Menu.js";

export class LoadingCompleteMenu extends Menu {
  private beginButton = new MenuButtonTextPulsate("Begin!", 100, 100);

  constructor() {
    super();
    this.menuItems.push(this.beginButton);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);
  }

  update(): void {
    super.update();
  }
}
