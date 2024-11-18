import { TOWER_SIZE, TILE_SIZE_HALF, ANIMATION_STATES, ENEMY_SIZE, ENEMY_STATES } from "./constants/constants.js";
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
    }

    draw(ctx){
        this.enemies.sort((a, b) => a.position.y - b.position.y);   
        const entities = [...this.towers, ...this.enemies, ...this.effects, ...this.projectiles, ...this.texts];
        entities.forEach(entity => entity.draw(ctx));
    }

    update(event){
        for (let i = this.enemies.length - 1; i >= 0; i--){
            const enemy = this.enemies[i];
            if (enemy.state !== ENEMY_STATES.DEAD)
                enemy.update(event);
            // else
                // this.enemies.splice(i, 1);
        }

        for (let i = this.towers.length - 1; i >= 0; i--){
            const tower = this.towers[i];
            if (tower.state === ANIMATION_STATES.ANIMATING){
                tower.update(event);
                tower.targetEnemy(this.enemies);
            }
            // else
                // this.towers.splice(i, 1);
        }

        for (let i = this.projectiles.length - 1; i >= 0; i--){
            const projectile = this.projectiles[i];
            if (projectile.state === ANIMATION_STATES.ANIMATING)
                projectile.update(event);
            // else
                // this.projectiles.splice(i, 1);
        }

        for (let i = this.effects.length - 1; i >= 0; i--){
            const effect = this.effects[i];
            if (effect.state === ANIMATION_STATES.ANIMATING)
                effect.update(event);
            // else
                // this.effects.splice(i, 1);
        }

        for (let i = this.texts.length - 1; i >= 0; i--){
            const text = this.texts[i];
            if (text.state === ANIMATION_STATES.ANIMATING)
                text.update(event);
            // else
                // this.texts.splice(i, 1);
        }
        

        this.enemies = this.enemies.filter(enemy => enemy.state !== ENEMY_STATES.DEAD);
        this.towers = this.towers.filter(tower => tower.state === ANIMATION_STATES.ANIMATING);
        this.effects = this.effects.filter(effect => effect.state === ANIMATION_STATES.ANIMATING);
        this.projectiles = this.projectiles.filter(projectile => projectile.state === ANIMATION_STATES.ANIMATING);
        this.texts = this.texts.filter(text => text.state === ANIMATION_STATES.ANIMATING);
    }

    addEnemy(enemy){
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
        const cooldown = 25;
        const newTower = new Tower({
            sprite: { 
                image: tower, 
                width: TOWER_SIZE, 
                height: TOWER_SIZE 
            },
            position: { 
                x: activeTower.position.x - TILE_SIZE_HALF,
                y: activeTower.position.y - TILE_SIZE_HALF  
            },
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