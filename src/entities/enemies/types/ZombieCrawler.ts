import { Enemy } from "../Enemy.js";
import { FILE_NAMES } from "../../../constants/assets.js";

export class ZombieCrawler extends Enemy {
  spriteWidth: number = 64;
  spriteHeight: number = 32;
  spriteScale: number = 1.5;
  movementSpeed: number = 1;

  walkSprite = FILE_NAMES.ZOMBIE_CRAWLER_WALK;
  attackSprite = FILE_NAMES.ZOMBIE_CRAWLER_ATTACK;
  deathSprite = FILE_NAMES.ZOMBIE_CRAWLER_DIE;
  idleSprite = FILE_NAMES.ZOMBIE_CRAWLER_IDLE;

  constructor() {
    super();
    this.initialiseSprite(
        this.walkSprite,
        this.spriteWidth,
        this.spriteHeight,
        this.spriteScale
      )
      .initialiseMovement(this.movementSpeed)
      .initialiseComponents(
        this.sprite.getWidth() / 2,
        this.sprite.getHeight()
      );

    this.sprite.setDrawOffsets(0.25, 0.1);
    this.hitDetection.setDrawOffsets(0);

    this.walkingState();
  }
}
