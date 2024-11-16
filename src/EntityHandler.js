import { TOWER_SIZE, TILE_SIZE_HALF, ANIMATION_STATES, ENEMY_SIZE, ENEMY_STATES } from "./constants/constants.js";
import { assets } from "./AssetLoader.js";
import { Enemy } from "./Enemy.js";
import { Tower } from "./Tower.js";
import { Effect } from "./Effect.js";
import { Projectile } from "./Projectile.js";
import { Text } from "./Text.js";

export class EntityHandler{
    constructor(towerSpots, hudElements){
        this.hudElements = hudElements;
        this.towers = towerSpots;
        this.enemies = [];
        this.effects = [];
        this.projectiles = [];
        this.texts = [];
    }

    draw(ctx){
        this.enemies.sort((a, b) => a.position.y - b.position.y);   
        this.enemies.forEach(enemy => { enemy.draw(ctx) });

        this.towers.forEach(tower => { tower.draw(ctx) });
        this.projectiles.forEach(projectile => { projectile.draw(ctx) });
        this.effects.forEach(effect => { effect.draw(ctx) });

        this.texts.sort((b, a) => a.position.y - b.position.y); 
        this.texts.forEach(text => { text.draw(ctx) });
    }

    update(event){
        for (let i = this.enemies.length - 1; i >= 0; i--){
            const enemy = this.enemies[i];

            if (enemy.state === ENEMY_STATES.DEAD) 
                this.enemies.splice(i, 1);
            else
                enemy.update(event);
            
            if (enemy.position.x > canvas.width){
                this.hudElements.hearts -= 1;
                enemy.resetEnemyPosition();
            }
        }

        this.towers.forEach(tower => {
            tower.update(event);
            tower.targetEnemy(this.enemies);
            tower.shootEnemy(this.addProjectile);
        });

        for (let i = this.projectiles.length - 1; i >= 0; i--){
            const projectile = this.projectiles[i];        
            projectile.update(event);

            const enemy = this.enemies.find(enemy => projectile.enemy === enemy);
            
            projectile.checkProjectileImpact(enemy, this.addText, this.addEffect, this.hudElements);

            if(projectile.state === ANIMATION_STATES.FINISHED)
                this.projectiles.splice(i, 1); 
        }

        this.effects.sort((b, a) => a.position.y - b.position.y); 
        for (let i = this.effects.length - 1; i >= 0; i-- ){
            const effect = this.effects[i];        
            if (effect.state === ANIMATION_STATES.ANIMATING)
                effect.update(event);
            else {
                this.effects.splice(i, 1);
            }
        }

        this.texts.sort((b, a) => a.position.y - b.position.y); 
        for (let i = this.texts.length - 1; i >= 0; i-- ){
            const text = this.texts[i];        
            text.update(event);
            if (text.alpha <= 0){
                this.texts.splice(i, 1);
            }
        }
    }

    addEnemy(enemy){
        this.enemies.push(new Enemy({
            sprite: { 
                image: enemy, 
                width: ENEMY_SIZE, 
                height: ENEMY_SIZE 
            },
            scale: 1.5,
        }));
    }
    

    addTower(tower, activeTower){
        let foundIndex = this.towers.findIndex(tower => tower === activeTower);

        const damage = 50;
        const range = 150;
        const cooldown = 10;
        const newTower = new Tower({
            sprite: { 
                image: tower, 
                frame: 0, 
                row: 0,
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
        });
        
        this.towers.splice(foundIndex, 1, newTower);
    }

    addProjectile = (enemy, tower, projectile) => {
        this.projectiles.push(new Projectile({
            sprite: { 
                image: projectile, 
                frame: 0, 
                row: 0,  
                width: 50, 
                height: 25 
            },
            position : {
                x: tower.center.x,
                y: tower.center.y - (tower.height / 2)
            }, 
            enemy: enemy,
            scale: 1, 
            speed: 2.5,
            damage: tower.damage, 
        }));
    }

    addEffect = (effect, projectile, position, animationRow, scale, width, height) => {
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