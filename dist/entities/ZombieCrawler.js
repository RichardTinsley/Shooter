import { Enemy } from "./Enemies/Enemy.js";
export class ZombieCrawler extends Enemy {
    constructor(sprites) {
        super(sprites);
        this.sprites = sprites;
        this.width = 64;
        this.height = 32;
        this.scale = 1.5;
        this.speed = 1;
        this.drawOffsets = { x: 0.25, y: 0.1 };
        this.widthDivisor = 2;
        this.hitboxHeight = 0.25;
        this.healthBarHeight = 0.65;
        this.initialiseComponents();
        this.setMovingState();
    }
}
//# sourceMappingURL=ZombieCrawler.js.map