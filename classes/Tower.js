import { Projectile } from "./Projectile.js";
import { TILE_SIZE } from "../index.js";

export class Tower {
    constructor({
        game,
        sprite, 
        position, 
        scale,
    }){
        this.game = game;
        this.sprite = sprite ?? { 
            image: "", 
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

        this.maxFrame = (this.sprite.image.width / this.sprite.width) - 1;

        this.projectiles = [];
        this.target;

        this.damage = 50;
        this.range = 125;
        this.cooldown = 10;
        this.shootTimer = 0;
    }

    draw(ctx){
        ctx.drawImage(
            this.sprite.image,
            this.sprite.x * this.sprite.width,
            this.sprite.y * this.sprite.height,
            this.sprite.width,
            this.sprite.height,
            this.position.x + TILE_SIZE - this.halfWidth,
            this.position.y + TILE_SIZE - this.height,
            this.width,
            this.height
        );
    }

    update(event) {
        if (event){
            this.shootTimer++;
            this.sprite.x < this.maxFrame ? this.sprite.x++ : this.sprite.x = 0;
        }

        if (this.shootTimer > this.cooldown && this.target){
            this.shoot(this.game.assetHandler.blueFireball);
            this.shootTimer = 0;
        }
    }

    shoot(projectile) {
        this.projectiles.push(
            new Projectile({
                sprite: { 
                    image: projectile, 
                    x: 0, 
                    y: 0,  
                    width: 50, 
                    height: 25 
                },
                position: {
                    x: this.center.x,
                    y: this.center.y
                },
                enemy: this.target,
                scale: 1,
                damage: this.damage
            })
        );
    }
}