import { Effect } from "./Effect.js";

const effectsURL = './images/effects/'; 
export const EFFECT_STATES = {
    ANIMATING: 0,
    FINISHED: 1,
};


export class EffectHandler {
    constructor(){
        this.bloodLeft = new Image();
        this.bloodLeft.src = `${effectsURL}bloodLeft.png`;

        this.bloodRight = new Image();
        this.bloodRight.src = `${effectsURL}bloodRight.png`;

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

    populateEffectsArray(leftImage, rightImage, position, width, height, scale){
        this.effects.push(
            new Effect({
                sprite: { 
                    imageLeft: leftImage,
                    imageRight: rightImage,
                    x: 0, 
                    y: Math.floor(Math.random() * 9),  
                    width: width, 
                    height: height 
                }, 
                position: position, 
                scale: scale * .6,
            })            
        );
    }
}