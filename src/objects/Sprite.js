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

        this.position = position;
        
        this.halfWidth = this.sprite.width / 2;
        this.halfHeight = this.sprite.height / 2;

        this.maxFrame = Math.floor((this.sprite.image.width / this.sprite.width)) - 1;
        this.maxRow = (this.sprite.image.height / this.sprite.height) - 1;

        this.state = ANIMATION_STATES.ANIMATING;
    }

    draw(ctx){
        switch(this.state){
            case ANIMATION_STATES.ANIMATING:
                ctx.drawImage(
                    this.sprite.image,
                    this.sprite.width * this.sprite.frame,
                    this.sprite.height * this.sprite.row,
                    this.sprite.width,
                    this.sprite.height,
                    this.position.x - this.halfWidth,
                    this.position.y - this.halfHeight,
                    this.sprite.width,
                    this.sprite.height
                );
                break
            case ANIMATION_STATES.FINISHED:
                break
        }
    }

    update(event){ 
        this.animate(event);
        switch(this.state){
            case ANIMATION_STATES.ANIMATING:
                break
            case ANIMATION_STATES.FINISHED:
                break
        }
    }

    animate(event){
        if(!event)
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

