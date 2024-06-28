import { Projectile } from "./Projectile.js";
import { TILE_SIZE, HALF_TILE_SIZE, TOWER_SIZE } from "../index.js";

export class Tower {
    constructor({
        game, 
        sprite, 
        position, 
        scale,
    }){
        this.game = game;
        this.sprite = sprite ?? { 
            imageLeft: "",
            imageRight: "", 
            x: 0, 
            y: 0, 
            width: 0, 
            height: 0 
        };
        this.position = position ?? {
            x: 0,
            y: 0
        }
        this.scale = scale ?? 1;

        this.width = this.sprite.width * this.scale;
        this.height = this.sprite.height * this.scale;
        this.halfWidth = this.width / 2;
        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2
        };

        this.maxFrame = (this.sprite.imageRight.width / this.sprite.width) - 1;

        this.projectiles = [];
        this.target;

        this.radius = 200;
        this.fireRate = 100;
    }
    draw(ctx){
        ctx.drawImage(
            this.sprite.imageRight,
            this.sprite.x * this.sprite.width,
            this.sprite.y * this.sprite.height,
            this.sprite.width,
            this.sprite.height,
            this.position.x + TILE_SIZE - this.halfWidth,
            this.position.y + TILE_SIZE - this.height,
            this.width,
            this.height
        );
        this.drawRadius(ctx);
    }
    drawRadius(ctx){
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(200, 0, 0, 0.1)';
        ctx.fill();
    }
    update() {
        if (this.game.eventUpdate)
            this.sprite.x < this.maxFrame ? this.sprite.x++ : this.sprite.x = 0;
        if (this.game.eventUpdate && this.target)
            this.shoot();     
        // if (this.target || (!this.target && this.frames.current !== 0)) // pauses tower
        // if ( this.target && this.frames.current === 1 && this.frames.elapsed % this.frames.hold === 0 )
    }

    shoot() {
        this.projectiles.push(
            new Projectile({
                position: {
                    x: this.center.x,
                    y: this.center.y
                },
                enemy: this.target
            })
        )
    }
}