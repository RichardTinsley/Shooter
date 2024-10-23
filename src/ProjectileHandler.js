import { Projectile, ANIMATION_STATE } from "./Projectile.js";
import { ENEMY_STATE } from "./Enemy.js";

const projectilesURL = './images/projectiles/';

export class ProjectileHandler{
    constructor(game) {
        this.game = game;
        this.projectiles = [];

        this.blueFireball = {
            image: new Image(),
            width: 50,
            height: 25
        }
        this.blueFireball.image.src = `${projectilesURL}blueFireball_50x25.png`;
    }

    renderProjectiles(ctx, event){
        for (let i = this.projectiles.length - 1; i >= 0; i--){

            const projectile = this.projectiles[i];        
            projectile.renderProjectile(ctx, event);

            const enemyIndex = this.game.enemyHandler.enemies.findIndex(enemy => projectile.enemy === enemy);
            const enemy = this.game.enemyHandler.enemies[enemyIndex];
            
            if (projectile.checkCollision(enemy, projectile) && projectile.state === ANIMATION_STATE.ANIMATING){
                projectile.state = ANIMATION_STATE.FINISHED
                enemy.health -= projectile.damage;

                // const random = Math.floor(Math.random() * 3);
                // this.game.assetHandler.sounds[random].currentTime = 0;
                // this.game.assetHandler.sounds[random].play()

                if(enemy.health <= 0 && enemyIndex > -1 && enemy.state !== ENEMY_STATE.DYING){
                        this.game.coins += enemy.coins;
                        this.game.exp += enemy.exp;

                        this.game.effectHandler.populateEffectsArray(this.game.effectHandler.blood, enemy);

                        this.game.textHandler.populateGameTextArray(
                            this.game.textHandler.goldGameText, 
                            '+' + enemy.coins, 
                            enemy.position, 
                            this.gameTexts
                        );

                        this.game.textHandler.populateGameTextArray(
                            this.game.textHandler.greenGameText, 
                            '+' + enemy.exp, 
                            projectile.position, 
                            this.gameTexts
                        );
                }

                if(enemy.state === ENEMY_STATE.DYING){
                    this.game.effectHandler.populateEffectsArray(this.game.effectHandler.blood, enemy);
                }

                this.game.effectHandler.populateExplosionsArray(this.game.effectHandler.blueExplosion, projectile, enemy);

                if(projectile.state === ANIMATION_STATE.FINISHED){
                    this.projectiles.splice(i, 1);
                } 
            }
        }
    }

    populateProjectilesArray(target, tower){
        this.projectiles.push(new Projectile({
            sprite: { 
                image: this.blueFireball.image, 
                frame: 0, 
                row: 0,  
                width: this.blueFireball.width, 
                height: this.blueFireball.height 
            },
            position : {
                x: tower.center.x,
                y: tower.center.y - (tower.height / 2)
            }, 
            enemy: target,
            scale: 1, 
            speed: 2.5,
            damage: tower.damage, 
        }));
    }
}