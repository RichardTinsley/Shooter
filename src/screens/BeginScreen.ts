import { SIZES } from "../constants/game.js";
import { deathSorceryLogoLayout } from "../GUI/layouts/deathSorceryLogoLayout.js";
import { BeginMenu } from "../GUI/menus/BeginMenu.js";
import { Menu } from "../GUI/menus/Menu.js";
import { TowerModal } from "../GUI/TowerModal.js";
import { drawCircleRadialGradient } from "../utilities/drawShapes.js";
import { Screen, IScreenState } from "./Screen.js";

export class BeginningScreen implements IScreenState {
  menu: Menu;
  private logo = new deathSorceryLogoLayout();
  private modal = new TowerModal({ x: 400, y: 400 }, 300);

  constructor(public screen: Screen) {
    this.menu = new BeginMenu(screen, SIZES.GAME_HEIGHT - 120);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.logo.draw(ctx);
    this.menu.draw(ctx);

    // drawCircleRadialGradient(ctx, { x: 350, y: 160 }, 300);
    this.modal.draw(ctx);
  }
  update(): void {
    this.menu.update();
    this.modal.update();
  }

  getArray(): Array<any> {
    return [];
  }
}
