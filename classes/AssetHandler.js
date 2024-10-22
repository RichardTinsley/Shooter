import { PlacementTile } from "./PlacementTile.js";
import { Projectile } from "./Projectile.js";
import { Level1 } from "./Level.js";
import { Enemy } from "./Enemy.js";
import { Tower } from "./Tower.js";
import { Effect } from "./Effect.js";
import { GameText } from "./GameText.js";
import { TILE_SIZE, COLUMNS } from "../index.js";

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
        this.levelOneImage = new Image();
        this.levelOneImage.src = './images/levels/levelOne.png';
        this.levelOne = new Level1();
        
        // AUDIO
        this.music = new Audio('./audio/music.mp3');
        this.music.volume = 0.1;
        this.music.pause();
        this.bowImpact1 = new Audio('./audio/bowImpact1.ogg');

        // ENEMIES
        this.enemyImages = this.enemyImageImporter();
        
        // PROJECTILES
        this.fireball = new Image();
        this.fireball.src = `${projectilesURL}fireball_68x9.png`;

        this.blueFireball = {
            image: new Image(),
            width: 50,
            height: 25
        }
        this.blueFireball.image.src = `${projectilesURL}bluefireball_50x25.png`;

        // TOWERS
        this.sapphireTower = {
            image: new Image(),
            projectile: this.blueFireball
        }
        this.sapphireTower.image.src = `${towersURL}sapphire1.png`;
        
        // EFFECTS //
        this.blood = {
            image: new Image(),
            width: 110,
            height: 110,
            scale: 1
        };
        this.blood.image.src = `${effectsURL}blood_110x110.png`;

        this.blueExplosion = {
            image: new Image(),
            width: 256,
            height: 256,
            scale: null
        };
        this.blueExplosion.image.src = `${effectsURL}blueExplosion_256x256.png`;

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
        for (let i = 0; i < this.levelOne.placementTilesData.length; i+= COLUMNS)
            placementTilesData2D.push(this.levelOne.placementTilesData.slice(i, i + COLUMNS));

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

    populateTowersArray(tower, towers){
        towers.push(new Tower(tower));
    }

    populateEnemiesArray(enemy, enemies){
        enemies.push(new Enemy(enemy));
    }

    populateProjectilesArray(projectile, projectiles){
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
}