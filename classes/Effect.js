import { EFFECT_STATES } from "./EffectHandler.js";

export class Effect {
    constructor({ 
        sprite, 
        position, 
        scale,
    }){
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
        this.maxFrame = (this.sprite.imageRight.width / this.sprite.width) - 1;

        this.width = this.sprite.width * this.scale;
        this.height = this.sprite.height * this.scale; 
        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;

        this.state = EFFECT_STATES.ANIMATING;
        this.direction = this.sprite.imageRight;
    }

    renderEffect(ctx, event){
        switch(this.state){
            case EFFECT_STATES.ANIMATING:
                this.draw(ctx);
                this.update(event); 
                break
            case EFFECT_STATES.FINISHED:
                console.log(this.sprite.y);
                break
        }
    }
    draw(ctx){
        ctx.drawImage(
            this.direction,
            this.sprite.x * this.sprite.width,
            this.sprite.y * this.sprite.height,
            this.sprite.width,
            this.sprite.height,
            this.position.x - this.halfWidth + (this.halfWidth / 2),
            this.position.y - this.halfHeight,
            this.width,
            this.height
        );
    }
    
    update(event){
        if(event){
            if(this.direction === this.sprite.imageRight)
                if(this.sprite.x < this.maxFrame) 
                    this.sprite.x++; 
                else 
                    this.state = EFFECT_STATES.FINISHED;
            else
                if(this.sprite.x > 0) 
                    this.sprite.x--; 
                else
                    this.state = EFFECT_STATES.FINISHED;
        }
    }
}
