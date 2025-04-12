import { HealthBar } from "../../GUI/components/HealthBar.js";
import { checkCircleCollision } from "../../utilities/collisionDetection.js";
import { drawEntityShadow, drawMouseOverEnemy, } from "../../utilities/drawShapes.js";
import { MovingSprite } from "../MovingSprite.js";
import { HUD } from "../../handlers/HUD.js";
import { CircleHitDetection } from "../CircleHitDetection.js";
import { ANIMATION } from "../../constants/animation.js";
export class Enemy extends MovingSprite {
    constructor(position, fileName, spriteWidth, spriteHeight, scale, waypoints) {
        super(position, fileName, spriteWidth, spriteHeight, scale);
        this.waypoints = waypoints;
        this.waypointIndex = 0;
        this.priorityDistance = 0;
        this.enemyState = ANIMATION.ANIMATING;
        this.shadowWidth = this.width;
        this.mouseOverWidth = this.width;
        this.healthBar = new HealthBar().setPosition(this.position);
        this.hitDetection = new CircleHitDetection().setPosition(this.position);
        this.destination = Object.assign({}, position);
    }
    draw(ctx) {
        switch (this.enemyState) {
            case ANIMATION.MOUSEOVER:
                drawMouseOverEnemy(ctx, this.position, this.mouseOverWidth);
            case ANIMATION.NORMAL:
                drawEntityShadow(ctx, this.position, this.shadowWidth);
                super.draw(ctx);
                this.healthBar.draw(ctx);
                break;
            case ANIMATION.FINISHED:
                break;
        }
    }
    update() {
        super.update();
        this.checkWaypointArrival();
        this.healthBar.setPosition({
            x: this.position.x,
            y: this.position.y - this.height - this.drawOffsetY,
        });
        this.hitDetection.setPosition({
            x: this.position.x,
            y: this.position.y - this.height / 2 - this.drawOffsetY,
        });
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
    checkEnemyHealth() {
    }
    updatePriorityDistance() {
        const yDistance = this.destination.y - this.position.y;
        const xDistance = this.destination.x - this.position.x;
        this.priorityDistance = Math.round(Math.abs(xDistance) + Math.abs(yDistance));
    }
    mouseOver(state) {
        this.enemyState = state;
        return;
    }
}
//# sourceMappingURL=Enemy.js.map