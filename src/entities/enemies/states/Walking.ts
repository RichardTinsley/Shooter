import { drawShadow } from "../../../utilities/drawShapes.js";
import { IEnemyState } from "../Enemy.js";

export class Walking implements IEnemyState {
  constructor(public enemy: any) {
    enemy.sprite
      .setImage(enemy.walkingSprite, enemy.spriteWidth, enemy.spriteHeight)
      .setScale(enemy.spriteScale)
      .initialise();
    enemy.movement.setSpeed(enemy.movementSpeed);
    enemy.initialiseComponents(
      enemy.sprite.getWidth(),
      enemy.sprite.getHeight()
    );
  }

  draw(ctx: CanvasRenderingContext2D) {
    drawShadow(ctx, this.enemy.position, this.enemy.shadowWidth);
    this.enemy.sprite.draw(ctx);
    this.enemy.healthBar.draw(ctx);
  }

  update() {
    this.enemy.sprite.update();
    this.enemy.movement.update(this.enemy);
  }
}
