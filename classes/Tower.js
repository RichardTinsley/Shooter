import { TILE_SIZE } from "../index.js";

export class Tower {
    constructor({
        sprite, 
        position, 
        scale,
    }){
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

        this.maxFrame = Math.floor((this.sprite.image.width / this.sprite.width)) - 1;
        this.maxRow = Math.floor((this.sprite.image.height / this.sprite.height)) - 1;

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
    }
}