import { HealthBar } from "../../GUI/components/HealthBar.js";
import { HitDetectionCircle } from "../../handlers/HitDetectionCircle.js";
import { drawShadow, drawMouseOverEnemy } from "../../utilities/drawShapes.js";
import { EnemyWaves } from "../../handlers/EnemyWaves.js";
import { ANIMATION } from "../../constants/animation.js";
import { EnemyMovement } from "./EnemyMovement.js";
export class Enemy {
    constructor() {
        this.movement = new EnemyMovement();
        this.position = this.movement.getPosition();
        this.enemyState = ANIMATION.NORMAL;
        this.updateComponents = (position) => {
            this.sprite.setPosition(position);
            this.hitDetection.setPosition(position);
            this.healthBar.setPosition(position);
            this.position = position;
        };
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
        this.movement.update();
        this.movement.checkWaypointArrival(this.updateComponents);
        this.sprite.animate();
    }
    initialiseEnemy() {
        this.shadowWidth = this.sprite.getScaledWidth();
        this.mouseOverWidth = this.sprite.getScaledWidth() * 1.25;
        this.healthBar = new HealthBar()
            .setPosition(this.position)
            .setWidth(this.sprite.getScaledWidth())
            .setDrawOffsets(this.sprite.getScaledHeight());
        this.hitDetection = new HitDetectionCircle()
            .setPosition(this.position)
            .setWidth(this.sprite.getScaledWidth())
            .setDrawOffsets(0, this.sprite.getScaledHeight() / 2);
        return this;
    }
    contextSave(ctx) {
        if (this.movement.getDirection() === -1) {
            ctx.save();
            ctx.scale(-1, 1);
            this.position.x *= -1;
        }
    }
    contextRestore(ctx) {
        if (this.movement.getDirection() === -1) {
            this.position.x *= -1;
            ctx.restore();
        }
    }
    mouseOver(state) {
        this.enemyState = state;
        return;
    }
    setDamage(damage) {
        this.healthBar.setDamage(damage);
        if (this.healthBar.getCurrentStatus() === 0) {
            EnemyWaves.enemyKilled();
        }
    }
    setSpeed(speed) {
        this.movement.setSpeed(speed);
        return this;
    }
    getType() {
        return "Enemy";
    }
    mouseClick() {
        return;
    }
}
//# sourceMappingURL=Enemy.js.map