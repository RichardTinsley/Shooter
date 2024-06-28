import { waypoints } from "./World.js";
import { Enemy } from "./Enemy.js";
import { ENEMY_SIZE } from "../index.js";

export class Enemies{
    constructor(game){
        this.game = game;   
        this.allEnemiesActive = false;
        this.enemyCount = 2;    
        this.enemies = this.spawnEnemies(this.enemyCount);
    }

    spawnEnemies(enemyCount) {
        const enemies = [];
        for (let i = 1; i < enemyCount + 1; i++) {
            const randomWaypoints = [];
            waypoints.forEach((waypoint) => {
                randomWaypoints.push({ 
                    x: (waypoint.x - 25) + Math.round(Math.random() * 70),
                    y: (waypoint.y - 25) + Math.round(Math.random() * 70)
                });
            })
            enemies.push(  
                new Enemy({
                    game: this.game,
                    sprite: { 
                        imageLeft: "",
                        imageRight: document.getElementById('goldRight'), 
                        x: 0, 
                        y: 2, //Running animation row 
                        width: ENEMY_SIZE, 
                        height: ENEMY_SIZE 
                    },
                    position: { 
                        x: waypoints[0].x,  
                        y: waypoints[0].y  
                    },
                    scale: 1,
                    waypoints: randomWaypoints
                })
            )
        }
        return enemies;
    }

    triggerEnemies(animationID){
        if (animationID % Math.floor(Math.random() * 250) === 0 && this.enemies.length > 0 && this.allEnemiesActive === false){
            const enemy = this.enemies.find((enemy) => enemy.activeStatus === false);
            if(enemy)
                enemy.activeStatus = true;
            else
                this.allEnemiesActive = true;
        }
    }

    renderEnemies(ctx){
        this.enemies.sort((a, b) => b.position.y - a.position.y);
        for (let i = this.enemies.length - 1; i >= 0; i--){
            const enemy = this.enemies[i];
            if(enemy.activeStatus === true){
                enemy.draw(ctx);
                enemy.update();
                if(this.game.debug) 
                    enemy.drawDebug(ctx);
            }
            if (enemy.position.x > canvas.width){
                this.game.hearts -= 1;
                enemy.position.x = enemy.waypoints[0].x;
                enemy.position.y = enemy.waypoints[0].y;
                enemy.waypointIndex = 0;
            }
        }
    }

    startNewWave(){
        if (this.enemies.length === 0){
            this.game.waves++;
            this.allEnemiesActive = false;
            this.enemies = this.spawnEnemies(this.enemyCount += 1);
        }
    }
}                

