import { Tower } from "./Tower.js";
import { TILE_SIZE, HALF_TILE_SIZE, ENEMY_SIZE, TOWER_SIZE, ROWS, COLUMNS } from "../index.js";
import { GAME_STATES } from "./Game.js";

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

        this.sapphireTower = new Image();
        this.sapphireTower.src = "./images/towers/sapphire1.png";

        window.addEventListener('click', e => {
            if (this.activeTile && !this.activeTile.isOccupied && this.game.coins - 25 >= 0) {
                this.game.towerHandler.towers.push(
                    new Tower({
                        game: this.game,
                        sprite: { 
                            imageLeft: "",
                            imageRight: this.sapphireTower, 
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
                this.game.towerHandler.towers.sort((a, b) => {
                    return a.position.y - b.position.y;
                })
                this.game.coins -= 25;
            }
            
            if(this.activeEnemy){
                this.activeEnemy.isSelected = true;
                this.game.enemyHandler.enemies.forEach(enemy => {
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

            this.game.enemyHandler.enemies.forEach(enemy => {
                if (
                    this.mouse.x > enemy.position.x &&
                    this.mouse.x < enemy.position.x + TILE_SIZE &&
                    this.mouse.y > enemy.position.y - (TILE_SIZE / 2) &&
                    this.mouse.y < enemy.position.y + TILE_SIZE 
                ) {
                    this.activeEnemy = enemy;
                }
                else
                    cursor.style = "cursor: url(./images/cursors/normal.cur), auto;";
            })

            if(this.activeEnemy)
                cursor.style = "cursor: url(./images/cursors/text.cur), auto;";

            this.game.level.placementTiles.forEach(tile => {
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

    drawLevelDebug(ctx){
        ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
        ctx.lineWidth = 1;
        for (let row = 0; row < ROWS; row++)
            for (let column = 0; column < COLUMNS; column++)
                ctx.strokeRect(
                    column * TILE_SIZE,
                    row * TILE_SIZE,
                    TILE_SIZE,
                    TILE_SIZE
                );   
    }

    drawEnemyDebug(ctx){
        this.game.enemyHandler.enemies.forEach(enemy => {
            ctx.fillStyle = 'rgba(250, 0, 0, 0.3)';
            ctx.fillRect(enemy.position.x, enemy.position.y, TILE_SIZE, TILE_SIZE);
            ctx.fillStyle = 'rgba(0, 0, 250, 0.3)';
            ctx.fillRect(Math.floor(enemy.position.x / TILE_SIZE) * TILE_SIZE, Math.floor(enemy.position.y / TILE_SIZE) * TILE_SIZE, TILE_SIZE, TILE_SIZE);
            this.game.drawGUIText(ctx, enemy.priorityDistance, Math.floor(enemy.position.x / TILE_SIZE) * TILE_SIZE, Math.floor(enemy.position.y / TILE_SIZE) * TILE_SIZE + 20, HALF_TILE_SIZE, 'right');
        })
    }

    drawTowerDebug(ctx){
        this.game.towerHandler.towers.forEach(tower => {
            ctx.beginPath();
            ctx.arc(tower.center.x, tower.center.y, tower.range, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(200, 0, 0, 0.1)';
            ctx.fill();
            this.game.drawGUIText(ctx, tower.range, tower.center.x, tower.center.y - TOWER_SIZE, HALF_TILE_SIZE, 'right');
        })
    }

    drawPerformanceDebug(ctx){
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fillRect(TILE_SIZE, TILE_SIZE * 3, TILE_SIZE * 3, TILE_SIZE * 2);
        const FPS = Math.round(this.game.FPSNormal * 1000) / 1000;
        this.game.drawGUIText(ctx, `f p s: ${FPS}`, TILE_SIZE, TILE_SIZE * 4, HALF_TILE_SIZE, 'left');
    }
}