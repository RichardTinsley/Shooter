import { Enemy } from "../Enemy.js";
import { FILE_NAMES } from "../../../constants/assets.js";

export class ZombieCheeks extends Enemy {
  spriteWidth: number = 32;
  spriteHeight: number = 32;
  spriteScale: number = 1.5;
  movementSpeed: number = 6;

  walkSprite = FILE_NAMES.ZOMBIE_CHEEKS_WALK;
  screamSprite = FILE_NAMES.ZOMBIE_CHEEKS_SCREAM;
  deathSprite = FILE_NAMES.ZOMBIE_CHEEKS_DIE;
  idleSprite = FILE_NAMES.ZOMBIE_CHEEKS_IDLE;

  constructor() {
    super();
    this.components
      .initialiseSprite(
        this.walkSprite,
        this.spriteWidth,
        this.spriteHeight,
        this.spriteScale
      )
      .initialiseMovement(this.movementSpeed)
      .initialiseComponents(
        this.components.sprite.getWidth(),
        this.components.sprite.getHeight()
      );

    this.walkingState();
  }
}
