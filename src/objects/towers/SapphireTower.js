import { ANIMATION_STATES } from "../../constants/animations.js";
import { OBJECT_COLOURS, OBJECT_TYPES } from "../../constants/objects.js";
import { TOWER_SIZE } from "../../constants/objects.js";
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
            image: image ?? assets.get(`${OBJECT_COLOURS.SAPPHIRE}${OBJECT_TYPES.TOWER}1`),
            size: size ?? TOWER_SIZE,
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
            case ANIMATION_STATES.ANIMATING:
                super.draw(ctx);
                break
            case ANIMATION_STATES.FINISHED:
                break
        }
    }

    update(event){
        switch(this.state){
            case ANIMATION_STATES.ANIMATING:
                super.update(event);
                break
            case ANIMATION_STATES.FINISHED:
                break
        }
    }
}