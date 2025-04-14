import { EnemyMovement } from "./EnemyMovement.js";
import { HealthBar } from "../../GUI/components/HealthBar.js";
import { drawEntityShadow, drawMouseOverEnemy, } from "../../utilities/drawShapes.js";
import { ANIMATION } from "../../constants/animation.js";
import { HitDetectionCircle } from "../../handlers/HitDetectionCircle.js";
export class Enemy extends EnemyMovement {
    constructor() {
        super();
        this.enemyState = ANIMATION.NORMAL;
        this.setComponentPositions = () => {
            this.sprite.setPosition(this.position);
            this.hitDetection.setPosition(this.position);
            this.healthBar.setPosition(this.position);
        };
    }
    initialiseEnemy() {
        this.sprite.setPosition(this.position);
        this.shadowWidth = this.sprite.getScaledWidth();
        this.mouseOverWidth = this.sprite.getScaledWidth();
        this.healthBar = new HealthBar()
            .setPosition(this.position)
            .setWidth(this.sprite.getScaledWidth())
            .setDrawOffsets(this.sprite.getScaledHeight() + 2);
        this.hitDetection = new HitDetectionCircle()
            .setPosition(this.position)
            .setDrawOffsets(0, this.sprite.getScaledHeight() / 2)
            .setWidth(this.sprite.getScaledWidth());
        return this;
    }
    draw(ctx) {
        switch (this.enemyState) {
            case ANIMATION.MOUSEOVER:
                drawMouseOverEnemy(ctx, this.position, this.mouseOverWidth);
            case ANIMATION.NORMAL:
                drawEntityShadow(ctx, this.position, this.shadowWidth);
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
        this.checkWaypointArrival(this.setComponentPositions);
        this.sprite.animate();
    }
    mouseOver(state) {
        this.enemyState = state;
        return;
    }
}
//# sourceMappingURL=Enemy.js.map