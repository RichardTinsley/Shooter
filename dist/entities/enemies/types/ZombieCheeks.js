import { Enemy } from "../Enemy.js";
import { Walking } from "../states/Walking.js";
import { FILE_NAMES } from "../../../constants/assets.js";
export class ZombieCheeks extends Enemy {
    constructor() {
        super();
        this.spriteWidth = 32;
        this.spriteHeight = 32;
        this.spriteScale = 1.5;
        this.movementSpeed = 6;
        this.walkingSprite = FILE_NAMES.ZOMBIE_CHEEKS_WALK;
        this.screamingSprite = FILE_NAMES.ZOMBIE_CHEEKS_SCREAM;
        this.dyingSprite = FILE_NAMES.ZOMBIE_CHEEKS_DIE;
        this.idlingSprite = FILE_NAMES.ZOMBIE_CHEEKS_IDLE;
        this.state = new Walking(this);
        this.initialiseEnemyComponents(this.sprite.getScaledWidth(), this.sprite.getScaledHeight());
    }
}
//# sourceMappingURL=ZombieCheeks.js.map