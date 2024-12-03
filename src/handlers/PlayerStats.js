import { assets } from "../utilities/assets.js";
import { drawText } from "../utilities/textRender.js";

export class PlayerStats{
    constructor(){
        this.stats = {
            lives: 2, 
            coins: 100,
            experience: 0,
            waves: 1,
            timer: 0,
            mana: 0
        };
        this.backgroundImage = assets.get('hudBackgroundImage');
    }
    
    draw(ctx){
        ctx.drawImage(this.backgroundImage, 0, 0);
        this.drawStats(ctx);
    }
    
    update(event){

    }

    newWaveCheck(enemies){
        if (enemies.length === 0 && isWaveActive) {
            this.stats.waves++;
            isWaveActive = false;
        }
    }

    removeLives = () =>{
        this.stats.lives -= 1;
        // if(this.stats.lives <= 0)
        //     this.switchScreens(GAME_STATES.GAMEOVER);
    }

    canAfford(tower){
        return tower.cost >= this.stats.coins;
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