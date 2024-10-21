import { GAME_WIDTH, GAME_HEIGHT, ROWS, COLUMNS, TILE_SIZE, HALF_TILE_SIZE, TOWER_SIZE } from "../index.js";

export const ENEMY_STATE = {
    IDLE: 0,
    WALKING: 1,
    RUNNING: 2,
    ATTACK: 3,
    INJURED: 4,
    DYING: 5,
    DEAD: 6,
    LEFT: "LEFT",
    RIGHT: "RIGHT"
};

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
        ctx.drawImage(this.game.assetHandler.level1, 0, 0);
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
            const randomWaypoints = this.game.assetHandler.generateRandomEnemyWaypoints();
            this.game.assetHandler.populateEnemiesArray(enemyColour, randomWaypoints);
            
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

            const enemiesInTowerRange = this.game.assetHandler.prioritiseEnemiesInTowerRange(tower);
            const selectedEnemy = enemiesInTowerRange.find(enemy => enemy.isSelected);

            if(selectedEnemy)
                tower.target = selectedEnemy;
            else
                tower.target = enemiesInTowerRange[0];

            const newProjectile = {
                    image: this.game.assetHandler.blueFireball, 
                    position : {
                        x: tower.center.x,
                        y: tower.center.y
                    }, 
                    width: 50, 
                    height: 25, 
                    scale: 1, 
                    damage: tower.damage, 
                    target: tower.target
            };

            if(tower.shootTimer > tower.cooldown && tower.target){
                this.game.assetHandler.populateProjectilesArray(newProjectile);
                tower.shootTimer = 0;
            }
        })
    }

    renderProjectiles(ctx, event){
        for (let i = this.projectiles.length - 1; i >= 0; i--){

            const projectile = this.projectiles[i];        
            projectile.renderProjectile(ctx, event);

            const xDifference = projectile.enemy.center.x - projectile.center.x;
            const yDifference = projectile.enemy.center.y - projectile.center.y;
            const distance = Math.hypot(xDifference, yDifference);
            
            
            if (distance < projectile.enemy.height && projectile.state === ANIMATION_STATE.ANIMATING){
                const enemyIndex = this.game.renderHandler.enemies.findIndex(enemy => projectile.enemy === enemy);
                projectile.state = ANIMATION_STATE.FINISHED
                projectile.enemy.health -= projectile.damage;

                this.game.assetHandler.populateEffectsArray(
                    this.game.assetHandler.blueExplosion,
                    {
                        x: projectile.enemy.position.x, 
                        y: projectile.enemy.position.y
                    }, 
                    256,
                    256,
                    projectile.enemy.scale / 2,
                    projectile.enemy.direction
                );
                
                if(projectile.enemy.health <= 0){
                    
                    if (enemyIndex > -1 && projectile.enemy.state !== ENEMY_STATE.DYING){
                        this.game.coins += this.game.renderHandler.enemies[enemyIndex].coins;
                        this.game.exp += this.game.renderHandler.enemies[enemyIndex].exp;
                    
                        this.game.assetHandler.populateEffectsArray(
                            this.game.assetHandler.blood,
                            {
                                x: projectile.enemy.position.x, 
                                y: projectile.enemy.position.y
                            }, 
                            110,
                            110,
                            projectile.enemy.scale,
                            projectile.enemy.direction
                        );

                        this.game.assetHandler.populateGameTextArray(
                            '+' + projectile.enemy.coins, 
                            '255, 215, 0, ', //GOLD COLOUR TEXT
                            '10', 
                            {
                                x: projectile.enemy.position.x, 
                                y: projectile.enemy.position.y
                            }, 
                            25, 
                            'left'
                        ); 

                        this.game.assetHandler.populateGameTextArray( 
                            '+' + projectile.enemy.exp, 
                            '50, 205, 50, ', //LIME COLOUR TEXT
                            '10', 
                            {
                                x: projectile.position.x + HALF_TILE_SIZE,
                                y: projectile.position.y
                            }, 
                            25, 
                            'left'
                        ); 
                    }
                }

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
        ctx.drawImage(this.game.assetHandler.level1, 0, 0);
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

