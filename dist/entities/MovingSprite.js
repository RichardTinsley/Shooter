import { Time } from "../handlers/Time.js";
import { DIRECTION, giveAngle, giveDirection, randomFloat, } from "../utilities/math.js";
import { AnimatedSprite } from "./AnimatedSprite.js";
export class MovingSprite extends AnimatedSprite {
    constructor(position, fileName, spriteWidth, spriteHeight, scale) {
        super(position, fileName, spriteWidth, spriteHeight, scale);
        this.speed = 1;
        this.drawPositionOffsetY = 0;
    }
    draw(ctx) {
        this.contextSave(ctx);
        this.updateSpriteDrawPosition();
        super.draw(ctx);
        this.contextRestore(ctx);
    }
    update() {
        super.update();
        this.updateMovement();
    }
    updateMovement() {
        this.angle = giveAngle(this.destination, this.position);
        this.direction = giveDirection(this.angle);
        this.position.x +=
            Math.cos(this.angle) * this.speed * Time.deltaTimeMultiplier;
        this.position.y +=
            Math.sin(this.angle) * this.speed * Time.deltaTimeMultiplier;
    }
    updateSpriteDrawPosition() {
        this.drawPositionX = this.position.x - this.halfWidth;
        this.drawPositionY =
            this.position.y - this.height - this.drawPositionOffsetY;
    }
    setSpeed(speed) {
        this.speed = randomFloat(speed - speed * 0.2, speed + speed * 0.2);
        return this;
    }
    setDestination(position) {
        this.destination = Object.assign({}, position);
        return this;
    }
    contextSave(ctx) {
        if (this.direction === DIRECTION.LEFT) {
            ctx.save();
            ctx.scale(this.direction, 1);
            this.position.x *= -1;
        }
    }
    contextRestore(ctx) {
        if (this.direction === DIRECTION.LEFT) {
            this.position.x *= -1;
            ctx.restore();
        }
    }
}
//# sourceMappingURL=MovingSprite.js.map