import { EnemyMovement } from "./EnemyMovement.js";
import { HealthBar } from "../../GUI/components/HealthBar.js";
import { CircleHitDetection } from "../CircleHitDetection.js";
import { drawEntityShadow, drawMouseOverEnemy, } from "../../utilities/drawShapes.js";
import { ANIMATION } from "../../constants/animation.js";
import { SpriteAnimation } from "../SpriteAnimation.js";
import { FILE_NAMES } from "../../constants/assets.js";
export class EnemyDraw extends EnemyMovement {
    constructor() {
        super();
        this.width = 64;
        this.height = 32;
        this.halfWidth = this.width / 2;
        this.spriteOffsetX = this.width / 4;
        this.spriteOffsetY = this.height / 5;
        this.shadowWidth = this.halfWidth;
        this.mouseOverWidth = this.halfWidth;
        this.enemyState = ANIMATION.NORMAL;
        this.setDimension(1);
    }
    setDimension(scale) {
        this.sprite = new SpriteAnimation(FILE_NAMES.ENEMY_ZOMBIE_1_WALK, this.width, this.height)
            .setPosition(this.position)
            .setSpriteDrawOffsets(this.spriteOffsetX, this.spriteOffsetY);
        this.healthBar = new HealthBar()
            .setPosition(this.position)
            .setWidth(this.halfWidth);
        this.hitDetection = new CircleHitDetection()
            .setPosition(this.position)
            .setWidth(this.halfWidth);
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
        super.update();
        this.sprite.update();
        this.hitDetection.setPosition(this.position);
        this.healthBar.setPosition(this.position);
    }
    mouseOver(state) {
        this.enemyState = state;
        return;
    }
}
//# sourceMappingURL=EnemyDraw.js.map