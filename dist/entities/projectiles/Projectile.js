import { MovingSprite } from "../MovingSprite.js";
export class Projectile extends MovingSprite {
    constructor(position, fileName, spriteWidth, spriteHeight, scale) {
        super(position, fileName, spriteWidth, spriteHeight, scale);
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
//# sourceMappingURL=Projectile.js.map