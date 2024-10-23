import { ENEMY_STATES, ENEMY_COLOURS, ENEMY_SIZE, ENEMIES_URL, TILE_SIZE } from "./Constants.js";
import { Enemy } from "./Enemy.js";

export class EnemyHandler {
    constructor(game){
        this.game = game;
        this.enemyImages = this.populateEnemyImageArray();
        this.enemies = [];

        this.enemySpeedMinimum = 0.4; 
        this.enemyRunningSpeed = 0.8;
        this.enemySpeedRange = 1.0;

        this.allEnemiesActive = false;
        this.maxEnemies = 10;
        this.enemyCounter = 0;   
        this.enemySpawnTimer = 0;
    }

    renderEnemies(ctx, event){
        if(event)
            this.enemySpawnTimer++;

        if (this.enemySpawnTimer % Math.floor(Math.random() * 300) === 0 && this.allEnemiesActive === false){
            this.populateEnemiesArray(this.selectRandomEnemyImage());
            this.enemyCounter++;
        }

        if(this.enemyCounter === this.maxEnemies)
            this.allEnemiesActive = true;

        this.enemies.sort((b, a) => a.position.y - b.position.y);        
        
        for (let i = this.enemies.length - 1; i >= 0; i--){
            const enemy = this.enemies[i];

            if(enemy.state === ENEMY_STATES.DEAD) 
                this.enemies.splice(i, 1);
            else
                enemy.renderEnemy(ctx, event);
            
            this.returnEnemyToBeginningAfterReachingLastWaypoint(enemy);
        }
        if (this.enemies.length === 0 && this.allEnemiesActive === true)
            this.newEnemyWave();
    }

    returnEnemyToBeginningAfterReachingLastWaypoint(enemy){
        if(enemy.position.x > canvas.width){
            this.game.hearts -= 1;
            enemy.position = { 
                x: enemy.waypoints[0].x, 
                y: enemy.waypoints[0].y 
            };
            enemy.waypointIndex = 0;
        }
    }

    newEnemyWave(){
        this.game.waves++;
        this.maxEnemies++;
        this.enemyCounter = 0;
        this.allEnemiesActive = false;
    }
    
    populateEnemiesArray(enemyImage){
        const enemySpeed = Math.random() * this.enemySpeedRange + this.enemySpeedMinimum;
        const enemyState = enemySpeed < this.enemyRunningSpeed ? ENEMY_STATES.WALKING : ENEMY_STATES.RUNNING;
        const enemyScale = Math.random() + 1;
        const waypoints = this.generateEnemyWaypoints(this.game.tileHandler.waypoints);

        this.enemies.push(new Enemy({
            sprite: { 
                image: enemyImage, 
                frame: 0, 
                row: enemyState,  
                width: ENEMY_SIZE, 
                height: ENEMY_SIZE 
            },
            position: {
                x: waypoints[0].x,
                y: waypoints[0].y
            },
            scale: Math.round(enemyScale * 100) / 100,
            speed: Math.round(enemySpeed * 100) / 100,
            state: enemyState,
            waypoints: waypoints,
        }));
    }

    selectRandomEnemyImage(){
        let index;
        if(this.game.waves < 119)
            index = Math.floor(Math.random() * (this.game.waves / 10));
        else 
        index = Math.floor(Math.random() * 12);
        return this.enemyImages[index];
    }
    
    populateEnemyImageArray(){
        let array = [];
        for(let i = 0; i < ENEMY_COLOURS.length; i++){
            array[i] = new Image(), 
            array[i].src = `${ENEMIES_URL}${ENEMY_COLOURS[i]}.png`;
        }
        return array;
    }

    generateEnemyWaypoints(wayspoints){
        return wayspoints.map(waypoint => {
            return { 
                    x: (waypoint.x - TILE_SIZE) + Math.round(Math.random() * TILE_SIZE),
                    y: (waypoint.y - TILE_SIZE) + Math.round(Math.random() * TILE_SIZE)
                }
            }
        );
    }
}