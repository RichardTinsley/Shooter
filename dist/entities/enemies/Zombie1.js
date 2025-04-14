import { FILE_NAMES } from "../../constants/assets.js";
import { SpriteAnimation } from "../sprites/SpriteAnimation.js";
import { Enemy } from "./Enemy.js";
export class Zombie1 extends Enemy {
    constructor() {
        super();
        this.width = 64;
        this.height = 32;
        this.sprite = new SpriteAnimation(FILE_NAMES.ENEMY_ZOMBIE_1_WALK, this.width, this.height)
            .setScale(1.5)
            .setDrawOffsets(0.25, -0.15);
        this.initialiseEnemy();
        this.hitDetection.setDrawOffsets(0, 0).setWidth(this.halfScaledWidth);
        this.shadowWidth = this.halfScaledWidth;
        this.mouseOverWidth = this.halfScaledWidth;
    }
}
//# sourceMappingURL=Zombie1.js.map