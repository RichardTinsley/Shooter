import { Enemy } from "../Enemy.js";
import { FILE_NAMES } from "../../../constants/assets.js";
export class ZombieCheeks extends Enemy {
    constructor() {
        super();
        this.spriteWidth = 32;
        this.spriteHeight = 32;
        this.spriteScale = 1.5;
        this.movementSpeed = 6;
        this.walkSprite = FILE_NAMES.ZOMBIE_CHEEKS_WALK;
        this.screamSprite = FILE_NAMES.ZOMBIE_CHEEKS_SCREAM;
        this.deathSprite = FILE_NAMES.ZOMBIE_CHEEKS_DIE;
        this.idleSprite = FILE_NAMES.ZOMBIE_CHEEKS_IDLE;
        this.components
            .initialiseSprite(this.walkSprite, this.spriteWidth, this.spriteHeight, this.spriteScale)
            .initialiseMovement(this.movementSpeed)
            .initialiseComponents(this.components.sprite.getWidth(), this.components.sprite.getHeight());
        this.walkingState();
    }
}
//# sourceMappingURL=ZombieCheeks.js.map