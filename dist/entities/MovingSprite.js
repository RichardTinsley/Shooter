import { giveAngle, giveDirection } from "../utilities/math.js";
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
        this.updateSpriteDrawPosition();
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
        this.direction = giveDirection(this.angle);
        this.position.x += Math.cos(this.angle) * this.speed;
        this.position.y += Math.sin(this.angle) * this.speed;
    }
    updateSpriteDrawPosition() {
        this.drawPositionX = this.position.x - this.halfWidth;
        this.drawPositionY = this.position.y - this.height;
    }
    contextSave(ctx) {
        if (this.direction === -1) {
            ctx.save();
            ctx.scale(this.direction, 1);
            this.position.x *= -1;
        }
    }
    contextRestore(ctx) {
        if (this.direction === -1) {
            this.position.x *= -1;
            ctx.restore();
        }
    }
}
//# sourceMappingURL=MovingSprite.js.map