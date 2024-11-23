import { ANIMATION_STATES } from "./constants/constants.js";
import { Enemy } from "./entities/Enemy.js";
import { Tower } from "./entities/Tower.js";
import { Effect } from "./entities/Effect.js";
import { Projectile } from "./entities/Projectile.js";
import { Text } from "./entities/Text.js";

export class EntityHandler{
    constructor(
        towerPlacementSpots, 
    ){
        this.towers = towerPlacementSpots();
        this.enemies = [];
        this.effects = [];
        this.projectiles = [];
        this.texts = [];
        this.entities = [];
    }

    draw(ctx){
        this.enemies.sort((a, b) => a.position.y - b.position.y);   
        this.entities = [...this.towers, ...this.enemies, ...this.effects, ...this.projectiles, ...this.texts];
        this.entities.forEach(entity => entity.draw(ctx));
    }

    update(event){
        this.enemies = this.enemies.filter(enemy => {
            enemy.update(event);
            return enemy.state === ANIMATION_STATES.ANIMATING;
        });

        this.towers = this.towers.filter(tower => {
            tower.update(event);
            return tower.state === ANIMATION_STATES.ANIMATING;
        });

        this.projectiles = this.projectiles.filter(projectile => {
            projectile.update(event);
            return projectile.state === ANIMATION_STATES.ANIMATING;
        });

        this.effects = this.effects.filter(effect => {
            effect.update(event);
            return effect.state === ANIMATION_STATES.ANIMATING;
        });

        this.texts = this.texts.filter(text => {
            text.update(event);
            return text.state === ANIMATION_STATES.ANIMATING;
        });
    }

    addEnemy = (enemy, waypoints) => {
        this.enemies.push(new Enemy({
            sprite: { 
                image: enemy
            },
            waypoints,
            scale: 1.5
        }));
    } 

    addEffect = (effect, projectile, position, animationRow, scale, width, height) => {
        this.effects.push(new Effect({        
            sprite: { 
                image: effect,
                row: animationRow,  
                width: width, 
                height: height 
            }, 
            position: position,
            scale: scale,
            direction: projectile.direction
        }));
    }
    
    addText = (text, colour, position) => {
        if(text === 0) 
            return;

        this.texts.push(new Text({
            text: text,
            colour: colour,
            position: {... position},
        }));
    }
}