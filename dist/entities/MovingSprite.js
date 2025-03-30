import { giveAngle } from "../utilities/math.js";
import { Sprite } from "./Sprite.js";
export class MovingSprite extends Sprite {
    constructor(fileName, spriteWidth, spriteHeight) {
        super(fileName, spriteWidth, spriteHeight);
        this.speed = 1;
    }
    draw(ctx) {
        super.draw(ctx);
    }
    update() {
        super.update();
        this.updateMovement();
    }
    setSpeed(speed) {
        this.speed = speed;
        return this;
    }
    setDestination(x, y) {
        this.destination = { x: x, y: y };
        return this;
    }
    updateMovement() {
        this.angle = giveAngle(this.destination, this.position);
        this.position.x += Math.cos(this.angle) * this.speed;
        this.position.y += Math.sin(this.angle) * this.speed;
    }
}
//# sourceMappingURL=MovingSprite.js.map