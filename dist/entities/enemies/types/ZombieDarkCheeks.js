import { Enemy } from "../Enemy.js";
import { Walking } from "../states/Walking.js";
import { FILE_NAMES } from "../../../constants/assets.js";
import { randomNumber } from "../../../utilities/math.js";
export class ZombieCheeks extends Enemy {
    constructor() {
        super();
        this.spriteWidth = 32;
        this.spriteHeight = 32;
        this.spriteScale = 1.5;
        this.movementSpeed = 6;
        this.skinChooser = randomNumber(0, 1);
        this.walkingSprite = this.skinChooser === 0
            ? FILE_NAMES.ZOMBIE_CHEEKS_WALK
            : FILE_NAMES.ZOMBIE_DARKCHEEKS_WALK;
        this.screamingSprite = this.skinChooser === 0
            ? FILE_NAMES.ZOMBIE_CHEEKS_SCREAM
            : FILE_NAMES.ZOMBIE_DARKCHEEKS_SCREAM;
        this.dyingSprite = this.skinChooser === 0
            ? FILE_NAMES.ZOMBIE_CHEEKS_DIE
            : FILE_NAMES.ZOMBIE_DARKCHEEKS_DIE;
        this.idlingSprite = this.skinChooser === 0
            ? FILE_NAMES.ZOMBIE_CHEEKS_IDLE
            : FILE_NAMES.ZOMBIE_DARKCHEEKS_IDLE;
        this.state = new Walking(this);
        this.initialiseEnemy();
    }
}
//# sourceMappingURL=ZombieDarkCheeks.js.map