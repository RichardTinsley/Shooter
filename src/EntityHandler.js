import { TOWER_SIZE, ANIMATION_STATES, ENEMY_SIZE, ENEMY_STATES } from "./constants/constants.js";
import { Enemy } from "./entities/Enemy.js";
import { Tower } from "./entities/Tower.js";
import { Effect } from "./entities/Effect.js";
import { Projectile } from "./entities/Projectile.js";
import { Text } from "./entities/Text.js";

export class EntityHandler{
    constructor(towerPlacementSpots, hudElements){
        this.hudElements = hudElements;
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
            return enemy.state !== ENEMY_STATES.DEAD;
        });

        this.towers = this.towers.filter(tower => {
            tower.update(event);
            tower.targetEnemy(this.enemies);
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

    addEnemy = (enemy) => {
        this.enemies.push(new Enemy({
            sprite: { 
                image: enemy, 
                width: ENEMY_SIZE, 
                height: ENEMY_SIZE 
            },
            scale: 1.5,
            hudElements: this.hudElements
        }));
    }
    
    addTower = (tower, activeTower) => {
        const damage = 50;
        const range = 150;
        const cooldown = 10;
        const newTower = new Tower({
            sprite: { 
                image: tower, 
                width: TOWER_SIZE, 
                height: TOWER_SIZE 
            },
            position: activeTower.position,
            damage: damage,
            range: range,
            cooldown: cooldown,
            addProjectile: this.addProjectile,
        });
        
        let foundIndex = this.towers.findIndex(tower => tower === activeTower);
        this.towers.splice(foundIndex, 1, newTower);
    }

    addProjectile = (enemy, tower, projectile) => {
        this.projectiles.push(new Projectile({
            sprite: { 
                image: projectile, 
                width: 50, 
                height: 25 
            },
            position : {
                x: tower.center.x,
                y: tower.center.y - (tower.sprite.height / 2)
            }, 
            enemy: enemy,
            scale: 1, 
            speed: 4,
            damage: tower.damage, 
            addText: this.addText, 
            addEffect: this.addEffect
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
        this.texts.push(new Text({
            text: text,
            colour: colour,
            position: {
                x: position.x,
                y: position.y
            },
        }));
    }
}