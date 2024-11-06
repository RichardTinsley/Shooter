import { GAME_STATES, USER_INPUT_KEYS, ENEMY_STATES, ENEMY_SIZE, ENEMY_SIZE_HALF } from './utilities/constants.js'
import { assets } from './AssetHandler.js';

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

                this.game.towerHandler.addTowerToTowersArray(
                    assets.get('sapphireTower'), 
                    this.activeTile
                );
                
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
                if( this.mouse.x > enemy.center.x - ENEMY_SIZE_HALF &&
                    this.mouse.x < enemy.center.x - ENEMY_SIZE_HALF + ENEMY_SIZE &&
                    this.mouse.y > enemy.center.y - enemy.height / 2 &&
                    this.mouse.y < enemy.center.y - ENEMY_SIZE_HALF + ENEMY_SIZE &&
                    enemy.state !== ENEMY_STATES.DYING
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
            if (this.keys.has(USER_INPUT_KEYS.PAUSE))
                if(this.game.currentGameState === GAME_STATES.PLAYING)
                    this.game.currentGameState = GAME_STATES.PAUSED;
                else 
                    this.game.currentGameState = GAME_STATES.PLAYING;
            
            if(this.keys.has(USER_INPUT_KEYS.DEBUG))
                if(this.game.currentGameState === GAME_STATES.PLAYING)
                    this.game.currentGameState = GAME_STATES.DEBUG;
                else 
                    this.game.currentGameState = GAME_STATES.PLAYING;
            
            if(this.keys.has(USER_INPUT_KEYS.MUSIC))
                if(this.game.audioHandler.music.paused) 
                    this.game.audioHandler.music.play();
                else
                    this.game.audioHandler.music.pause();
            
            if(this.keys.has(USER_INPUT_KEYS.RESTART))
                this.game.currentGameState = GAME_STATES.RESTART;

            this.keys.clear();
        });
    }
}

