import { drawShadow } from "../../../utilities/drawShapes.js";
import { Enemy, IEnemyState } from "../Enemy.js";

export class EnemyWalking implements IEnemyState {
  constructor(public enemy: Enemy) {
    // enemy.movement.setSpeed(enemy.speed);
    console.log(enemy.speed);
  }

  draw(ctx: CanvasRenderingContext2D) {
    drawShadow(ctx, this.enemy.position, this.enemy.shadowWidth);
    this.enemy.sprite.draw(ctx);
    this.enemy.healthBar.draw(ctx);
  }

  update() {
    this.enemy.sprite.animate();
    this.enemy.movement.update(this.enemy);
  }
}
