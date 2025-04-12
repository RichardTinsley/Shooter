import { Enemy } from "./Enemy.js";
export class ZombieEnemy extends Enemy {
    constructor(position, fileName, spriteWidth, spriteHeight, scale, waypoints) {
        super(position, fileName, spriteWidth, spriteHeight, scale, waypoints);
        this.waypoints = waypoints;
        this.drawOffsetY = 5;
        this.drawOffsetX = this.width / 4;
        this.shadowWidth = this.width / 2;
        this.mouseOverWidth = this.width / 2;
        this.healthBar.setWidth(this.width * 0.5);
        this.hitDetection.setWidth(this.width * 0.5);
    }
}
//# sourceMappingURL=ZombieEnemy.js.map