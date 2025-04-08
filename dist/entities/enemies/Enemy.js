import { HealthBar } from "../../GUI/components/HealthBar.js";
import { checkCircleCollision } from "../../utilities/collisionDetection.js";
import { drawEntityShadow, drawMouseOverEnemy, } from "../../utilities/drawShapes.js";
import { DIRECTION } from "../../utilities/math.js";
import { MovingSprite } from "../MovingSprite.js";
import { HUD } from "../../handlers/HUD.js";
import { CircleHitDetection } from "../CircleHitDetection.js";
import { ANIMATION } from "../../constants/animation.js";
export class Enemy extends MovingSprite {
    constructor(position, fileName, spriteWidth, spriteHeight, waypoints) {
        super(position, fileName, spriteWidth, spriteHeight);
        this.waypoints = waypoints;
        this.healthBar = new HealthBar(this.width);
        this.waypointIndex = 0;
        this.enemyState = ANIMATION.ANIMATING;
        this.destination = Object.assign({}, position);
        this.updateHealthBarPosition();
        this.hitDetection = new CircleHitDetection(spriteWidth, spriteHeight).setHitCircle(position);
    }
    draw(ctx) {
        switch (this.enemyState) {
            case ANIMATION.MOUSEOVER:
                drawMouseOverEnemy(ctx, this.position, this.width);
            case ANIMATION.NORMAL:
                drawEntityShadow(ctx, this.position, this.width);
                this.contextSave(ctx);
                super.draw(ctx);
                this.contextRestore(ctx);
                this.healthBar.draw(ctx);
                break;
            case ANIMATION.FINISHED:
                break;
        }
    }
    update() {
        super.update();
        this.updateSpriteDrawPosition();
        this.updateHealthBarPosition();
        this.checkWaypointArrival();
        this.hitDetection.setHitCircle({
            x: this.position.x,
            y: this.position.y - this.height / 2 - this.hitCircleOffsetX,
        });
    }
    contextSave(ctx) {
        if (this.direction === DIRECTION.LEFT) {
            ctx.save();
            ctx.scale(this.direction, 1);
            this.position.x *= -1;
        }
    }
    contextRestore(ctx) {
        if (this.direction === DIRECTION.LEFT) {
            this.position.x *= -1;
            ctx.restore();
        }
    }
    checkWaypointArrival() {
        if (checkCircleCollision(this.position, this.destination, 5, 10)) {
            this.setDestination(this.waypoints[(this.waypointIndex += 1)]);
            if (this.waypointIndex === this.waypoints.length) {
                HUD.hudLives.setLives();
                this.waypointIndex = 0;
                this.setDestination(this.waypoints[this.waypointIndex]);
                this.setPosition(this.waypoints[this.waypointIndex]);
            }
        }
    }
    updateHealthBarPosition() {
        this.healthBar.setPosition({
            x: this.position.x,
            y: this.position.y - this.height,
        });
    }
    checkEnemyHealth() {
    }
    updatePriorityDistance() {
    }
    mouseOver(state) {
        this.enemyState = state;
        return;
    }
}
//# sourceMappingURL=Enemy.js.map