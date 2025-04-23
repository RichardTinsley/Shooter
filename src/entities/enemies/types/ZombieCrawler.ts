import { Enemy, IEnemyState } from "../Enemy.js";
import { Walking } from "../states/Walking.js";
import { FILE_NAMES } from "../../../constants/assets.js";
import { randomNumber } from "../../../utilities/math.js";

export class ZombieCrawler extends Enemy {
  spriteWidth: number = 64;
  spriteHeight: number = 32;
  spriteScale: number = 1.5;
  movementSpeed: number = 2;

  skinChooser = randomNumber(0, 1);

  walkingSprite =
    this.skinChooser === 0
      ? FILE_NAMES.ZOMBIE_CRAWLER_WALK
      : FILE_NAMES.ZOMBIE_DARK_CRAWLER_WALK;

  atttackingSprite =
    this.skinChooser === 0
      ? FILE_NAMES.ZOMBIE_CRAWLER_ATTACK
      : FILE_NAMES.ZOMBIE_DARK_CRAWLER_ATTACK;

  dyingSprite =
    this.skinChooser === 0
      ? FILE_NAMES.ZOMBIE_CRAWLER_DIE
      : FILE_NAMES.ZOMBIE_DARK_CRAWLER_DIE;

  idlingSprite =
    this.skinChooser === 0
      ? FILE_NAMES.ZOMBIE_CRAWLER_IDLE
      : FILE_NAMES.ZOMBIE_DARK_CRAWLER_IDLE;

  state: IEnemyState = new Walking(this);

  constructor() {
    super();

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
