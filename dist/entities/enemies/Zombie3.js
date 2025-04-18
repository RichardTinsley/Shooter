import { SpriteAnimation } from "../sprites/SpriteAnimation.js";
import { Enemy } from "./Enemy.js";
export class Zombie3 extends Enemy {
    constructor(fileName) {
        super();
        this.width = 32;
        this.height = 32;
        this.sprite = new SpriteAnimation(fileName, this.width, this.height)
            .setPosition(this.position)
            .setScale(1.5);
        this.initialiseEnemy();
    }
}
//# sourceMappingURL=Zombie3.js.map