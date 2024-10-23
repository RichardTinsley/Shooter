import { Effect, ANIMATION_STATE } from "./Effect.js";

const effectsURL = './images/effects/'; 

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
        this.blood.image.src = `${effectsURL}blood_110x110.png`;

        this.blueExplosion = {
            image: new Image(),
            width: 256,
            height: 256,
            scale: null
        };
        this.blueExplosion.image.src = `${effectsURL}blueExplosion_256x256.png`;
    }

    renderEffects(ctx, event){
        for (let i = this.effects.length - 1; i >= 0; i-- ){
            const effect = this.effects[i];        
            if (effect.state === ANIMATION_STATE.ANIMATING)
                effect.renderEffect(ctx, event);
            else {
                this.effects.splice(i, 1);
            }
        }
    }

    populateEffectsArray(effect, enemy){
        this.effects.push(new Effect({        
            sprite: { 
                image: effect.image,
                x: 0, 
                y: Math.floor(Math.random() * 9),  
                width: effect.width, 
                height: effect.height 
            }, 
            position: {
                x: enemy.position.x, 
                y: enemy.position.y
            }, 
            scale: enemy.scale / 2,
            direction: effect.direction
        }));
    }

    populateExplosionsArray(effect, projectile, enemy){
        this.effects.push(new Effect({        
            sprite: { 
                image: effect.image,
                x: 0, 
                y: 0,  
                width: effect.width, 
                height: effect.height 
            }, 
            position: {
                x: projectile.center.x, 
                y: projectile.center.y
            }, 
            scale: Math.random() * .4 + .3,
            direction: effect.direction
        }));
    }

}
