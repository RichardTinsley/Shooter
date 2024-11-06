import { ANIMATION_STATES, ENEMY_STATES } from "./utilities/constants.js";
import { checkCollision } from "./utilities/math.js";
import { Projectile } from "./Projectile.js";
import { assets } from "./AssetHandler.js";

export class ProjectileHandler{
    constructor(game) {
        this.game = game;
        this.projectiles = [];
    }

    draw(ctx){
        this.projectiles.forEach(projectile => {
            projectile.draw(ctx);
        });
    }

    update(event){
        for (let i = this.projectiles.length - 1; i >= 0; i--){
            const projectile = this.projectiles[i];        
            projectile.update(event);

            const enemy = this.game.enemyHandler.enemies.find(enemy => projectile.enemy === enemy);
            
            this.checkProjectileImpact(enemy, projectile);

            if(projectile.state === ANIMATION_STATES.FINISHED)
                this.projectiles.splice(i, 1); 
        }
    }

    checkProjectileImpact(enemy, projectile){
        if (checkCollision(enemy, projectile) && projectile.state === ANIMATION_STATES.ANIMATING){
            projectile.state = ANIMATION_STATES.FINISHED
            enemy.health -= projectile.damage;

            this.checkEnemyDeath(enemy, projectile);

            if(enemy.state === ENEMY_STATES.DYING)
                this.addBlood(projectile);
        
            this.addExplosion(projectile);
        }   
    }

    checkEnemyDeath(enemy, projectile){
        if(enemy.health <= 0 && enemy.state !== ENEMY_STATES.DYING){
            this.game.coins += enemy.coins;
            this.game.exp += enemy.exp;

            this.addBlood(projectile);

            this.game.textHandler.add(
                '$' + enemy.coins, 
                '255, 215, 0, ',
                enemy.position, 
            );

            if(enemy.exp > 0)
                this.game.textHandler.add(
                    '+' + enemy.exp + 'xp', 
                    '50, 205, 50, ', 
                    projectile.position, 
            );
        }
    }

    addExplosion(projectile){
        this.game.effectHandler.add(
            assets.get('blueExplosion'), 
            projectile, 
            projectile.center,
            0, 
            Math.random() * .4 + .3,
            256,
            256
        );
    }

    addBlood(projectile){
        this.game.effectHandler.add(
            assets.get('blood'), 
            projectile,  
            projectile.enemy.position,
            Math.floor(Math.random() * 9),  
            projectile.enemy.scale / 1.5,
            110,
            110
        );
    }

    add(enemy, tower, projectile){
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
}