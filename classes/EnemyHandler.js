import { waypoints } from "./World.js";
import { Enemy } from "./Enemy.js";
import { ENEMY_SIZE } from "../index.js";

export class EnemyHandler{
    constructor(game){
        this.game = game;   
        this.allEnemiesActive = false;
        this.enemyCount = 100;    
        this.enemies = this.spawnEnemies(this.enemyCount);
    }

    beginWave(timeStamp){
        if (Math.floor(timeStamp) % Math.floor(Math.random() * 250) === 0 && this.allEnemiesActive === false){
            const enemy = this.enemies.find((enemy) => enemy.activeStatus === false);
            if(enemy)
                enemy.activeStatus = true;
            else
                this.allEnemiesActive = true; 
        }
    }

    renderEnemies(ctx, deltaTime){
        this.enemies.sort((a, b) => b.position.y - a.position.y);
        for (let i = this.enemies.length - 1; i >= 0; i--){
            const enemy = this.enemies[i];
            if(enemy.activeStatus === true){
                enemy.update(deltaTime);
                enemy.draw(ctx);
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

    newWave(){
        if (this.enemies.length === 0){
            this.game.waves++;
            this.allEnemiesActive = false;
            this.enemies = this.spawnEnemies(this.enemyCount += 1);
        }
    }

    spawnEnemies(enemyCount) {
        const enemies = [];
        for (let i = 1; i < enemyCount + 1; i++) {
            const enemyColour = this.pickRandomEnemy();
            const randomWaypoints = [];
            waypoints.forEach((waypoint) => {
                randomWaypoints.push({ 
                    x: (waypoint.x - 40) + Math.round(Math.random() * 70),
                    y: (waypoint.y - 40) + Math.round(Math.random() * 70)
                });
            })
            enemies.push(  
                new Enemy({
                    game: this.game,
                    sprite: { 
                        imageLeft: document.getElementById(enemyColour.left),
                        imageRight: document.getElementById(enemyColour.right), 
                        x: 0, 
                        y: 2, //Running animation row 
                        width: ENEMY_SIZE, 
                        height: ENEMY_SIZE 
                    },
                    position: { 
                        x: waypoints[0].x,  
                        y: waypoints[0].y  
                    },
                    scale: Math.random() + 1,
                    waypoints: randomWaypoints
                })
            )
        }
        return enemies;
    }

    pickRandomEnemy(){
        const chance = Math.random() * 100;
        let enemyColour;
        if (chance > 80) 
            return enemyColour = { left: "topazLeft", right: "topazRight" };
        else if (chance > 65) 
            return enemyColour = { left: "citrineLeft", right: "citrineRight" };
        else if (chance > 55)
            return enemyColour = { left: "rubyLeft", right: "rubyRight" };
        else if (chance > 45) 
            return enemyColour = { left: "sapphireLeft", right: "sapphireRight" };
        else if (chance > 35)
            return enemyColour = { left: "emeraldLeft", right: "emeraldRight" };
        else if (chance > 25)
            return enemyColour = { left: "amethystLeft", right: "amethystRight" };
        else if (chance > 17) 
            return enemyColour = { left: "silverLeft", right: "silverRight" };
        else if (chance > 11) 
            return enemyColour = { left: "opalLeft", right: "opalRight" };
        else if (chance > 7)
            return enemyColour = { left: "goldLeft", right: "goldRight" };
        else if (chance > 4) 
            return enemyColour = { left: "diamondLeft", right: "diamondRight" };
        else if (chance > 1)
            return enemyColour = { left: "obsidianLeft", right: "obsidianRight" };
        else (chance > 0)
            return enemyColour = { left: "uraniumLeft", right: "uraniumRight" };
    }
}                

