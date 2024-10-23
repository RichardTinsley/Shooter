import { Level1 } from "../TileHandler.js";




const effectsURL = './images/effects/'; 
const projectilesURL = './images/projectiles/';

export class AssetHandler {
    constructor(game) {
        this.game = game;

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
        
        
        // PROJECTILES
        this.fireball = new Image();
        this.fireball.src = `${projectilesURL}fireball_68x9.png`;

        this.blueFireball = {
            image: new Image(),
            width: 50,
            height: 25
        }
        this.blueFireball.image.src = `${projectilesURL}bluefireball_50x25.png`;


        
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


    }


    audioImporter(){
    }
}