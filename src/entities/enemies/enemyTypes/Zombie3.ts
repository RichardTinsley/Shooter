import { Enemy, IEnemyState } from "../Enemy.js";
import { EnemyWalkingState } from "../enemyStates/EnemyWalkingState.js";
import { FILE_NAMES } from "../../../constants/assets.js";

export class Zombie3 extends Enemy {
  public width: number = 32;
  public height: number = 32;
  public scale: number = 1.5;
  public speed: number = 8;

  public walkingSprite = FILE_NAMES.ENEMY_ZOMBIE_3_WALK;

  public state: IEnemyState = new EnemyWalkingState(this);

  constructor() {
    super();
    this.initialiseEnemy();
  }
}
