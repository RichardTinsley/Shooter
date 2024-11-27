import * as OBJECTS from "../../constants/objects.js"
import { Tower } from "./Tower.js";
import { assets } from "../../utilities/assets.js";

export class SapphireTower extends Tower{
    constructor({
        image,
        size,
        position,
        scale,
        isOccupied
    }){
        super({ 
            image: image ?? assets.get(`${OBJECTS.COLOURS.SAPPHIRE}${OBJECTS.TYPES.TOWER}1`),
            size: size ?? OBJECTS.SIZES.TOWER,
            position,
            scale: scale ?? 1, 
            isOccupied: isOccupied ?? true
        });

        this.damage = 50;
        this.range = 150;
        this.cooldown = 10;
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