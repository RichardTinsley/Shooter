import { Time } from "./Time.js";
import { assets } from "../utilities/assets.js";
import { drawText } from "../utilities/textRender.js";

export class PlayerStats{
    constructor(){
        this.backgroundImage = assets.get('hudBackgroundImage');
        this.Timer = new Time();

        this.stats = {
            lives: 2, 
            coins: 100,
            experience: 0,
            waves: 1,
            timer: 0,
            mana: 0
        };
    }
    
    draw(ctx){
        ctx.drawImage(this.backgroundImage, 0, 0);
        this.drawStats(ctx);
    }
    
    update(event){
        // if(!event)
        //     return
        this.stats.timer = this.Timer.timerUpdate();
    }

    removeLives = () =>{
        this.stats.lives -= 1;
        // if(this.stats.lives <= 0)
        //     this.switchScreens(GAME_STATES.GAMEOVER);
    }

    getCoins(){
        return this.stats.coins;
    }

    addCoins = () => {//ENEMY TYPE in parameter affect gold.  BOSS or GoldEnemy etc
        const coins = Math.floor(Math.random() * this.stats.waves + 1);
        this.stats.coins += coins;
        return '$' + coins
    }

    addExperience = () => {//ENEMY TYPE in parameter affect experience.  BOSS or EmeraldEnemy etc
        if (Math.random() * 10 > 1)
            return 0

        const experience = Math.floor(Math.random() * this.stats.waves + 1);
        this.stats.experience += experience;
        return experience + 'exp'
    }

    setWaves(){
        this.stats.waves++;
    }

    getWaves(){
        return this.stats.waves;
    }

    waveText(){
        if(this.stats.waves === 1)
        {}
    }

    drawStats(ctx){
        drawText(ctx, "white", this.stats.lives, 70, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.stats.coins, 230, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.stats.experience, 520, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.stats.waves, 810, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.stats.timer, 1160, 39, 20, 'left', 'top');
    }
}