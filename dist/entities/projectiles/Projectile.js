import { MovingSprite } from "../MovingSprite.js";
export class Projectile extends MovingSprite {
    constructor(fileName, spriteWidth, spriteHeight) {
        super(fileName, spriteWidth, spriteHeight);
        this.origin = Object.assign({}, this.position);
    }
    draw(ctx) {
        super.draw(ctx);
    }
    update() {
        super.update();
    }
}
//# sourceMappingURL=Projectile.js.map