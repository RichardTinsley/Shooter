import * as OBJECTS from "../constants/objects.js"

export class Sprite {
    constructor({
        image,
        size,
        position,
        scale,
        speed,
    }){
        this.sprite = {
            image: image,
            width: size ?? 32,
            height: size ?? 32,
            frame: 0,
            row: 0,
        };
                
        this.scale = scale ?? 1;
        this.width = Math.round(this.sprite.width * this.scale * 100) / 100; 
        this.height = Math.round(this.sprite.height * this.scale * 100) / 100; 
        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;

        this.maxFrame = Math.floor(this.sprite.image.width / this.sprite.width) - 1;
        this.maxRow = Math.floor(this.sprite.image.height / this.sprite.height) - 1;

        this.position = position;
        this.center = {
            x: this.position.x,
            y: this.position.y - this.halfHeight,
            radius: this.halfWidth / 2,
        }
        
        this.speed = speed ?? 1;
        this.angle = 0;
        this.direction;
        this.velocity = { 
            x: 0, 
            y: 0
        }; 

        this.state = OBJECTS.ANIMATION.ANIMATING;
    }

    draw(ctx){
        ctx.drawImage(
            this.sprite.image,
            this.sprite.width * this.sprite.frame,
            this.sprite.height * this.sprite.row,
            this.sprite.width,
            this.sprite.height,
            this.position.x - this.halfWidth,//this.drawPositionX
            this.position.y - this.height,//this.drawPositionY
            this.width,
            this.height
        );
    }

    update(event){ 
        this.animate(event);
    }

    updateMovement(){
        this.velocity.x = Math.cos(this.angle) * this.speed;
        this.velocity.y = Math.sin(this.angle) * this.speed;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    animate(event){
        if(event)
        this.sprite.frame < this.maxFrame ? this.sprite.frame++ : this.sprite.frame = 0;
    }
}

