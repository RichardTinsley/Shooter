import * as OBJECTS from "../constants/objects.js"
import { Sprite } from "./Sprite.js"

export class Effect extends Sprite{
    constructor({
        image,
        width,
        height,
        position,
        scale,
    }){
        super({ 
            image,
            width,
            height,
            position,
            scale,
        });

        this.drawPositionX = this.position.x - this.halfWidth;
        this.drawPositionY = this.position.y - this.halfHeight;
    }

    draw(ctx){
        super.draw(ctx);
    }

    update(event){
        if(!event) 
            return
        this.animateEffect();
    }

    animateEffect(){
        if(this.sprite.frame < this.maxFrame) 
            this.sprite.frame++; 
        else 
            this.state = OBJECTS.ANIMATION.FINISHED;
    }
}
