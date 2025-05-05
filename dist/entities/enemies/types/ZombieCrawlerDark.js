import { FILE_NAMES } from "../../../constants/assets.js";
import { ZombieCrawler } from "./ZombieCrawler.js";
export class ZombieCrawlerDark extends ZombieCrawler {
    constructor() {
        super();
        this.walkSprite = FILE_NAMES.ZOMBIE_DARK_CRAWLER_WALK;
        this.attackSprite = FILE_NAMES.ZOMBIE_DARK_CRAWLER_ATTACK;
        this.deathSprite = FILE_NAMES.ZOMBIE_DARK_CRAWLER_DIE;
        this.idleSprite = FILE_NAMES.ZOMBIE_DARK_CRAWLER_IDLE;
    }
}
//# sourceMappingURL=ZombieCrawlerDark.js.map