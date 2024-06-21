import Projectile from "./Projectile.js";
import Sprite from "./Sprite.js";

export default class Building extends Sprite {
    constructor({ position = { x: 0, y: 0 } }) {
        super({
            position,
            imageSrc: './img/tower.png',
            frames: {
                max: 21
            },
            offset: { 
                x: -32, 
                y: -40 
            } 
        })
        this.width = 32;
        this.height = 32;
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

        // ctx.beginPath();
        // ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        // ctx.fillStyle = 'rgba(0, 0, 255, 0.2)';
        // ctx.fill();
    }
    update(ctx) {
        this.draw(ctx);
        if (this.target || (!this.target && this.frames.current !== 0))
            super.update(ctx);

        if (
            this.target &&
            this.frames.current === 13 &&
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