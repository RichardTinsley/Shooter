import { drawShadow, drawMouseOverEnemy } from "../../utilities/drawShapes.js";
import { EntityMovement, DIRECTION } from "../../handlers/EntityMovement.js";
import { HUD } from "../../GUI/HUD/HUD.js";
import { Level } from "../../handlers/Level.js";
import { checkCircleCollision } from "../../utilities/collisionDetection.js";
import { Enemy } from "./Enemy.js";
import { ANIMATION } from "../../constants/animation.js";
export class EnemyMovement extends Enemy {
    constructor() {
        super();
        this.waypointIndex = 1;
        this.priorityDistance = 0;
        this.movement = new EntityMovement();
        this.enemyState = ANIMATION.NORMAL;
        this.waypoints = Level.getEnemyGeneratedWaypoints();
        this.setPosition(this.waypoints[this.waypointIndex]);
        this.setDestination(this.waypoints[this.waypointIndex]);
    }
    draw(ctx) {
        switch (this.enemyState) {
            case ANIMATION.MOUSEOVER:
                drawMouseOverEnemy(ctx, this.position, this.mouseOverWidth);
            case ANIMATION.NORMAL:
                drawShadow(ctx, this.position, this.shadowWidth);
                this.contextSave(ctx);
                this.sprite.draw(ctx);
                this.contextRestore(ctx);
                this.healthBar.draw(ctx);
                break;
            case ANIMATION.FINISHED:
                break;
        }
    }
    update() {
        this.movement.move(this.position, this.destination);
        this.checkWaypointArrival();
        this.sprite.animate();
    }
    checkWaypointArrival() {
        if (checkCircleCollision(this.position, this.destination, 5, 10)) {
            this.waypointIndex++;
            if (this.waypointIndex === this.waypoints.length) {
                HUD.hudLives.setLives();
                this.waypointIndex = 0;
                this.setPosition(this.waypoints[this.waypointIndex]);
                this.sprite.setPosition(this.position);
                this.hitDetection.setPosition(this.position);
                this.healthBar.setPosition(this.position);
            }
            this.setDestination(this.waypoints[this.waypointIndex]);
        }
    }
    updatePriorityDistance() {
        const yDistance = this.destination.y - this.position.y;
        const xDistance = this.destination.x - this.position.x;
        this.priorityDistance = Math.round(Math.abs(xDistance) + Math.abs(yDistance));
    }
    setPosition(position) {
        this.position = Object.assign({}, position);
        return this;
    }
    setDestination(destination) {
        this.destination = Object.assign({}, destination);
        return this;
    }
    setSpeed(speed) {
        this.movement.setSpeed(speed);
        return this;
    }
    getPriorityDistance() {
        return this.priorityDistance;
    }
    contextSave(ctx) {
        if (this.movement.getDirection() === DIRECTION.LEFT) {
            ctx.save();
            ctx.scale(DIRECTION.LEFT, 1);
            this.position.x *= -1;
        }
    }
    contextRestore(ctx) {
        if (this.movement.getDirection() === DIRECTION.LEFT) {
            this.position.x *= -1;
            ctx.restore();
        }
    }
    mouseOver(state) {
        this.enemyState = state;
        return;
    }
}
//# sourceMappingURL=EnemyMovement.js.map