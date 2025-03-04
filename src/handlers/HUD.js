import * as GAME from "../constants/game.js";
import * as INTERFACE from "../constants/interface.js";
import { Time } from "./Time.js";
import { HUDItem } from "../components/HUDItem.js";

let lives; 
let coins;
let experience;
let mana;
let waves;
let timer;

export class HUD{
    constructor(switchScenes){
        this.switchScenes = switchScenes;
        
        lives = 2;
        coins = 1000;
        experience = 0;
        mana = 0;
        waves = 1;
        timer = 0;

        this.HUDLives = new HUDItem({
            text: lives,
            position: {
                x: 16,
                y: 16,
            },
            icon: "life",
        });

        this.HUDCoins = new HUDItem({
            text: coins,
            position: {
                x: 112,
                y: 16,
            },
            icon: "coin",
        });

        this.HUDExperience = new HUDItem({
            text: experience,
            position: {
                x: 240,
                y: 16,
            },
            icon: "experience",
        });
    }
    
    draw(ctx){
        this.drawHUDBackground(ctx);
        this.HUDLives.draw(ctx);
        this.HUDCoins.draw(ctx);
        this.HUDExperience.draw(ctx);
    }
    
    update(event){
        timer = Time.displayTimer();
        if(lives <= 0)
            this.switchScenes(GAME.STATES.GAMEOVER);
    }

    static setLives(){

        // HUDLives.text.setText(HUDLives.text.getText() -1);
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

    drawHUDBackground(ctx){
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.lineJoin = "bevel";
        ctx.fillStyle = INTERFACE.COLOURS.DARKSHADOW;
        ctx.fillRect(12, 12, 500, GAME.SIZES.TILE + 8);
        ctx.strokeStyle = INTERFACE.COLOURS.WHITE;
        ctx.strokeRect(12, 12, 500, GAME.SIZES.TILE + 8);
        ctx.closePath();
    }
}