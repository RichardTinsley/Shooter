import { GAME_WIDTH, GAME_HEIGHT, ROWS, COLUMNS, TILE_SIZE, HALF_TILE_SIZE, TOWER_SIZE } from "../index.js";
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
        this.placementTiles = this.game.assetHandler.populateTilesArray();

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
        this.renderGUI(ctx);
    }

    renderTiles(ctx){
        this.placementTiles.forEach(tile => tile.draw(ctx));
    }

    renderEnemies(ctx, event){
        if(event)
            this.enemySpawnTimer++;
            
        if (this.enemySpawnTimer % Math.floor(Math.random() * 300) === 0 && this.enemyCounter < this.maxEnemies){

            const enemyColour = this.game.assetHandler.generateRandomEnemy();
            this.game.assetHandler.populateEnemiesArray(this.game.loadEnemy(enemyColour), this.enemies);

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
                this.game.assetHandler.populateProjectilesArray(tower.loadTowerProjectile(tower.target), this.projectiles);
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

                if(enemy.health <= 0){
                    if (enemyIndex > -1 && enemy.state !== ENEMY_STATE.DYING){
                        this.game.coins += enemy.coins;
                        this.game.exp += enemy.exp;

                        this.game.assetHandler.populateEffectsArray(
                            projectile.loadEffect(this.game.assetHandler.blood), 
                            this.effects
                        );

                        this.game.assetHandler.populateGameTextArray(
                            projectile.loadGameText(this.game.assetHandler.goldGameText, '+' + enemy.coins, enemy.position), 
                            this.gameTexts
                        );

                        this.game.assetHandler.populateGameTextArray(
                            projectile.loadGameText(this.game.assetHandler.greenGameText, '+' + enemy.exp, projectile.position), 
                            this.gameTexts
                        );
                    }
                }

                if(enemy.state === ENEMY_STATE.DYING){
                    this.game.assetHandler.populateEffectsArray(
                        projectile.loadEffect(this.game.assetHandler.blood), 
                        this.effects
                    );
                }

                // this.game.assetHandler.createExplosion(projectile, this.game.assetHandler.blueExplosion);

                this.game.assetHandler.populateEffectsArray(
                    projectile.loadExplosion(this.game.assetHandler.blueExplosion), 
                    this.effects
                );

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

    renderDebugInfo(ctx){
        this.game.calculateFPSNormal();
        this.drawLevelDebug(ctx);
        this.drawTowerDebug(ctx);
        this.drawEnemyDebug(ctx);
        this.drawPerformanceDebug(ctx);
    }
    
    renderGUI(ctx){
        this.drawGUIText(ctx, this.game.hearts, 65, 52, 20,'left');
        this.drawGUIText(ctx, this.game.coins, 225, 52, 20,'left');
        this.drawGUIText(ctx, this.game.exp, 515, 52, 20,'left');
        this.drawGUIText(ctx, this.game.waves, 805, 52, 20,'left');
        this.drawGUIText(ctx, this.game.timer, 1155, 52, 20,'left');
    }
    
    drawGUIText(ctx, text, x, y, textSize, align){
        ctx.fillStyle = 'white';
        ctx.font = 'bold ' + textSize + 'px canterbury';
        ctx.textAlign = align;
        ctx.textBaseline = 'middle';
        ctx.fillText(text, x + 5, y - 3);
    }
    
    drawScreenStopped(ctx, text){
        ctx.drawImage(this.game.assetHandler.levelOneImage, 0, 0);
        this.placementTiles.forEach(tile => tile.draw(ctx));
        this.enemies.sort((a, b) => a.position.y - b.position.y).forEach(enemy => enemy.draw(ctx));
        this.towers.forEach(tower => tower.draw(ctx));
        this.projectiles.forEach(projectile => projectile.draw(ctx));
        this.effects.forEach(effect => effect.draw(ctx));
        this.gameTexts.forEach(text => text.draw(ctx));
        this.renderGUI(ctx);

        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        this.drawGUIText(ctx, text, GAME_WIDTH / 2, GAME_HEIGHT / 2, 100, 'center'); 
    }

    drawLevelDebug(ctx){
        ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
        ctx.lineWidth = 1;
        for (let row = 0; row < ROWS; row++)
            for (let column = 0; column < COLUMNS; column++)
                ctx.strokeRect(
                    column * TILE_SIZE,
                    row * TILE_SIZE,
                    TILE_SIZE,
                    TILE_SIZE
                );   
    }

    drawEnemyDebug(ctx){
        this.enemies.forEach(enemy => {
            ctx.fillStyle = 'rgba(250, 0, 0, 0.3)';
            ctx.fillRect(enemy.position.x, enemy.position.y, TILE_SIZE, TILE_SIZE);
            ctx.fillStyle = 'rgba(0, 0, 250, 0.3)';
            ctx.fillRect(Math.floor(enemy.position.x / TILE_SIZE) * TILE_SIZE, Math.floor(enemy.position.y / TILE_SIZE) * TILE_SIZE, TILE_SIZE, TILE_SIZE);
            this.drawGUIText(ctx, enemy.priorityDistance, Math.floor(enemy.position.x / TILE_SIZE) * TILE_SIZE, Math.floor(enemy.position.y / TILE_SIZE) * TILE_SIZE + 20, HALF_TILE_SIZE, 'right');
        })
    }

    drawTowerDebug(ctx){
        this.towers.forEach(tower => {
            ctx.beginPath();
            ctx.arc(tower.center.x, tower.center.y, tower.range, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(200, 0, 0, 0.1)';
            ctx.fill();
            this.drawGUIText(ctx, tower.range, tower.center.x, tower.center.y - TOWER_SIZE, HALF_TILE_SIZE, 'right');
        })
    }

    drawPerformanceDebug(ctx){
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fillRect(TILE_SIZE, TILE_SIZE * 3, TILE_SIZE * 3, TILE_SIZE * 2);
        const FPS = Math.round(this.game.FPSNormal * 1000) / 1000;
        this.drawGUIText(ctx, `f p s: ${FPS}`, TILE_SIZE, TILE_SIZE * 4, HALF_TILE_SIZE, 'left');
    }
}

