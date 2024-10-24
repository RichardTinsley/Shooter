import { ANIMATION_STATES, ENEMY_STATES, TILE_SIZE, TILE_SIZE_HALF } from "./Constants.js";

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
        this.maxRow = (this.sprite.image.height / this.sprite.height) - 1;

        this.width = this.sprite.width * this.scale;
        this.height = this.sprite.height * this.scale; 
        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;

        this.state = ANIMATION_STATES.ANIMATING;
        this.direction = direction;
    }

    renderEffect(ctx, event){
        switch(this.state){
            case ANIMATION_STATES.ANIMATING:
                this.draw(ctx);
                this.update(event); 
                break
            case ANIMATION_STATES.FINISHED:
                break
        }
    }

    draw(ctx){
        const left = -this.position.x - TILE_SIZE_HALF - this.halfWidth;
        const right = this.position.x + TILE_SIZE_HALF - this.halfWidth;
        if(this.direction === ENEMY_STATES.RIGHT){
            ctx.save();
            ctx.scale(-1, 1);
        }
        ctx.drawImage(
            this.sprite.image,
            this.sprite.x * this.sprite.width,
            this.sprite.y * this.sprite.height,
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

    // draw(ctx){
    //     const left = -this.halfWidth - HALF_ENEMY_SIZE - this.position.x;
    //     const right = this.position.x + HALF_ENEMY_SIZE - this.halfWidth;
    //     if(this.direction === ENEMY_STATE.LEFT){
    //         ctx.save();
    //         ctx.scale(-1, 1);
    //     }
    //     ctx.drawImage(
    //         this.sprite.image,
    //         this.sprite.frame * this.sprite.width,
    //         this.sprite.row * this.sprite.height + 1,
    //         this.sprite.width,
    //         this.sprite.height,
    //         this.direction === ENEMY_STATE.LEFT ? left : right,
    //         this.center.y - this.height + HALF_ENEMY_SIZE,
    //         this.width,
    //         this.height
    //     );
    //     if(this.direction === ENEMY_STATE.LEFT)
    //         ctx.restore();
    // }
    
    update(event){
        if(event){
            if(this.sprite.x < this.maxFrame) 
                this.sprite.x++; 
            else {
                this.state = ANIMATION_STATES.FINISHED;
            }
        }
    }
}
