import { ANIMATION_STATES } from "../../constants/animations.js";
import { Tower } from "./Tower.js";

export class SapphireTower extends Tower{
    constructor({
        image,
        position,
        size
    }){
        super({
            image, 
            position, 
            size
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