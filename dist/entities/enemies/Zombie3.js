import { FILE_NAMES } from "../../constants/assets.js";
import { SpriteAnimation } from "../sprites/SpriteAnimation.js";
import { Enemy } from "./Enemy.js";
export class Zombie3 extends Enemy {
    constructor() {
        super();
        this.width = 32;
        this.height = 32;
        this.sprite = new SpriteAnimation(FILE_NAMES.ENEMY_ZOMBIE_3_WALK, this.width, this.height).setScale(1);
        this.initialiseEnemy();
    }
}
//# sourceMappingURL=Zombie3.js.map