import { Effect } from "./Effect.js";

const effectsURL = './images/effects/'; 
export const EFFECT_STATES = {
    ANIMATING: 0,
    FINISHED: 1
};

export class EffectHandler {
    constructor(){
        this.blood = new Image();
        this.blood.src = `${effectsURL}blood.png`;

        this.effects = [];
    }

    renderEffects(ctx, event){
        for (let i = this.effects.length - 1; i >= 0; i-- ){
            const effect = this.effects[i];        
            if (effect.state === EFFECT_STATES.ANIMATING)
                effect.renderEffect(ctx, event);
            else {
                this.effects.splice(i, 1);
            }
        }
    }

    populateEffectsArray(image, position, width, height, scale, direction){
        this.effects.push(
            new Effect({
                sprite: { 
                    image: image,
                    x: 0, 
                    y: Math.floor(Math.random() * 9),  
                    width: width, 
                    height: height 
                }, 
                position: position, 
                scale: scale * .6,
                direction: direction
            })            
        );
    }
}