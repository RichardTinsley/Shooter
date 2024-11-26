import { ANIMATION_STATES } from "../constants/animations.js";

export class Sprite {
    constructor({
        image,
        size,
        position,
    }){
        
        this.sprite = {
            image: image,
            width: size,
            height: size,
            frame: 0,
            row: 0,
        };
        
        this.maxFrame = Math.floor((this.sprite.image.width / this.sprite.width)) - 1;
        this.maxRow = Math.floor((this.sprite.image.height / this.sprite.height)) - 1;
        
        this.scale = 1;
        this.width = Math.round(this.sprite.width * this.scale * 100) / 100; 
        this.height = Math.round(this.sprite.height * this.scale * 100) / 100; 

        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;

        this.position = position;

        this.center = {
            x: this.position.x,
            y: this.position.y - this.halfHeight,
            radius: this.halfWidth / 2,
        }
        
        this.state = ANIMATION_STATES.ANIMATING;
    }

    draw(ctx){
        ctx.drawImage(
            this.sprite.image,
            this.sprite.width * this.sprite.frame,
            this.sprite.height * this.sprite.row,
            this.sprite.width,
            this.sprite.height,
            this.position.x - this.halfWidth,
            this.position.y - this.height,
            this.width,
            this.height
        );
    }

    update(event){ 
        this.animate(event);
    }

    animate(event){
        if(!event || this.maxFrame === 0)
            return

        if(this.maxRow === 0)
            this.sprite.frame < this.maxFrame ? this.sprite.frame++ : this.sprite.frame = 0;
        else
            this.animateRows();
    }

    animateRows(){
        if(this.sprite.frame < this.maxFrame)
            this.sprite.frame++;
        else{
            this.sprite.row++;
            this.sprite.frame = 0;
        }
        if(this.sprite.row === this.maxRow && this.sprite.frame < this.maxFrame){
            this.sprite.row = 0;
            this.sprite.frame = 0;
        }
    }
}

