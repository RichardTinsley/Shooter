import * as GAME from "../constants/game.js"
import { assets } from "../utilities/assets.js";
import { drawText } from "../utilities/textRender.js";
import { Time } from "./Time.js";

export class PlayerStats{
    constructor(switchScreens){
        this.switchScreens = switchScreens;
        this.backgroundImage = assets.get('hudBackgroundImage');

        this.lives = 2; 
        this.coins = 100;
        this.experience = 0;
        this.mana = 0;
        this.waves = 1;
        this.timer = 0;
    }
    
    draw(ctx){
        ctx.drawImage(this.backgroundImage, 0, 0);
        this.drawPlayerStats(ctx);
    }
    
    update(event){
        this.timer = Time.displayTimer();
    }

    setLives = () =>{
        this.lives -= 1;
        if(this.lives <= 0)
            this.switchScreens(GAME.STATES.GAMEOVER);
    }

    getCoins(){
        return this.coins;
    }

    setCoins = () => {//ENEMY TYPE in parameter affect gold.  BOSS or GoldEnemy etc
        const coins = Math.floor(Math.random() * this.waves + 1);
        this.coins += coins;
        return '$' + coins
    }

    getExperience(){
        return this.experience;
    }

    setExperience = () => {//ENEMY TYPE in parameter affect experience.  BOSS or EmeraldEnemy etc
        if (Math.random() * 10 > 1)
            return 0

        const experience = Math.floor(Math.random() * this.waves + 1);
        this.experience += experience;
        return experience + 'exp'
    }
    
    getWave(){
        return this.waves;
    }

    setWave(){
        this.waves++;
    }

    waveText(){
        if(this.waves === 1)
        {}
    }

    drawPlayerStats(ctx){
        drawText(ctx, "white", this.lives, 70, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.coins, 230, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.experience, 520, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.waves, 810, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.timer, 1160, 39, 20, 'left', 'top');
    }
}