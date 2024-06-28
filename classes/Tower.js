import { Projectile } from "./Projectile.js";
import { TILE_SIZE, HALF_TILE_SIZE } from "../index.js";

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
            width: TILE_SIZE, 
            height: TILE_SIZE 
        };
        this.position = position ?? {
            x: 0,
            y: 0
        }
        this.scale = scale ?? 1;

        this.width = this.sprite.width;
        this.height = this.sprite.height;  
        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2
        };

        this.projectiles = [];
        this.target;

        this.radius = 200;
        this.fireRate = 100;
    }
    draw(ctx){
        this.drawRadius(ctx);
        ctx.drawImage(
            this.sprite.imageRight,
            this.sprite.x * this.sprite.width,
            this.sprite.y * this.sprite.height,
            this.sprite.width,
            this.sprite.height,
            this.position.x + HALF_TILE_SIZE - this.halfWidth,
            this.position.y + TILE_SIZE - this.height,
            this.width,
            this.height
        );
    }
    drawRadius(ctx){
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(200, 0, 0, 0.1)';
        ctx.fill();
    }
    update() {
        if (this.game.eventUpdate){
            this.sprite.x < this.maxFrame ? this.sprite.x++ : this.sprite.x = 0;
        }
        // if (this.target || (!this.target && this.frames.current !== 0)) // pauses tower

        // if (
        //     this.target &&
        //     this.frames.current === 1 &&
        //     this.frames.elapsed % this.frames.hold === 0
        // )
        // this.shoot();
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




// const explosions = [];
// function animate(){
//     for (let i = explosions.length - 1; i >= 0; i--) {
//         const explosion = explosions[i];
//         explosion.draw(ctx);
//         explosion.update(ctx);
//         if (explosion.frames.current >= explosion.frames.max - 1) {
//             explosions.splice(i, 1);
//         }
//     }
// }