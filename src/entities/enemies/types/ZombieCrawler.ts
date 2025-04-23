import { Enemy, IEnemyState } from "../Enemy.js";
import { Walking } from "../states/Walking.js";
import { FILE_NAMES } from "../../../constants/assets.js";

export class ZombieCrawler extends Enemy {
  spriteWidth: number = 64;
  spriteHeight: number = 32;
  spriteScale: number = 1.5;
  movementSpeed: number = 1;

  walkingSprite = FILE_NAMES.ZOMBIE_CRAWLER_WALK;
  atttackingSprite = FILE_NAMES.ZOMBIE_CRAWLER_ATTACK;
  dyingSprite = FILE_NAMES.ZOMBIE_CRAWLER_DIE;
  idlingSprite = FILE_NAMES.ZOMBIE_CRAWLER_IDLE;

  state: IEnemyState = new Walking(this);

  constructor() {
    super();
    this.initialiseEnemyComponents(this.sprite.getScaledWidth() / 2);
    this.sprite.setDrawOffsets(0.25, 0.1);
    this.healthBar.setDrawOffsets(this.sprite.getScaledHeight() - 5);
    this.hitDetection.setDrawOffsets(0, 0);
  }
}
