import { Enemy } from "./Enemy.js";
export class ZombieCheeks extends Enemy {
    constructor(sprites) {
        super(sprites);
        this.sprites = sprites;
        this.width = 32;
        this.height = 32;
        this.scale = 1.5;
        this.speed = 6;
        this.drawOffsets = { x: 0, y: 0.05 };
        this.widthDivisor = 1;
        this.hitboxHeight = 0.5;
        this.healthBarHeight = 1;
        this.initialiseComponents();
        this.setMovingState();
    }
}
//# sourceMappingURL=ZombieCheeks.js.map