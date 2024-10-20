import { ENEMY_STATE } from "./EnemyHandler.js";

export class ProjectileHandler{
    constructor(game, enemyHandler, effectHandler, gameTextHandler){
        this.game = game;
        this.enemyHandler = enemyHandler;
        this.effectHandler = effectHandler;
        this.gameTextHandler = gameTextHandler;

        this.fireball = new Image();
        this.fireball.src = './images/projectiles/fireball_68x9.png';
    }

    renderProjectiles(ctx, event, tower){
        for (let i = tower.projectiles.length - 1; i >= 0; i--){
            const projectile = tower.projectiles[i];        
            projectile.update(event);
            projectile.draw(ctx);
            const xDifference = projectile.enemy.center.x - projectile.center.x;
            const yDifference = projectile.enemy.center.y - projectile.center.y;
            const distance = Math.hypot(xDifference, yDifference);
            
            if (distance < projectile.enemy.width / 32 + projectile.sprite.width / 2){
                projectile.enemy.health -= projectile.damage;
                this.game.audioHandler.bowImpact1.play();

                if(projectile.enemy.health <= 0){
                    const enemyIndex = this.enemyHandler.enemies.findIndex((enemy) => projectile.enemy === enemy);
                    
                    if (enemyIndex > -1 && projectile.enemy.state !== ENEMY_STATE.DYING){
                        this.game.coins += this.enemyHandler.enemies[enemyIndex].coins;
                        this.game.exp += this.enemyHandler.enemies[enemyIndex].exp;

                        this.effectHandler.populateEffectsArray(
                            this.effectHandler.bloodLeft,
                            this.effectHandler.bloodRight,
                            {x: projectile.enemy.position.x, y: projectile.enemy.position.y}, 
                            110,
                            110,
                            projectile.enemy.scale,
                        );

                        this.gameTextHandler.populateGameTextArray(
                            '+' + projectile.enemy.coins, 
                            '255, 215, 0, ', //GOLD COLOUR TEXT
                            '10', 
                            {x: projectile.enemy.position.x, y: projectile.enemy.position.y}, 
                            25, 
                            'left'
                        ); 

                        this.gameTextHandler.populateGameTextArray( 
                            '+' + projectile.enemy.exp, 
                            '50, 205, 50, ', //LIME COLOUR TEXT
                            '10', 
                            {x: tower.position.x + 16, y: tower.position.y}, 
                            25, 
                            'left'
                        ); 
                    }
                }
                tower.projectiles.splice(i, 1);
            }
        }
    }
}
