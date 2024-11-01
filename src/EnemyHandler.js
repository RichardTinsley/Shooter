import { ENEMY_STATES, ENEMY_COLOURS, ENEMY_SIZE, TILE_SIZE, TILE_SIZE_HALF } from "./Constants.js";
import { randomPositiveFloat } from "./Math.js";
import { Enemy } from "./Enemy.js";
import { assets } from "./AssetHandler.js";

export class EnemyHandler {
    constructor(game){
        this.game = game;
        this.enemies = [];

        this.enemySpeedMinimum = 0.4; 
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
            const enemy = this.generateEnemy();
        
            this.populateEnemiesArray(enemy);
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
            
            this.sendEnemyToBeginning(enemy);
        }
        if (this.enemies.length === 0 && this.allEnemiesActive === true) {
            this.game.waves++;
            this.maxEnemies++;
            this.enemyCounter = 0;
            this.allEnemiesActive = false;
        }
    }

    sendEnemyToBeginning(enemy){
        if(enemy.position.x > canvas.width){
            this.game.hearts -= 1;
            enemy.position = { 
                x: enemy.waypoints[0].x, 
                y: enemy.waypoints[0].y 
            };
            enemy.waypointIndex = 0;
        }
    }

    populateEnemiesArray(enemy){
        const waypoints = this.generateEnemyWaypoints(this.game.tileHandler.waypoints);

        this.enemies.push(new Enemy({
            sprite: { 
                image: enemy, 
                frame: 0, 
                row: 0,  
                width: ENEMY_SIZE, 
                height: ENEMY_SIZE 
            },
            position: {
                x: waypoints[0].x,
                y: waypoints[0].y
            },
            maxHealth: randomPositiveFloat(100),
            scale: 1.5,
            speed: randomPositiveFloat(this.enemySpeedRange) + this.enemySpeedMinimum,
            waypoints: waypoints,
        }));
    }

    generateEnemy(){
        let index;
        if(this.game.waves < 119)
            index = Math.floor(Math.random() * (this.game.waves / 10));
        else 
            index = Math.floor(Math.random() * 12);
        return assets.get(ENEMY_COLOURS[index]);
    }
    
    generateEnemyWaypoints(wayspoints){
        return wayspoints.map(waypoint => {
            return { 
                    x: (waypoint.x - TILE_SIZE) + Math.round(Math.random() * (TILE_SIZE + TILE_SIZE_HALF + 10)),
                    y: (waypoint.y - TILE_SIZE) + Math.round(Math.random() * (TILE_SIZE + TILE_SIZE_HALF + 10))
                }
            }
        );
    }
}