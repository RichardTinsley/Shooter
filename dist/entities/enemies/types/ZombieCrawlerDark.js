import { Walking } from "../states/Walking.js";
import { FILE_NAMES } from "../../../constants/assets.js";
import { ZombieCrawler } from "./ZombieCrawler.js";
export class ZombieCrawlerDark extends ZombieCrawler {
    constructor() {
        super();
        this.walkingSprite = FILE_NAMES.ZOMBIE_DARK_CRAWLER_WALK;
        this.attackingSprite = FILE_NAMES.ZOMBIE_DARK_CRAWLER_ATTACK;
        this.dyingSprite = FILE_NAMES.ZOMBIE_DARK_CRAWLER_DIE;
        this.idlingSprite = FILE_NAMES.ZOMBIE_DARK_CRAWLER_IDLE;
        this.state = new Walking(this);
    }
}
//# sourceMappingURL=ZombieCrawlerDark.js.map