export class BattleScreenHud{
    constructor(){
        this.hudElements = {
            lives: 2, //LIVES
            coins: 100,
            experience: 0,
            waves: 1,
            timer: 0,
            mana: 0
        };

        this.waveTexts = [];
        this.hudBackgroundImage = assets.get('hudBackgroundImage');
    }
    
    draw(ctx){
        ctx.drawImage(this.hudBackgroundImage, 0, 0);
        this.renderHudElements(ctx);
    }
    
    update(event){
        this.timerDisplay(event);
        this.playerLivesCheck();
    }

    canAfford(tower){
        return tower.cost >= this.hudElements.coins;
    }

    addCoins = () => {//ENEMY TYPE in parameter affect gold.  BOSS or GoldEnemy etc
        const coins = Math.floor(Math.random() * this.hudElements.waves + 1);
        this.hudElements.coins += coins;
        return '$' + coins
    }

    addExperience = () => {//ENEMY TYPE in parameter affect experience.  BOSS or EmeraldEnemy etc
        if (Math.random() * 10 > 1)
            return 0

        const experience = Math.floor(Math.random() * this.hudElements.waves + 1);
        this.hudElements.experience += experience;
        return experience + 'exp'
    }

    playerLivesCheck(){
        if(this.hudElements.lives <= 0)
            this.switchScreens(GAME_STATES.GAMEOVER);
    }

    waveText(){
        if(this.hudElements.waves === 1)
        {}
    }


    renderHudElements(ctx){
        drawText(ctx, "white", this.hudElements.hearts, 70, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.hudElements.coins, 230, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.hudElements.exp, 520, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.hudElements.waves, 810, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.hudElements.timer, 1160, 39, 20, 'left', 'top');
    }
}