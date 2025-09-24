import { SIZES } from "../constants/sizes.js";
import { deathSorceryLogoLayout } from "../GUI/layouts/deathSorceryLogoLayout.js";
import { BeginMenu } from "../GUI/menus/BeginMenu.js";
import { Menu } from "../GUI/menus/Menu.js";

export class BeginScreen {
  menu: Menu;
  private logo = new deathSorceryLogoLayout();

  constructor(screen: any) {
    this.menu = new BeginMenu(screen, SIZES.GAME_HEIGHT - 110);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.logo.draw(ctx);
    this.menu.draw(ctx);
  }
  update(): void {
    this.menu.update();
  }
}
