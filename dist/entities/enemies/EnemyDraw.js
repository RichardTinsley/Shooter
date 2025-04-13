import { EnemyMovement } from "./EnemyMovement.js";
import { HealthBar } from "../../GUI/components/HealthBar.js";
import { CircleHitDetection } from "../../handlers/CircleHitDetection.js";
import { drawEntityShadow, drawMouseOverEnemy, } from "../../utilities/drawShapes.js";
import { ANIMATION } from "../../constants/animation.js";
import { SpriteFactory } from "../SpriteFactory.js";
export class EnemyDraw extends EnemyMovement {
    constructor() {
        super();
        this.sprite = SpriteFactory.createZombieSprite1();
        this.healthbarOffsetY = this.sprite.getScaledHeight();
        this.halfWidth = this.sprite.getScaledWidth() / 2;
        this.enemyState = ANIMATION.NORMAL;
        this.setDimension();
    }
    setDimension() {
        this.sprite.setPosition(this.position);
        this.healthBar = new HealthBar()
            .setPosition(this.position)
            .setWidth(this.halfWidth)
            .setDrawOffsets(this.healthbarOffsetY);
        this.hitDetection = new CircleHitDetection()
            .setPosition(this.position)
            .setWidth(this.halfWidth);
        return this;
    }
    draw(ctx) {
        switch (this.enemyState) {
            case ANIMATION.MOUSEOVER:
                drawMouseOverEnemy(ctx, this.position, this.halfWidth);
            case ANIMATION.NORMAL:
                drawEntityShadow(ctx, this.position, this.halfWidth);
                this.contextSave(ctx);
                this.sprite.setPosition(this.position);
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
        this.hitDetection.setPosition(this.position);
        this.healthBar.setPosition(this.position);
        this.sprite.update();
    }
    mouseOver(state) {
        this.enemyState = state;
        return;
    }
}
//# sourceMappingURL=EnemyDraw.js.map