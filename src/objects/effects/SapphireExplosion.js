import * as OBJECTS from "../../constants/objects.js"
import { Effect } from "../Effect.js";
import { assets } from "../../utilities/assets.js";

export class SapphireExplosion extends Effect{
    constructor({
        image,
        width,
        height,
        position,
        scale,
    }){
        super({ 
            image: image ?? assets.get('blueExplosion'),
            width: width ?? 256,
            height: height ?? 256,
            position,
            scale: scale ?? 0.5,
        });
    }

    draw(ctx){
        switch(this.state){
            case OBJECTS.ANIMATION.ANIMATING:
                super.draw(ctx);
                break
            case OBJECTS.ANIMATION.FINISHED:
                break
        }
    }

    update(event){
        switch(this.state){
            case OBJECTS.ANIMATION.ANIMATING:
                super.update(event);
                break
            case OBJECTS.ANIMATION.FINISHED:
                break
        }
    }
}