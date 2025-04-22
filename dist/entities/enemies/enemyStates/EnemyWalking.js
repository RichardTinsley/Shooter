import { drawShadow } from "../../../utilities/drawShapes.js";
export class EnemyWalking {
    constructor(enemy) {
        this.enemy = enemy;
        console.log(enemy.speed);
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
//# so