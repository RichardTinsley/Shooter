import { ANIMATION_STATES } from "./utilities/constants.js";
import { Effect } from "./Effect.js";

export class EffectHandler {
    constructor(game) {
        this.game = game; 
        this.effects = [];
    }

    draw(ctx){
        this.effects.forEach(effect => {
            effect.draw(ctx);
        })
    }

    update(event){
        for (let i = this.effects.length - 1; i >= 0; i-- ){
            const effect = this.effects[i];        
            if (effect.state === ANIMATION_STATES.ANIMATING)
                effect.update(event);
            else {
                this.effects.splice(i, 1);
            }
        }
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

    populateEffectsArray(effect, projectile, position, animationRow, scale, width, height){
        this.effects.push(new Effect({        
            sprite: { 
                image: effect,
                x: 0, 
                y: animationRow,  
                width: width, 
                height: height 
            }, 
            position: position, 
            scale: scale,
            direction: projectile.direction
        }));
    }
}
