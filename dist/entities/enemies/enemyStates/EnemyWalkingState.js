import { drawShadow } from "../../../utilities/drawShapes.js";
import { SpriteAnimation } from "../../sprites/SpriteAnimation.js";
export class EnemyWalkingState {
    constructor(enemy) {
        this.enemy = enemy;
        enemy.sprite = new SpriteAnimation(enemy.walkingSprite, enemy.width, enemy.height)
            .setPosition(enemy.position)
            .setScale(1.5);
        enemy.movement.setSpeed(enemy.speed);
    }
    draw(ctx) {
        drawShadow(ctx, this.enemy.position, this.enemy.shadowWidth);
        this.enemy.sprite.draw(ctx);
        this.enemy.healthBar.draw(ctx);
    }
    update() {
        this.enemy.sprite.animate();
        this.enemy.movement.update(this.enemy);
    }
}
//# sourceMappingURL=EnemyWalkingState.js.map