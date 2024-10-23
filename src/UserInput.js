import { GAME_STATES } from "./GameHandler.js";
import { ENEMY_STATE, ENEMY_SIZE, HALF_ENEMY_SIZE } from "./Enemy.js";

const KEYS = {
    PAUSE: 'p',
    DEBUG: 'o',
    MUSIC: 'm',
    RESTART: 'r'
}

export class UserInput {
    constructor(game){
        this.game = game;
        this.mouse = {
            x: undefined,
            y: undefined
        };

        this.keys = new Set();
        this.activeTile = undefined;
        this.activeEnemy = undefined;

        const cursor = document.getElementById("canvas");

        window.addEventListener('click', e => {
            if (this.activeTile && !this.activeTile.isOccupied && this.game.coins - 25 >= 0) {
                this.game.towerHandler.populateTowersArray(this.game.towerHandler.sapphireTower, this.activeTile);
                this.activeTile.isOccupied = true;
                this.game.towerHandler.towers.sort((a, b) => { return a.position.y - b.position.y });
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
                if( this.mouse.x > enemy.center.x - HALF_ENEMY_SIZE &&
                    this.mouse.x < enemy.center.x - HALF_ENEMY_SIZE + ENEMY_SIZE &&
                    this.mouse.y > enemy.center.y - enemy.height / 2 &&
                    this.mouse.y < enemy.center.y - HALF_ENEMY_SIZE + ENEMY_SIZE &&
                    enemy.state !== ENEMY_STATE.DYING
                ){
                    this.activeEnemy = enemy;
                } else
                    cursor.style = "cursor: url(./images/cursors/normal.cur), auto;";
            })

            if(this.activeEnemy)
                cursor.style = "cursor: url(./images/cursors/text.cur), auto;";

            this.game.tileHandler.tiles.forEach(tile => {
                if( this.mouse.x > tile.position.x &&
                    this.mouse.x < tile.position.x + tile.size &&
                    this.mouse.y > tile.position.y &&
                    this.mouse.y < tile.position.y + tile.size
                ){
                    this.activeTile = tile;
                    tile.mouseOver = true;
                } else 
                    tile.mouseOver = false;
                
            });
        })
        
        window.addEventListener('keydown', e =>{
            const key = e.key.toLowerCase();
            this.keys.add(key);
        });

        window.addEventListener('keyup', e =>{
            if (this.keys.has(KEYS.PAUSE))
                if(this.game.currentGameState === GAME_STATES.PLAYING)
                    this.game.currentGameState = GAME_STATES.PAUSED;
                else 
                    this.game.currentGameState = GAME_STATES.PLAYING;
            
            if(this.keys.has(KEYS.DEBUG))
                if(this.game.currentGameState === GAME_STATES.PLAYING)
                    this.game.currentGameState = GAME_STATES.DEBUG;
                else 
                    this.game.currentGameState = GAME_STATES.PLAYING;
            
            if(this.keys.has(KEYS.MUSIC))
                if(this.game.assetHandler.music.paused) 
                    this.game.assetHandler.music.play();
                else
                    this.game.assetHandler.music.pause();
            
            if(this.keys.has(KEYS.RESTART))
                this.game.currentGameState = GAME_STATES.RESTART;

            this.keys.clear();
        });
    }
}

