import { Enemy } from "../Enemy.js";
import { Walking } from "../states/Walking.js";
import { FILE_NAMES } from "../../../constants/assets.js";
export class ZombieCrawler extends Enemy {
    constructor() {
        super();
        this.spriteWidth = 64;
        this.spriteHeight = 32;
        this.spriteScale = 1.5;
        this.movementSpeed = 1;
        this.walkingSprite = FILE_NAMES.ZOMBIE_CRAWLER_WALK;
        this.attackingSprite = FILE_NAMES.ZOMBIE_CRAWLER_ATTACK;
        this.dyingSprite = FILE_NAMES.ZOMBIE_CRAWLER_DIE;
        this.idlingSprite = FILE_NAMES.ZOMBIE_CRAWLER_IDLE;
        this.state = new Walking(this);
        this.initialiseEnemyComponents(this.sprite.getWidth() / 2, this.sprite.getHeight());
        this.sprite.setDrawOffsets(0.25, 0.1);
        this.hitDetection.setDrawOffsets(0, 0);
    }
}
//# sourceMappingURL=ZombieCrawler.js.map