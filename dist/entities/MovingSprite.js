import { Time } from "../handlers/Time.js";
import { giveAngle, giveDirection, randomFloat } from "../utilities/math.js";
import { AnimatedSprite } from "./AnimatedSprite.js";
export class MovingSprite extends AnimatedSprite {
    constructor(position, fileName, spriteWidth, spriteHeight) {
        super(position, fileName, spriteWidth, spriteHeight);
        this.speed = 1;
        this.hitCircleOffsetX = 0;
    }
    draw(ctx) {
        this.updateSpriteDrawPosition();
        super.draw(ctx);
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
        this.drawPositionY = this.position.y - this.height;
    }
    setSpeed(speed) {
        this.speed = randomFloat(speed - speed * 0.2, speed + speed * 0.2);
        return this;
    }
    setDestination(position) {
        this.destination = Object.assign({}, position);
        return this;
    }
}
//# sourceMappingURL=MovingSprite.js.map