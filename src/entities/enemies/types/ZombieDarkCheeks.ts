import { Enemy, IEnemyState } from "../Enemy.js";
import { Walking } from "../states/Walking.js";
import { FILE_NAMES } from "../../../constants/assets.js";
import { randomNumber } from "../../../utilities/math.js";

export class ZombieCheeks extends Enemy {
  spriteWidth: number = 32;
  spriteHeight: number = 32;
  spriteScale: number = 1.5;
  movementSpeed: number = 6;

  skinChooser = randomNumber(0, 1);

  walkingSprite =
    this.skinChooser === 0
      ? FILE_NAMES.ZOMBIE_CHEEKS_WALK
      : FILE_NAMES.ZOMBIE_DARKCHEEKS_WALK;

  screamingSprite =
    this.skinChooser === 0
      ? FILE_NAMES.ZOMBIE_CHEEKS_SCREAM
      : FILE_NAMES.ZOMBIE_DARKCHEEKS_SCREAM;

  dyingSprite =
    this.skinChooser === 0
      ? FILE_NAMES.ZOMBIE_CHEEKS_DIE
      : FILE_NAMES.ZOMBIE_DARKCHEEKS_DIE;

  idlingSprite =
    this.skinChooser === 0
      ? FILE_NAMES.ZOMBIE_CHEEKS_IDLE
      : FILE_NAMES.ZOMBIE_DARKCHEEKS_IDLE;

  state: IEnemyState = new Walking(this);

  constructor() {
    super();

    this.initialiseEnemy();
  }
}
