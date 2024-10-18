import { Tower } from "./Tower.js";
import { HALF_TILE_SIZE, ENEMY_SIZE, TOWER_SIZE } from "../index.js";
import { GAME_STATES } from "./Game.js";

const PAUSE = 'PAUSE';
const DEBUG = 'DEBUG';
const MUSIC = 'MUSIC';

export class Input {
    constructor(game, level, towerHandler, enemyHandler){
        this.game = game;
        this.level = level;
        this.towerHandler = towerHandler;
        this.enemyHandler = enemyHandler;
        
        this.mouse = {
            x: undefined,
            y: undefined
        };

        this.keys = [];
        this.activeTile = undefined;

        const cursor = document.getElementById("canvas");
        
        window.addEventListener('click', e => {
            if (this.activeTile && !this.activeTile.isOccupied && this.game.coins - 25 >= 0) {
                this.towerHandler.towers.push(
                    new Tower({
                        game: this.game,
                        sprite: { 
                            imageLeft: "",
                            imageRight: document.getElementById('sapphire1'), 
                            x: 0, 
                            y: 0, //Animation Row
                            width: TOWER_SIZE, 
                            height: TOWER_SIZE 
                        },
                        position: { 
                            x: this.activeTile.position.x - HALF_TILE_SIZE,
                            y: this.activeTile.position.y - HALF_TILE_SIZE  
                        },
                        scale: 1,
                    })
                );
                
                this.activeTile.isOccupied = true;
                this.towerHandler.towers.sort((a, b) => {
                    return a.position.y - b.position.y;
                })
                this.game.coins -= 25;
            }
        })
        
        window.addEventListener('mousemove', e => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
            this.activeTile = null;

            this.level.placementTiles.forEach(tile => {
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

            this.enemyHandler.enemies.forEach(enemy => {
                const enemyX = enemy.center.x - enemy.thirdWidth;
                const enemyWidth = enemy.thirdWidth * 2;
                const enemyY = enemy.center.y - enemy.scale * 30;
                const enemyHeight = ENEMY_SIZE * enemy.scale;
                if (
                    this.mouse.x > enemyX &&
                    this.mouse.x < enemyX + enemyWidth &&
                    this.mouse.y > enemyY &&
                    this.mouse.y < enemyY + enemyHeight
                ) {
                    cursor.style = "cursor: url(./images/cursors/text.cur), auto;";
                    console.log("SELECTED")
                } else {
                    cursor.style = "cursor: url(./images/cursors/normal.cur), auto;";
                }
            })
        })
        
        window.addEventListener('keydown', e =>{
            if (e.key.toLowerCase() === 'p')
                this.keyPressed(PAUSE);
            else if (e.key.toLowerCase() === 'o')
                this.keyPressed(DEBUG);
            else if (e.key.toLowerCase() === 'm')
                this.keyPressed(MUSIC);
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
            this.game.debug = !this.game.debug;

        if(key === MUSIC)
            if(this.game.music.paused) 
                this.game.music.play();
            else
                this.game.music.pause();
    }

    keyReleased(key){
        const index = this.keys.indexOf(key);
        if (index === -1) return;
        this.keys.splice(index, 1);
    }  
}