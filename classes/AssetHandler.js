import { PlacementTile } from "./PlacementTile.js";
import { Level1 } from "./Level.js";
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
        
        // MUSIC
        this.music = new Audio('./audio/battleMusic.mp3');
        this.music.currentTime = 9;
        this.music.volume = 0.1;
        this.music.pause();

        // SOUNDSFX
        this.bowImpact1 = new Audio('./audio/death (1).ogg');
        this.bowImpact2 = new Audio('./audio/death (2).ogg');
        this.bowImpact3 = new Audio('./audio/death (3).ogg');

        this.sounds = [this.bowImpact1, this.bowImpact2, this.bowImpact3];

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

    audioImporter(){
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