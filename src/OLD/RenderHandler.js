import { ENEMY_STATE } from "./Enemy.js";

export const ANIMATION_STATE = {
    ANIMATING: 0,
    FINISHED: 1
};

export class RenderHandler {
    constructor(game) {
        this.game = game; 

        this.projectiles = [];
        this.effects = [];
        

        
    }

    renderGameFrame(ctx, deltaTime){
        
        this.game.gameTimer(deltaTime);
        this.renderTiles(ctx);
        this.renderEnemies(ctx, this.game.eventUpdate);
        this.renderTowers(ctx, this.game.eventUpdate);
        this.renderProjectiles(ctx, this.game.eventUpdate);
        this.renderEffects(ctx, this.game.eventUpdate);
        this.renderGameTexts(ctx);
        this.game.gameTextHandler.renderAllGUIText(ctx);
    }




    renderProjectiles(ctx, event){
        for (let i = this.projectiles.length - 1; i >= 0; i--){

            const projectile = this.projectiles[i];        
            projectile.renderProjectile(ctx, event);

            const enemyIndex = this.game.renderHandler.enemies.findIndex(enemy => projectile.enemy === enemy);
            const enemy = this.game.renderHandler.enemies[enemyIndex];
            
            if (projectile.checkCollision(enemy, projectile) && projectile.state === ANIMATION_STATE.ANIMATING){
                projectile.state = ANIMATION_STATE.FINISHED
                enemy.health -= projectile.damage;

                const random = Math.floor(Math.random() * 3);
                this.game.assetHandler.sounds[random].currentTime = 0;
                this.game.assetHandler.sounds[random].play()

                if(enemy.health <= 0 && enemyIndex > -1 && enemy.state !== ENEMY_STATE.DYING){
                        this.game.coins += enemy.coins;
                        this.game.exp += enemy.exp;

                        projectile.populateEffectsArray(this.game.assetHandler.blood, this.effects);

                        projectile.populateGameTextArray(
                            this.game.assetHandler.goldGameText, 
                            '+' + enemy.coins, 
                            enemy.position, 
                            this.gameTexts
                        );

                        projectile.populateGameTextArray(
                            this.game.assetHandler.greenGameText, 
                            '+' + enemy.exp, 
                            projectile.position, 
                            this.gameTexts
                        );
                }

                if(enemy.state === ENEMY_STATE.DYING){
                    projectile.populateEffectsArray(this.game.assetHandler.blood, this.effects);
                }

                projectile.populateExplosionsArray(this.game.assetHandler.blueExplosion, this.effects);

                if(projectile.state === ANIMATION_STATE.FINISHED){
                    this.projectiles.splice(i, 1);
                } 
            }
        }
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


}

