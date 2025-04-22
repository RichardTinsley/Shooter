import { Enemy } from "../Enemy.js";
import { Walking } from "../states/Walking.js";
import { FILE_NAMES } from "../../../constants/assets.js";
export class Zombie3 extends Enemy {
    constructor() {
        super();
        this.spriteWidth = 32;
        this.spriteHeight = 32;
        this.spriteScale = 1.5;
        this.movementSpeed = 8;
        this.walkingSprite = FILE_NAMES.ENEMY_ZOMBIE_3_WALK;
        this.state = new Walking(this);
        this.initialiseEnemy();
    }
}
//# sourceMappingURL=Zombie3.js.map