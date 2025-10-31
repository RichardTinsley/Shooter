import { Entity } from "../classes/Entity.js";
import { SCREEN } from "../constants/screenSizes.js";
import { IRender } from "../interfaces/interfaces.js";

export class Screen implements IRender {
  protected entities: Entity[] = [];

  draw(ctx: CanvasRenderingContext2D): void {
    this.entities.forEach((entity) => entity.draw(ctx));
  }
  update(): void {
    this.entities.forEach((entity) => entity.update());
  }

  clearScreen(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);
  }
}
