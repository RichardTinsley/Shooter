import { ANIMATION_STATES, ENEMY_STATES, TILE_SIZE, TILE_SIZE_HALF } from "../constants/constants.js";

export class Effect {
    constructor({ 
        sprite, 
        position, 
        scale,
        direction
    }){
        this.sprite = sprite;
        this.position = position
        this.scale = scale;
        this.maxFrame = (this.sprite.image.width / this.sprite.width) - 1;
        this.sprite.frame = 0;

        this.width = this.sprite.width * this.scale;
        this.height = this.sprite.height * this.scale; 
        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;

        this.center = {
            x: Math.round(this.position.x + this.width / 2 * 100) / 100,
            y: Math.round(this.position.y + this.height / 2 * 100) / 100
        };

        this.state = ANIMATION_STATES.ANIMATING;
        this.direction = direction;
    }

    draw(ctx){
        switch(this.state){
            case ANIMATION_STATES.ANIMATING:
                this.drawEffect(ctx);
                break
            case ANIMATION_STATES.FINISHED:
                break
        }
    }

    update(event){
        switch(this.state){
            case ANIMATION_STATES.ANIMATING:
                this.updateEffect(event); 
                break
            case ANIMATION_STATES.FINISHED:
                break
        }
    }

    drawEffect(ctx){
        const left = -this.position.x - TILE_SIZE_HALF - this.halfWidth;
        const right = this.position.x + TILE_SIZE_HALF - this.halfWidth;
        if(this.direction === ENEMY_STATES.RIGHT){
            ctx.save();
            ctx.scale(-1, 1);
        }
        ctx.drawImage(
            this.sprite.image,
            this.sprite.frame * this.sprite.width,
            this.sprite.row * this.sprite.height,
            this.sprite.width,
            this.sprite.height,
            this.direction === ENEMY_STATES.RIGHT ? left : right,
            this.position.y + TILE_SIZE + TILE_SIZE_HALF - this.height,
            this.width,
            this.height
        );
        if(this.direction === ENEMY_STATES.RIGHT)
            ctx.restore();
    }

    updateEffect(event){
        if(event){
            if(this.sprite.frame < this.maxFrame) 
                this.sprite.frame++; 
            else {
                this.state = ANIMATION_STATES.FINISHED;
            }
        }
    }
}
