import { Enemy } from "../Enemy.js";
import { Walking } from "../states/Walking.js";
import { FILE_NAMES } from "../../../constants/assets.js";
import { randomNumber } from "../../../utilities/math.js";
export class ZombieCrawler extends Enemy {
    constructor() {
        super();
        this.spriteWidth = 64;
        this.spriteHeight = 32;
        this.spriteScale = 1.5;
        this.movementSpeed = 2;
        this.skinChooser = randomNumber(0, 1);
        this.walkingSprite = this.skinChooser === 0
            ? FILE_NAMES.ZOMBIE_CRAWLER_WALK
            : FILE_NAMES.ZOMBIE_DARK_CRAWLER_WALK;
        this.atttackingSprite = this.skinChooser === 0
            ? FILE_NAMES.ZOMBIE_CRAWLER_ATTACK
            : FILE_NAMES.ZOMBIE_DARK_CRAWLER_ATTACK;
        this.dyingSprite = this.skinChooser === 0
            ? FILE_NAMES.ZOMBIE_CRAWLER_DIE
            : FILE_NAMES.ZOMBIE_DARK_CRAWLER_DIE;
        this.idlingSprite = this.skinChooser === 0
            ? FILE_NAMES.ZOMBIE_CRAWLER_IDLE
            : FILE_NAMES.ZOMBIE_DARK_CRAWLER_IDLE;
        this.state = new Walking(this);
        this.sprite.setDrawOffsets(0.25, 0.1);
        this.healthBar
            .setWidth(this.sprite.getScaledWidth() / 2)
            .setDrawOffsets(this.sprite.getScaledHeight() - 5);
        this.hitDetection
            .setWidth(this.sprite.getScaledWidth() / 2)
            .setDrawOffsets(0, 0);
        this.shadowWidth = this.sprite.getScaledWidth() / 2;
        this.mouseOverWidth = this.sprite.getScaledWidth() / 2;
    }
}
//# sourceMappingURL=ZombieCrawler.js.map