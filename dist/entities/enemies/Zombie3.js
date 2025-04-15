import { FILE_NAMES } from "../../constants/assets.js";
import { SpriteAnimation } from "../sprites/SpriteAnimation.js";
import { EnemyMovement } from "./EnemyMovement.js";
export class Zombie3 extends EnemyMovement {
    constructor() {
        super();
        this.width = 32;
        this.height = 32;
        this.sprite = new SpriteAnimation(FILE_NAMES.ENEMY_ZOMBIE_3_WALK, this.width, this.height).setScale(1.5);
        this.initialiseEnemy();
    }
}
//# sourceMappingURL=Zombie3.js.map