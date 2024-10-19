import { Effect } from "./Effect.js";

export const EFFECT_STATES = {
    ANIMATING: 0,
    FINISHED: 1,
};

export class EffectHandler {
    constructor(){
        // this.bloodLeft = new Image();
        // this.bloodLeft.src = './images/effects/bloodLeft.png';

        // this.bloodRight = new Image();
        // this.bloodRight.src = './images/effects/bloodRight.png';

        this.effects = [];
    }

    renderEffects(ctx, event){
        for (let i = this.effects.length - 1; i >= 0; i-- ){
            const effect = this.effects[i];        
            if (effect.state === EFFECT_STATES.ANIMATING)
                effect.renderEffect(ctx, event);
            else {
                console.log(effect.state);
                this.effects.splice(i, 1);
                console.log(this.effects);
            }   
        }
    }

    populateEffectsArray(bloodLeft, bloodRight, position, width, height){
        this.effects.push(
            new Effect({
                sprite: { 
                    imageLeft: document.getElementById(bloodLeft),
                    imageRight: document.getElementById(bloodRight),
                    x: 0, 
                    y: Math.floor(Math.random() * 8),  
                    width: width, 
                    height: height 
                }, 
                position: position, 
                scale: .5,
            })            
        );
    }
}