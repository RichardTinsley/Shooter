import { MovingSprite } from "../MovingSprite.js";
export class Projectile extends MovingSprite {
    constructor(position, fileName, spriteWidth, spriteHeight) {
        super(position, fileName, spriteWidth, spriteHeight);
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
        this.updateSpriteDrawPosition();
    }
}
//# sourceMappingURL=Projectile.js.map