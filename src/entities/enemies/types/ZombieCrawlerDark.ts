import { FILE_NAMES } from "../../../constants/assets.js";
import { ZombieCrawler } from "./ZombieCrawler.js";

export class ZombieCrawlerDark extends ZombieCrawler {
  walkSprite = FILE_NAMES.ZOMBIE_DARK_CRAWLER_WALK;
  attackSprite = FILE_NAMES.ZOMBIE_DARK_CRAWLER_ATTACK;
  deathSprite = FILE_NAMES.ZOMBIE_DARK_CRAWLER_DIE;
  idleSprite = FILE_NAMES.ZOMBIE_DARK_CRAWLER_IDLE;

  constructor() {
    super();
  }
}
