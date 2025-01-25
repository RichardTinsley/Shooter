import * as OBJECTS from "../../constants/objects.js"
import { Effect } from "../Effect.js";
import { assets } from "../../utilities/assets.js";

export class Blood extends Effect{
    constructor({
        image,
        width,
        height,
        position,
        scale,
    }){
        super({ 
            image: image ?? assets.get('blood'),
            width: width ?? 110,
            height: height ?? 110,
            position: {
                x: position.x,
                y: position.y
            },
            scale: scale ?? 1,
        });

        this.drawPositionY = this.position.y - this.height;
        this.sprite.row = Math.floor(Math.random() * 9);
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