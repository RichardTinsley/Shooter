import { Enemy } from "../Enemy.js";
import { FILE_NAMES } from "../../../constants/assets.js";

export class ZombieCheeks extends Enemy {
  spriteWidth: number = 32;
  spriteHeight: number = 32;
  spriteScale: number = 1.5;
  movementSpeed: number = 6;

  walkingSprite = FILE_NAMES.ZOMBIE_CHEEKS_WALK;
  screamingSprite = FILE_NAMES.ZOMBIE_CHEEKS_SCREAM;
  dyingSprite = FILE_NAMES.ZOMBIE_CHEEKS_DIE;
  idlingSprite = FILE_NAMES.ZOMBIE_CHEEKS_IDLE;

  constructor() {
    super();
    this.walkingState();
  }
}
