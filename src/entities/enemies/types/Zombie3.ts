import { Enemy, IEnemyState } from "../Enemy.js";
import { Walking } from "../states/Walking.js";
import { FILE_NAMES } from "../../../constants/assets.js";

export class Zombie3 extends Enemy {
  public spriteWidth: number = 32;
  public spriteHeight: number = 32;
  public spriteScale: number = 1.5;
  public movementSpeed: number = 8;

  public walkingSprite = FILE_NAMES.ENEMY_ZOMBIE_3_WALK;

  public state: IEnemyState = new Walking(this);

  constructor() {
    super();
    this.initialiseEnemy();
  }
}
