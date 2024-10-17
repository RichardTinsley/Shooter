import { World } from "./World.js";
import { Input } from "./Input.js";
import { EnemyHandler } from "./EnemyHandler.js";
import { TowerHandler } from "./TowerHandler.js";
import { GameTextHandler } from "./GameTextHandler.js";
import { PlacementTileHandler } from "./PlacementTileHandler.js";

import { GAME_WIDTH, GAME_HEIGHT } from "../index.js";

export class Game {
    constructor(){
        this.world = new World(this);
        this.gameTextHandler = new GameTextHandler();
        this.placementTileHandler = new PlacementTileHandler();
        this.enemyHandler = new EnemyHandler(this);
        this.towerHandler = new TowerHandler(this, this.enemyHandler, this.gameTextHandler);
        this.input = new Input(this, this.world, this.towerHandler, this.enemyHandler, this.placementTileHandler);
        
        this.gameStates = {
            PLAYING: 'PLAYING',
            PAUSED: 'PAUSED',
            MENU: 'MENU',
            LOADING: 'LOADING',
            GAMEOVER: 'GAMEOVER'
        };
        this.currentGameState = this.gameStates.PLAYING;

        this.debug = false;
        this.music = new Audio('./sounds/music.mp3');

        this.hearts = 1;
        this.coins = 100;
        this.exp = 0;
        this.waves = 1;
        this.timer = 0;
        
        this.eventUpdate = false;
        this.eventTimer = 0;
        this.eventInterval = 60;

        this.animationID;
    }

    gameHandler(ctx, deltaTime, timeStamp, animate){
        switch(this.currentGameState){
            case 'PLAYING': 
                this.animationID = requestAnimationFrame(animate);
                this.drawPlayingScreen(ctx, deltaTime, timeStamp);
                if(this.music.paused) this.music.pause();
                if(this.hearts <= 0) this.currentGameState = 'GAMEOVER';
                break
            case 'PAUSED': 
                cancelAnimationFrame(this.animationID);
                this.animationID = requestAnimationFrame(animate);
                if(!this.music.paused) this.music.pause();
                break
            case 'MENU': 
                break
            case 'LOADING': 
                break
            case 'GAMEOVER':
                this.drawGameOverScreen(ctx);
                cancelAnimationFrame(this.animationID);
                if(!this.music.paused) this.music.pause();
                break
        }
    }

    renderGUI(ctx, deltaTime){
        this.drawText(ctx, this.hearts, 65, 52, 20,'left');
        this.drawText(ctx, this.coins, 225, 52, 20,'left');
        this.drawText(ctx, this.exp, 515, 52, 20,'left');
        this.drawText(ctx, this.waves, 805, 52, 20,'left');
        this.drawText(ctx, this.timer, 1155, 52, 20,'left');

        if (this.eventTimer < this.eventInterval){
            this.eventTimer += deltaTime;
            this.eventUpdate = false;
        } else {
            // this.eventTimer = this.eventInterval % this.eventTimer;
            this.eventTimer = 0;
            this.eventUpdate = true; 
        }
    }

    drawPlayingScreen(ctx, deltaTime, timeStamp){
        this.world.drawBackground(ctx);
        this.placementTileHandler.renderTiles(ctx, this.input);
        this.enemyHandler.renderEnemies(ctx, deltaTime, timeStamp);
        this.towerHandler.renderTowers(ctx, deltaTime);
        this.gameTextHandler.renderGameTexts(ctx);
        this.renderGUI(ctx, deltaTime);
    }

    drawGameOverScreen(ctx){
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        this.drawText(ctx, "GAME OVER", GAME_WIDTH / 2, GAME_HEIGHT / 2, 100, 'center'); 
    }

    drawText(ctx, text, x, y, textSize, align){
        ctx.fillStyle = 'white';
        ctx.font = 'bold ' + textSize + 'px canterbury';
        ctx.textAlign = align;
        ctx.textBaseline = 'middle';
        ctx.fillText(text, x + 5, y - 3);
    }
}