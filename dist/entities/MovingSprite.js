import { giveAngle, giveDirection, DIRECTION, randomFloat, } from "../utilities/math.js";
import { AnimatedSprite } from "./AnimatedSprite.js";
export class MovingSprite extends AnimatedSprite {
    constructor(fileName, spriteWidth, spriteHeight) {
        super(fileName, spriteWidth, spriteHeight);
        this.speed = 1;
    }
    draw(ctx) {
        this.updateSpriteDrawPosition();
        super.draw(ctx);
    }
    update(event) {
        super.update(event);
        this.updateMovement(event);
    }
    setSpeed(speed) {
        this.speed = randomFloat(speed - speed * 0.1, speed + speed * 0.1);
        return this;
    }
    setDestination(position) {
        this.destination = Object.assign({}, position);
        return this;
    }
    updateMovement(event) {
        this.angle = giveAngle(this.destination, this.position);
        this.direction = giveDirection(this.angle);
        this.position.x += Math.cos(this.angle) * (this.speed * event.delta);
        this.position.y += Math.sin(this.angle) * (this.speed * event.delta);
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