import { ENEMY_STATE } from "./Enemy.js";

export const ANIMATION_STATE = {
    ANIMATING: 0,
    FINISHED: 1
};

export class RenderHandler {
    constructor(game) {
        this.game = game; 

        this.enemies = [];
        this.towers = [];
        this.projectiles = [];
        this.effects = [];
        this.gameTexts = [];
        this.placementTiles = this.game.assetHandler.levelOne.populateTilesArray();

        this.allEnemiesActive = false;
        this.maxEnemies = 10;
        this.enemyCounter = 0;    
        this.enemySpawnTimer = 0;
        
    }

    renderGame(ctx, deltaTime){
        ctx.drawImage(this.game.assetHandler.levelOneImage, 0, 0);
        this.game.gameTimer(deltaTime);
        this.renderTiles(ctx);
        this.renderEnemies(ctx, this.game.eventUpdate);
        this.renderTowers(ctx, this.game.eventUpdate);
        this.renderProjectiles(ctx, this.game.eventUpdate);
        this.renderEffects(ctx, this.game.eventUpdate);
        this.renderGameTexts(ctx);
        this.game.gameTextHandler.renderAllGUIText(ctx);
    }

    renderTiles(ctx){
        this.placementTiles.forEach(tile => tile.draw(ctx));
    }

    renderEnemies(ctx, event){
        if(event)
            this.enemySpawnTimer++;
            
        if (this.enemySpawnTimer % Math.floor(Math.random() * 300) === 0 && this.enemyCounter < this.maxEnemies){

            this.game.populateEnemiesArray(
                this.game.assetHandler.generateRandomEnemy(), 
                this.enemies
            );

            if(this.enemyCounter === this.maxEnemies)
                this.allEnemiesActive = true;
        }

        this.enemies.sort((b, a) => a.position.y - b.position.y);        
        
        for (let i = this.enemies.length - 1; i >= 0; i--){
            const enemy = this.enemies[i];

            if(enemy.state === ENEMY_STATE.DEAD) 
                this.enemies.splice(i, 1);
            else{
                enemy.renderEnemy(ctx, event);
            }
            
            if(enemy.position.x > canvas.width){
                this.game.hearts -= 1;
                enemy.position = { 
                    x: enemy.waypoints[0].x, 
                    y: enemy.waypoints[0].y 
                };
                enemy.waypointIndex = 0;
            }
        }

        if (this.enemies.length === 0 && this.allEnemiesActive === true){
            this.game.waves++;
            this.maxEnemies++;
            this.enemyCounter = 0;
            this.allEnemiesActive = false;
        }
    }

    renderTowers(ctx, event){
        this.towers.forEach(tower => {
            tower.update(event);
            tower.draw(ctx);

            const enemiesInTowerRange = tower.prioritiseEnemiesInTowerRange(tower, this.enemies);
            const selectedEnemy = enemiesInTowerRange.find(enemy => enemy.isSelected);

            if(selectedEnemy)
                tower.target = selectedEnemy;
            else
                tower.target = enemiesInTowerRange[0];

            if(tower.shootTimer > tower.cooldown && tower.target){
                tower.populateProjectilesArray(tower.target, this.projectiles);
                tower.shootTimer = 0;
            }
        })
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

    renderGameTexts(ctx){
        for (let i = this.gameTexts.length - 1; i >= 0; i-- ){
            const gameText = this.gameTexts[i];        
            gameText.draw(ctx);
            gameText.update();
            
            if (gameText.alpha <= 0){
                this.gameTexts.splice(i, 1);
            }
        }
    }
}

