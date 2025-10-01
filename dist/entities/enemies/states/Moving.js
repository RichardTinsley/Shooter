import { drawShadow } from "../../../utilities/drawShapes.js";
export class Moving {
    constructor(enemy) {
        this.enemy = enemy;
    }
    draw(ctx) {
        drawShadow(ctx, this.enemy.position, this.enemy.shadowWidth);
        this.enemy.mouseOverEnemy.draw(ctx);
        this.enemy.sprite.draw(ctx);
        this.enemy.healthBar.draw(ctx);
    }
    update() {
        this.enemy.sprite.update();
        this.enemy.movement.update(this.enemy);
    }
}
//# sourceMappingURL=Moving.js.map