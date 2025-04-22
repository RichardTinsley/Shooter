import { Enemy } from "../Enemy.js";
export class Zombie3 extends Enemy {
    constructor(fileName) {
        super();
        this.width = 32;
        this.height = 32;
        this.initialiseEnemy(fileName, this.width, this.height);
        this.switchToWalkingState();
    }
}
//# sourceMappingURL=Zombie3.js.map