import { MovingSprite } from "../MovingSprite.js";
export class Projectile extends MovingSprite {
    constructor(fileName, spriteWidth, spriteHeight) {
        super(fileName, spriteWidth, spriteHeight);
        this.origin = Object.assign({}, this.position);
    }
    draw(ctx) {
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(this.angle);
        super.draw(ctx);
        ctx.restore();
    }
    update() {
        super.update();
    }
}
//# sourceMappingURL=projectiles.js.map