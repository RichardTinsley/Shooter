import { HUD } from "../../GUI/HUD/HUD.js";
import { checkCircleCollision } from "../../utilities/collisionDetection.js";
import { drawShadow } from "../../utilities/drawShapes.js";
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
        this.Move();
    }
    Move() {
        if (checkCircleCollision(this.enemy.position, this.enemy.destination, 5, 10)) {
            this.enemy.movement.waypointIndex++;
            if (this.enemy.movement.waypointIndex === this.enemy.movement.waypoints.length) {
                HUD.hudLives.setLives();
                this.enemy.movement.waypointIndex = 0;
                this.enemy.setPosition(this.enemy.movement.waypoints[this.enemy.movement.waypointIndex]);
                this.enemy.sprite.setPosition(this.enemy.position);
                this.enemy.hitDetection.setPosition(this.enemy.position);
                this.enemy.healthBar.setPosition(this.enemy.position);
            }
            this.enemy.setDestination(this.enemy.movement.waypoints[this.enemy.movement.waypointIndex]);
            this.enemy.movement.setAngle(this.enemy.position, this.enemy.destination);
            this.enemy.sprite.setDirection(this.enemy.movement.getDirection(this.enemy.movement.angle));
        }
        this.enemy.movement.updatePosition(this.enemy.position, this.enemy.movement.angle, this.enemy.movement.speed);
        this.enemy.movement.setPriorityDistance(this.enemy);
    }
}
//# sourceMappingURL=Moving.js.map