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

        this.damage = 10;
        this.radius = 1000;
        this.shootRate = 800;
        this.shootUpdate = false;
        this.shootTimer = 0;
        this.shootInterval = 1000;
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
    update(deltaTime) {

        if (this.shootUpdate && this.target)
            this.shoot(); //FIX FIRE

        if (this.shootTimer < this.shootInterval - this.shootRate){
            this.shootTimer += deltaTime;
            this.shootUpdate = false;
        } else {
            this.shootTimer = 0;
            this.shootUpdate = true; 
        }

        if (this.game.eventUpdate)
            this.sprite.x < this.maxFrame ? this.sprite.x++ : this.sprite.x = 0;
    }

    shoot() {
        this.projectiles.push(
            new Projectile({
                position: {
                    x: this.center.x,
                    y: this.center.y
                },
                enemy: this.target,
                scale: 1,
                damage: this.damage
            })
        )
        this.fireRateTimer = 1;
    }
}