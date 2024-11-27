import { Sprite } from "./Sprite.js";

export class MovingSprite extends Sprite{
    constructor({
        image,
        size,
        position,
        scale,
        speed,
    }){
        super({
            image, 
            size,
            position,
            scale, 
        });

        this.speed = speed;
        this.angle = 0;
        this.direction;
        this.velocity = { 
            x: 0, 
            y: 0
        }; 
    }

    draw(ctx){
        super.draw(ctx);
    }

    update(event){ 
        super.update(event);
    }

    updateMovement(){
        this.velocity.x = Math.cos(angle) * this.speed;
        this.velocity.y = Math.sin(angle) * this.speed;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}

