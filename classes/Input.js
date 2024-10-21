import { TILE_SIZE } from "../index.js";
import { GAME_STATES } from "./Game.js";
import { ENEMY_STATE } from "./RenderHandler.js";

const PAUSE = 'p';
const DEBUG = 'o';
const MUSIC = 'm';
const RESTART = 'r';

export class Input {
    constructor(game){
        this.game = game;
        this.mouse = {
            x: undefined,
            y: undefined
        };

        this.keys = [];
        this.activeTile = undefined;
        this.activeEnemy = undefined;

        const cursor = document.getElementById("canvas");

        window.addEventListener('click', e => {
            if (this.activeTile && !this.activeTile.isOccupied && this.game.coins - 25 >= 0) {
                this.game.assetHandler.populateTowersArray(this.activeTile);
            
                this.activeTile.isOccupied = true;
                this.game.renderHandler.towers.sort((a, b) => {
                    return a.position.y - b.position.y;
                })
                this.game.coins -= 25;
            }
            
            if(this.activeEnemy){
                this.activeEnemy.isSelected = true;
                this.game.renderHandler.enemies.forEach(enemy => {
                    if(enemy != this.activeEnemy){
                        enemy.isSelected = false;
                    }
                })
            }
        })
        
        window.addEventListener('mousemove', e => {
            this.mouse.x = e.offsetX;
            this.mouse.y = e.offsetY;
            this.activeTile = null;
            this.activeEnemy = null;

            this.game.renderHandler.enemies.forEach(enemy => {
                if (
                    this.mouse.x > enemy.position.x &&
                    this.mouse.x < enemy.position.x + TILE_SIZE &&
                    this.mouse.y > enemy.position.y - (TILE_SIZE / 2) &&
                    this.mouse.y < enemy.position.y + TILE_SIZE &&
                    enemy.state !== ENEMY_STATE.DYING
                ) {
                    this.activeEnemy = enemy;
                }
                else
                    cursor.style = "cursor: url(./images/cursors/normal.cur), auto;";
            })

            if(this.activeEnemy)
                cursor.style = "cursor: url(./images/cursors/text.cur), auto;";

            this.game.renderHandler.placementTiles.forEach(tile => {
                if (
                    this.mouse.x > tile.position.x &&
                    this.mouse.x < tile.position.x + tile.size &&
                    this.mouse.y > tile.position.y &&
                    this.mouse.y < tile.position.y + tile.size
                ) {
                    this.activeTile = tile;
                    tile.mouseOver = true;
                } else {
                    tile.mouseOver = false;
                }
            });
        })
        
        window.addEventListener('keydown', e =>{
            if (e.key.toLowerCase() === PAUSE)
                this.keyPressed(PAUSE);
            else if (e.key.toLowerCase() === DEBUG)
                this.keyPressed(DEBUG);
            else if (e.key.toLowerCase() === MUSIC)
                this.keyPressed(MUSIC);
            else if (e.key.toLowerCase() === RESTART)
                this.keyPressed(RESTART);
        });
    }
    
    get lastKey(){ return this.keys[0]; }

    keyPressed(key){
        if (this.keys.indexOf(key) === -1)
            this.keys.unshift(key);
        
        if(key === PAUSE)
            if(this.game.currentGameState === GAME_STATES.PLAYING)
                this.game.currentGameState = GAME_STATES.PAUSED;
            else 
                this.game.currentGameState = GAME_STATES.PLAYING;

        if(key === DEBUG)
            if(this.game.currentGameState === GAME_STATES.PLAYING)
                this.game.currentGameState = GAME_STATES.DEBUG;
            else 
                this.game.currentGameState = GAME_STATES.PLAYING;

        if(key === MUSIC)
            if(this.game.audioHandler.music.paused) 
                this.game.audioHandler.music.play();
            else
                this.game.audioHandler.music.pause();

        if(key === RESTART)
            this.game.currentGameState = GAME_STATES.RESTART;
    }

    keyReleased(key){
        const index = this.keys.indexOf(key);
        if (index === -1) 
            return;
        this.keys.splice(index, 1);
    }  
}