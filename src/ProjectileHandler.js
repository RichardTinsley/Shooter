import { ANIMATION_STATES, ENEMY_STATES } from "./Constants.js";
import { Projectile } from "./Projectile.js";
import { checkCollision } from "./Math.js";
import { assets } from "./AssetHandler.js";

export class ProjectileHandler{
    constructor(game) {
        this.game = game;
        this.projectiles = [];
    }

    renderProjectiles(ctx, event){
        for (let i = this.projectiles.length - 1; i >= 0; i--){

            const projectile = this.projectiles[i];        
            projectile.renderProjectile(ctx, event);

            const enemyIndex = this.game.enemyHandler.enemies.findIndex(enemy => projectile.enemy === enemy);
            const enemy = this.game.enemyHandler.enemies[enemyIndex];
            
            if (checkCollision(enemy, projectile) && projectile.state === ANIMATION_STATES.ANIMATING){
                projectile.state = ANIMATION_STATES.FINISHED
                enemy.health -= projectile.damage;

                if(enemy.health <= 0 && enemyIndex > -1 && enemy.state !== ENEMY_STATES.DYING){
                    this.game.coins += enemy.coins;
                    this.game.exp += enemy.exp;

                    this.game.effectHandler.populateEffectsArray(
                        assets.get('blood'), 
                        projectile,  
                        projectile.enemy.position,
                        Math.floor(Math.random() * 9),  
                        projectile.enemy.scale / 1.5,
                        110,
                        110
                    );

                    this.game.textHandler.populateGameTextArray(
                        '+' + enemy.coins, 
                        '255, 215, 0, ',
                        enemy.position, 
                    );

                    if(enemy.exp > 0)
                        this.game.textHandler.populateGameTextArray(
                            '+' + enemy.exp + 'xp', 
                            '50, 205, 50, ', 
                            projectile.position, 
                        );
                }

                if(enemy.state === ENEMY_STATES.DYING){
                    this.game.effectHandler.populateEffectsArray(
                        assets.get('blood'), 
                        projectile,  
                        projectile.enemy.position,
                        Math.floor(Math.random() * 9),  
                        projectile.enemy.scale / 1.5,
                        110,
                        110
                    );
                }

                this.game.effectHandler.populateEffectsArray(
                    assets.get('blueExplosion'), 
                    projectile, 
                    projectile.center,
                    0, 
                    Math.random() * .4 + .3,
                    256,
                    256
                );

                if(projectile.state === ANIMATION_STATES.FINISHED){
                    this.projectiles.splice(i, 1);
                } 
            }
        }
    }

    populateProjectilesArray(enemy, tower, projectile){
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