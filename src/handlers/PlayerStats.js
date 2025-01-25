import * as GAME from "../constants/game.js"
import { assets } from "../utilities/assets.js";
import { drawText } from "../utilities/textRender.js";
import { Time } from "./Time.js";

let lives; 
let coins;
let experience;
let mana;
let waves;
let timer;

export class PlayerStats{
    constructor(switchScenes){
        this.switchScenes = switchScenes;
        this.backgroundImage = assets.get('hudBackgroundImage');
        
        lives = 2;
        coins = 100;
        experience = 0;
        mana = 0;
        waves = 1;
        timer = 0;
    }
    
    draw(ctx){
        ctx.drawImage(this.backgroundImage, 0, 0);
        this.drawPlayerStats(ctx);
    }
    
    update(event){
        timer = Time.displayTimer();
        if(lives <= 0)
            this.switchScenes(GAME.STATES.GAMEOVER);
    }

    static setLives(){
        lives -= 1;
    }

    static getCoins(){
        return coins;
    }

    static buy(cost){
        coins -= cost;
    }

    static setCoins(){//ENEMY TYPE in parameter affect gold.  BOSS or GoldEnemy etc
        const newCoins = Math.floor(Math.random() * waves + 1);
        coins += newCoins;
        return '$' + newCoins
    }

    getExperience(){
        return experience;
    }

    static setExperience(){//ENEMY TYPE in parameter affect experience.  BOSS or EmeraldEnemy etc
        if (Math.random() * 10 > 1)
            return 0

        const newExperience = Math.floor(Math.random() * waves + 1);
        experience += newExperience;
        return newExperience + 'exp'
    }
    
    static getWave(){
        return waves;
    }

    static setWave(){
        waves++;
    }

    waveText(){
        if(waves === 1)
        {}
    }

    drawPlayerStats(ctx){
        drawText(ctx, "white", lives, 70, 39, 20, 'left', 'top');
        drawText(ctx, "white", coins, 230, 39, 20, 'left', 'top');
        drawText(ctx, "white", experience, 520, 39, 20, 'left', 'top');
        drawText(ctx, "white", waves, 810, 39, 20, 'left', 'top');
        drawText(ctx, "white", timer, 1160, 39, 20, 'left', 'top');
    }
}