import { GAME_WIDTH, GAME_HEIGHT } from "../index.js";

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
}

export const EFFECT_STATES = {
    ANIMATING: 0,
    FINISHED: 1
};

export class RenderHandler {
    constructor(game) {
        this.game = game; 

        this.enemies = [];
        this.towers = [];
        this.effects = [];
        this.gameTexts = [];
        this.placementTiles = this.game.assetHandler.populateTilesArray();

        this.allEnemiesActive = false;
        this.maxEnemies = 10;
        this.enemyCounter = 0;    
        this.enemySpawnTimer = 0;
        
    }

        
    renderGame(ctx, deltaTime){
        this.game.gameTimer(deltaTime);
        this.renderTiles(ctx);
        this.renderTowers(ctx, this.game.eventUpdate);
        this.renderEnemies(ctx, this.game.eventUpdate);
        this.renderEffects(ctx, this.game.eventUpdate);
        this.renderGameTexts(ctx);
        this.renderGUI(ctx);
    }

    renderTiles(ctx){
        ctx.drawImage(this.game.assetHandler.level1, 0, 0);
        this.placementTiles.forEach((tile) => tile.renderTile(ctx));
    }

    renderEnemies(ctx, event){
        if(event)
            this.enemySpawnTimer++;
            
        if (this.enemySpawnTimer % Math.floor(Math.random() * 300) === 0 && this.enemyCounter < this.maxEnemies){
            const enemyColour = this.game.assetHandler.generateRandomEnemy();
            const randomWaypoints = this.game.assetHandler.generateRandomEnemyWaypoints();
            this.game.assetHandler.populateEnemiesArray(this.enemies, enemyColour, randomWaypoints);
            
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
                enemy.position = { x: enemy.waypoints[0].x, y: enemy.waypoints[0].y };
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
        this.towers.forEach((tower) => {
            tower.update(event);
            tower.draw(ctx);

            const enemiesInTowerRange = this.game.assetHandler.prioritiseEnemiesInTowerRange(tower);
            const selectedEnemy = enemiesInTowerRange.find(enemy => enemy.isSelected);

            if(selectedEnemy)
                tower.target = selectedEnemy;
            else
                tower.target = enemiesInTowerRange[0];

            this.renderProjectiles(ctx, event, tower);
        })
    }

    renderProjectiles(ctx, event, tower){
        for (let i = tower.projectiles.length - 1; i >= 0; i--){
            const projectile = tower.projectiles[i];        
            projectile.update(event);
            projectile.draw(ctx);
            const xDifference = projectile.enemy.center.x - projectile.center.x;
            const yDifference = projectile.enemy.center.y - projectile.center.y;
            const distance = Math.hypot(xDifference, yDifference);
            
            if (distance < projectile.enemy.width / 32 + projectile.sprite.width){
                projectile.enemy.health -= projectile.damage;
                // this.game.audioHandler.bowImpact1.play();

                this.game.assetHandler.populateEffectsArray(
                    this.game.assetHandler.blueExplosion,
                    {x: projectile.enemy.position.x, y: projectile.enemy.position.y}, 
                    256,
                    256,
                    projectile.enemy.scale / 2,
                    projectile.enemy.direction
                );

                if(projectile.enemy.health <= 0){
                    const enemyIndex = this.game.renderHandler.enemies.findIndex((enemy) => projectile.enemy === enemy);
                    
                    if (enemyIndex > -1 && projectile.enemy.state !== ENEMY_STATE.DYING){
                        this.game.coins += this.game.renderHandler.enemies[enemyIndex].coins;
                        this.game.exp += this.game.renderHandler.enemies[enemyIndex].exp;

                        this.game.assetHandler.populateEffectsArray(
                            this.game.assetHandler.blood,
                            {x: projectile.enemy.position.x, y: projectile.enemy.position.y}, 
                            110,
                            110,
                            projectile.enemy.scale,
                            projectile.enemy.direction
                        );

                        this.game.assetHandler.populateGameTextArray(
                            '+' + projectile.enemy.coins, 
                            '255, 215, 0, ', //GOLD COLOUR TEXT
                            '10', 
                            {x: projectile.enemy.position.x, y: projectile.enemy.position.y}, 
                            25, 
                            'left'
                        ); 

                        this.game.assetHandler.populateGameTextArray( 
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

    renderEffects(ctx, event){
        for (let i = this.effects.length - 1; i >= 0; i-- ){
            const effect = this.effects[i];        
            if (effect.state === EFFECT_STATES.ANIMATING)
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
        this.game.input.drawLevelDebug(ctx);
        this.game.input.drawTowerDebug(ctx);
        this.game.input.drawEnemyDebug(ctx);
        this.game.input.drawPerformanceDebug(ctx);
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
    
    drawScreenText(ctx, text){
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        this.drawGUIText(ctx, text, GAME_WIDTH / 2, GAME_HEIGHT / 2, 100, 'center'); 
    }
}

