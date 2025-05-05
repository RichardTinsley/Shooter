import { Enemy } from "../Enemy.js";
import { FILE_NAMES } from "../../../constants/assets.js";
export class ZombieCrawler extends Enemy {
    constructor() {
        super();
        this.spriteWidth = 64;
        this.spriteHeight = 32;
        this.spriteScale = 1.5;
        this.movementSpeed = 1;
        this.walkSprite = FILE_NAMES.ZOMBIE_CRAWLER_WALK;
        this.attackSprite = FILE_NAMES.ZOMBIE_CRAWLER_ATTACK;
        this.deathSprite = FILE_NAMES.ZOMBIE_CRAWLER_DIE;
        this.idleSprite = FILE_NAMES.ZOMBIE_CRAWLER_IDLE;
        this.components
            .initialiseSprite(this.walkSprite, this.spriteWidth, this.spriteHeight, this.spriteScale)
            .initialiseMovement(this.movementSpeed)
            .initialiseComponents(this.components.sprite.getWidth() / 2, this.components.sprite.getHeight());
        this.components.sprite.setDrawOffsets(0.25, 0.1);
        this.components.hitDetection.setDrawOffsets(0);
        this.walkingState();
    }
}
//# sourceMappingURL=ZombieCrawler.js.map