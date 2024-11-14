import { ANIMATION_STATES } from "./constants/constants.js";
import { Effect } from "./Effect.js";

export class EffectHandler {
    constructor() {
        this.effects = [];
    }

    draw(ctx){
        this.effects.forEach(effect => {
            effect.draw(ctx);
        })
    }

    update(event){
        this.effects.sort((b, a) => a.position.y - b.position.y); 
        for (let i = this.effects.length - 1; i >= 0; i-- ){
            const effect = this.effects[i];        
            if (effect.state === ANIMATION_STATES.ANIMATING)
                effect.update(event);
            else {
                this.effects.splice(i, 1);
            }
        }
    }

    add(effect, projectile, position, animationRow, scale, width, height){
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
