import { ANIMATION_STATES, EFFECTS_URL } from "./Constants.js";
import { Effect } from "./Effect.js";

export class EffectHandler {
    constructor(game) {
        this.game = game; 
        this.effects = [];

        this.blood = {
            image: new Image(),
            width: 110,
            height: 110,
            scale: 1
        };
        this.blood.image.src = `${EFFECTS_URL}blood_110x110.png`;

        this.blueExplosion = {
            image: new Image(),
            width: 256,
            height: 256,
            scale: null
        };
        this.blueExplosion.image.src = `${EFFECTS_URL}blueExplosion_256x256.png`;
    }

    renderEffects(ctx, event){
        for (let i = this.effects.length - 1; i >= 0; i-- ){
            const effect = this.effects[i];        
            if (effect.state === ANIMATION_STATES.ANIMATING)
                effect.renderEffect(ctx, event);
            else {
                this.effects.splice(i, 1);
            }
        }
    }

    populateEffectsArray(effect, projectile, position, animationRow, scale){
        this.effects.push(new Effect({        
            sprite: { 
                image: effect.image,
                x: 0, 
                y: animationRow,  
                width: effect.width, 
                height: effect.height 
            }, 
            position: position, 
            scale: scale,
            direction: projectile.direction
        }));
    }
}
