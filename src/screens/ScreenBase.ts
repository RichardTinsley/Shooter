import { Menu } from "../menus/Menu";

export class ScreenBase {
  protected menu!: Menu;
  constructor() {}
  draw(ctx: CanvasRenderingContext2D): void {
    this.menu.draw(ctx);
  }
  update(): void {
    this.menu.update();
  }
}
