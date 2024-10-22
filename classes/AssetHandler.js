import { PlacementTile } from "./PlacementTile.js";
import { Projectile } from "./Projectile.js";
import { Enemy } from "./Enemy.js";
import { Tower } from "./Tower.js";
import { Effect } from "./Effect.js";
import { GameText } from "./GameText.js";
import { ENEMY_STATE } from "./RenderHandler.js";
import { ENEMY_SIZE, TILE_SIZE, HALF_TILE_SIZE, TOWER_SIZE } from "../index.js";

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

const enemiesURL = './images/enemies/';
const towersURL = './images/towers/';
const effectsURL = './images/effects/'; 
const projectilesURL = './images/projectiles/';

export class AssetHandler {
    constructor(game) {
        this.game = game;

        // LEVEL
        this.level1 = new Image();
        this.level1.src = './images/LEVEL1.png';
        
        // AUDIO
        this.music = new Audio('./audio/music.mp3');
        this.music.volume = 0.1;
        this.music.pause();
        this.bowImpact1 = new Audio('./audio/bowImpact1.ogg');

        // ENEMIES
        this.enemyImages = this.enemyImageImporter();

        // TOWERS
        this.sapphireTower = new Image();
        this.sapphireTower.src = `${towersURL}sapphire1.png`;

        // PROJECTILES
        this.fireball = new Image();
        this.fireball.src = `${projectilesURL}fireball_68x9.png`;
        this.blueFireballImage = new Image();
        this.blueFireballImage.src = `${projectilesURL}bluefireball_50x25.png`;

        this.blueFireball = {
            image: this.blueFireballImage,
            width: 50,
            height: 25
        }

        // EFFECTS //
        this.bloodImage = new Image();
        this.bloodImage.src = `${effectsURL}blood_110x110.png`;
        this.blood = {
            image: this.bloodImage,
            width: 110,
            height: 110,
            scale: 1
        };

        this.blueExplosionImage = new Image();
        this.blueExplosionImage.src = `${effectsURL}blueExplosion_256x256.png`;
        this.blueExplosion = {
            image: this.blueExplosionImage,
            width: 256,
            height: 256,
            scale: null
        };

        // GAMETEXTS
        this.greenGameText = {
            color: '50, 205, 50, ',
            alpha: '10', 
            textSize: 25, 
            align: 'left'
        };

        this.goldGameText = {
            color:  '255, 215, 0, ',
            alpha: '10',
            textSize: 25,
            align: 'left'
        };
    }

    populateTilesArray(){
        const placementTilesData2D = [];
        const placementTiles = [];
        for (let i = 0; i < placementTilesData.length; i+= 40)
            placementTilesData2D.push(placementTilesData.slice(i, i + 40));

        placementTilesData2D.forEach((row, y) => {
            row.forEach((symbol, x) => {
                if (symbol != 0) 
                    placementTiles.push(
                        new PlacementTile({ 
                            position: { 
                                x: x * TILE_SIZE, 
                                y: y * TILE_SIZE 
                            } 
                        }));
                    })
                })
        return placementTiles;
    }

    populateTowersArray(activeTile){
        this.game.renderHandler.towers.push(
            new Tower({
                sprite: { 
                    image: this.sapphireTower, 
                    x: 0, 
                    y: 0,
                    width: TOWER_SIZE, 
                    height: TOWER_SIZE 
                },
                position: { 
                    x: activeTile.position.x - HALF_TILE_SIZE,
                    y: activeTile.position.y - HALF_TILE_SIZE  
                },
                scale: 1,
                projectile: this.blueFireball
            })
        );
    }

    populateEnemiesArray(enemy, randomWaypoints){
        this.game.renderHandler.enemies.push(  
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
        this.game.renderHandler.enemyCounter++;
    }

    populateProjectilesArray(projectile, projectiles){
        console.log(projectile);
        projectiles.push(new Projectile(projectile));
    }

    populateEffectsArray(effect, effects){
        effects.push(new Effect(effect));
    }

    populateGameTextArray(gameText, gameTexts){
        gameTexts.push(new GameText(gameText));
    }

    generateRandomEnemy(){
        let enemyIndexer;
        if(this.game.waves < 119)
            enemyIndexer = Math.floor(Math.random() * (this.game.waves / 10));
        else 
        enemyIndexer = Math.floor(Math.random() * 12);
    return this.enemyImages[enemyIndexer];
}

    generateRandomEnemyWaypoints(){
        return waypoints.map(waypoint => {
            return { 
                    x: (waypoint.x - 40) + Math.round(Math.random() * 70),
                    y: (waypoint.y - 40) + Math.round(Math.random() * 70)
                }
            });
    }

    enemyImageImporter(){
        let array = [];
        for(let i = 0; i < enemyColours.length; i++){
            array[i] = {
                colour: enemyColours[i], 
                image: new Image(), 
            }
            array[i].image.src = `${enemiesURL}${enemyColours[i]}.png`;
        }
        return array;
    }
    
    prioritiseEnemiesInTowerRange(tower){
        return this.game.renderHandler.enemies.filter(enemy => {
            if(enemy.state === ENEMY_STATE.WALKING || enemy.state === ENEMY_STATE.RUNNING){
                const xDifference = enemy.center.x - tower.center.x;
                const yDifference = enemy.center.y - tower.center.y;
                const distance = Math.hypot(xDifference, yDifference);
                return distance < enemy.width / 10 + tower.range;
            }
        }).sort((a, b) => {
            if (a.waypointIndex > b.waypointIndex) return -1;
            if (a.waypointIndex < b.waypointIndex) return 1;
            if (a.priorityDistance < b.priorityDistance) return -1;
            if (a.priorityDistance > b.priorityDistance) return 1;
            return 0;
        });
    }
}

const placementTilesData = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 353, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 353, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 353, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 353, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 353, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 353, 0, 0, 0, 0, 0, 353, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 353, 0, 0, 0, 0, 0, 353, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 353, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]

const waypoints = [
    {
        "x":-100,
        "y":685
    }, 
    {
        "x":205,
        "y":685
    }, 
    {
        "x":205,
        "y":175
    }, 
    {
        "x":815,
        "y":175
    }, 
    {
        "x":815,
        "y":435
    }, 
    {
        "x":555,
        "y":435
    }, 
    {
        "x":555,
        "y":685
    }, 
    {
        "x":1135,
        "y":685
    }, 
    {
        "x":1135,
        "y":175
    }, 
    {
        "x":1350,
        "y":175
    }
]