import { Enemy } from "../Enemy.js";
import { EnemyWalkingState } from "../enemyStates/EnemyWalkingState.js";
import { FILE_NAMES } from "../../../constants/assets.js";
export class Zombie3 extends Enemy {
    constructor() {
        super();
        this.width = 32;
        this.height = 32;
        this.scale = 1.5;
        this.speed = 8;
        this.walkingSprite = FILE_NAMES.ENEMY_ZOMBIE_3_WALK;
        this.state = new EnemyWalkingState(this);
        this.initialiseEnemy();
    }
}
//# sourceMappingURL=Zombie3.js.map