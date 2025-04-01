import { Lavoney } from "../entities/levels/Lavoney.js";
import { Menu } from "../GUI/menus/Menu.js";
import { IScreenState, Screen } from "./Screen.js";

export class PlayScreen implements IScreenState {
  private entities: Array<any> = [];

  level = new Lavoney();
  menu!: Menu;
  constructor(public screen: Screen) {}

  draw(ctx: CanvasRenderingContext2D): void {
    this.level.draw(ctx);
    this.entities.forEach((entity) => entity.draw(ctx));
  }
  update(): void {
    this.level.update();
    this.entities.forEach((entity) => entity.update());
  }
}
