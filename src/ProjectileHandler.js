import { ANIMATION_STATES, ENEMY_STATES, PROJECTILES_URL } from "./Constants.js";
import { Projectile } from "./Projectile.js";
import { checkCollision } from "./Math.js";

export class ProjectileHandler{
    constructor(game) {
        this.game = game;
        this.projectiles = [];

        this.blueFireball = {
            image: new Image(),
            width: 50,
            height: 25
        }
        this.blueFireball.image.src = `${PROJECTILES_URL}blueFireball_50x25.png`;
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

                // const random = Math.floor(Math.random() * 3);
                // this.game.assetHandler.sounds[random].currentTime = 0;
                // this.game.assetHandler.sounds[random].play()

                if(enemy.health <= 0 && enemyIndex > -1 && enemy.state !== ENEMY_STATES.DYING){
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

                if(enemy.state === ENEMY_STATES.DYING){
                    this.game.effectHandler.populateEffectsArray(this.game.effectHandler.blood, enemy);
                }

                this.game.effectHandler.populateExplosionsArray(this.game.effectHandler.blueExplosion, projectile, enemy);

                if(projectile.state === ANIMATION_STATES.FINISHED){
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