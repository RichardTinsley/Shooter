import { waypoints } from "./Level.js";
import { Enemy } from "./Enemy.js";
import { ENEMY_SIZE } from "../index.js";

const enemiesURL = './images/enemies/'
export const ENEMY_STATE = {
    IDLE: 0,
    WALKING: 1,
    RUNNING: 2,
    ATTACK: 3,
    INJURED: 4,
    DYING: 5,
    DEAD: 6
}

const enemyColours = [
    "topaz",
    "ruby",
    "sapphire",
    "emerald",
    "amethyst",
    "citrine",
    "silver",
    "gold",
    "diamond",
    "obsidian",
    "opal",
    "uranium"
];

export class EnemyHandler{
    constructor(game){
        this.game = game; 
        this.allEnemiesActive = false;
        this.maxEnemies = 10;
        this.enemyCounter = 0;    
        this.enemySpawnTimer = 0;
        this.enemies = [];
        this.enemyTemplates = this.enemyTemplatesMaker();
    }

    renderEnemies(ctx, event){
        if(event)
            this.enemySpawnTimer++;
            
        if (this.enemySpawnTimer % Math.floor(Math.random() * 300) === 0 && this.enemyCounter < this.maxEnemies){
            const enemyColour = this.generateRandomEnemy();
            const randomWaypoints = this.generateRandomEnemyWaypoints();
            this.populateEnemiesArray(enemyColour, randomWaypoints);
            
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

    generateRandomEnemy(){
        let enemyIndexer;
        if(this.game.waves < 119)
            enemyIndexer = Math.floor(Math.random() * (this.game.waves / 10));
        else 
            enemyIndexer = Math.floor(Math.random() * 12);
        return this.enemyTemplates[enemyIndexer];
    }

    generateRandomEnemyWaypoints(){
        return waypoints.map(waypoint => {
            return { 
                x: (waypoint.x - 40) + Math.round(Math.random() * 70),
                y: (waypoint.y - 40) + Math.round(Math.random() * 70)
            }
        });
    }

    populateEnemiesArray(enemy, randomWaypoints){
        this.enemies.push(  
            new Enemy({
                sprite: { 
                    image: enemy.image, 
                    x: 0, 
                    y: 0,  
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
        );
        this.enemyCounter++;
    }

    enemyTemplatesMaker(){
        let array = [];
        for(let i = 0; i < enemyColours.length; i++){
            array[i] = {
                colour: enemyColours[i], 
                image: new Image(), 
            }
            array[i].image.src = `${enemiesURL}${enemyColours[i]}Right.png`;
        }
        return array;
    }
}                