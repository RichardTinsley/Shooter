import { drawShadow } from "../../../utilities/drawShapes.js";
import { IEnemyState } from "../Enemy.js";

export class Walking implements IEnemyState {
  constructor(public components: any) {}

  draw(ctx: CanvasRenderingContext2D) {
    drawShadow(ctx, this.components.position, this.components.shadowWidth);
    this.components.mouseOverEnemy.draw(ctx);
    this.components.sprite.draw(ctx);
    this.components.healthBar.draw(ctx);
  }

  update() {
    this.components.sprite.update();
    this.components.movement.update(this.components);
  }
}
