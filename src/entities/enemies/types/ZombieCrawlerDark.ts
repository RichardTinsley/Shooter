import { IEnemyState } from "../Enemy.js";
import { Walking } from "../states/Walking.js";
import { FILE_NAMES } from "../../../constants/assets.js";
import { ZombieCrawler } from "./ZombieCrawler.js";

export class ZombieCrawlerDark extends ZombieCrawler {
  walkingSprite = FILE_NAMES.ZOMBIE_DARK_CRAWLER_WALK;
  attackingSprite = FILE_NAMES.ZOMBIE_DARK_CRAWLER_ATTACK;
  dyingSprite = FILE_NAMES.ZOMBIE_DARK_CRAWLER_DIE;
  idlingSprite = FILE_NAMES.ZOMBIE_DARK_CRAWLER_IDLE;

  state: IEnemyState = new Walking(this);

  constructor() {
    super();
  }
}
