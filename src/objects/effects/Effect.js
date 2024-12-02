import { Sprite } from "../Sprite.js"

export class Effect extends Sprite{
    constructor({
        image,
        width,
        height,
        position,
        scale,
        speed,
    }){
        super({ 
            image,
            width,
            height,
            position,
            scale: scale ?? 1,
            speed, 
        });
    }

    draw(ctx){
        super.draw(ctx);
    }

    update(event){
        super.update(event)
    }

}
