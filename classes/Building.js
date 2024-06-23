import Projectile from "./Projectile.js";
import Sprite from "./Sprite.js";

export default class Building extends Sprite {
    constructor({ position = { x: 0, y: 0 } }, imageSrc) {
        super({
            position,
            imageSrc,
            frames: {
                max: 15,
                hold: 0
            },
            offset: { 
                x: - 16, 
                y: - 32 
            } 
        })
        this.width = 64;
        this.height = 64;
        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2
        };
        this.projectiles = [];
        this.radius = 250;
        this.target;
        this.fireRate = 100;
    }
    draw(ctx){
        super.draw(ctx);

        ctx.beginPath();
        ctx.arc(this.center.x + this.offset.x, this.center.y + this.offset.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(200, 0, 0, 0.1)';
        ctx.fill();
    }
    update(ctx) {
        this.draw(ctx);
        // if (this.target || (!this.target && this.frames.current !== 0)) // pauses tower
        super.update(ctx);

        if (
            this.target &&
            this.frames.current === 1 &&
            this.frames.elapsed % this.frames.hold === 0
        )
        this.shoot();
    }

    shoot() {
        this.projectiles.push(
            new Projectile({
                position: {
                    x: this.center.x - 15,
                    y: this.center.y - 45
                },
                enemy: this.target
            })
        )
    }
}