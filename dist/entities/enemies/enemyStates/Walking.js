import { drawShadow } from "../../../utilities/drawShapes.js";
export class Walking {
    constructor(enemy) {
        this.enemy = enemy;
        enemy.setSprite(enemy.walkingSprite);
        enemy.movement.setSpeed(enemy.movementSpeed);
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
//# sourceMappingURL=Walking.js.map