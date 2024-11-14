import { GAME_STATES, USER_INPUT_KEYS, ENEMY_STATES, ENEMY_SIZE, ENEMY_SIZE_HALF } from './constants/constants.js'
import { assets } from './AssetLoader.js';

let mouse = {
    x: undefined,
    y: undefined
};

const cursor = document.getElementById("canvas");

let keys = new Set();
let activeTile = undefined;
let activeEnemy = undefined;

export class UserInput {
    constructor(
        hudElements, 
        tileHandler, 
        towerHandler, 
        enemyHandler,
        pauseGame,
        restartGame,
        debugGame
    ){

        this.hudElements = hudElements;
        this.tileHandler = tileHandler;
        this.towerHandler = towerHandler;
        this.enemyHandler = enemyHandler;
        this.pauseGame = pauseGame;
        this.restartGame = restartGame;
        this.debugGame = debugGame;

        window.addEventListener('click', e => {
            if (activeTile && !activeTile.isOccupied && hudElements.coins - 25 >= 0) {

                this.towerHandler.add(
                    assets.get('sapphireTower'), 
                    activeTile
                );
                
                activeTile.isOccupied = true;
                this.towerHandler.towers.sort((a, b) => { return a.position.y - b.position.y });
                hudElements.coins -= 25;
            }
            
            if(activeEnemy){
                activeEnemy.isSelected = true;
                this.enemyHandler.enemies.forEach(enemy => {
                    if(enemy != activeEnemy){
                        enemy.isSelected = false;
                    }
                })
            }
        })
        
        window.addEventListener('mousemove', e => {
            mouse.x = e.offsetX;
            mouse.y = e.offsetY;
            activeTile = null;
            activeEnemy = null;

            this.enemyHandler.enemies.forEach(enemy => {
                if( mouse.x > enemy.center.x - ENEMY_SIZE_HALF &&
                    mouse.x < enemy.center.x - ENEMY_SIZE_HALF + ENEMY_SIZE &&
                    mouse.y > enemy.center.y - enemy.height / 2 &&
                    mouse.y < enemy.center.y - ENEMY_SIZE_HALF + ENEMY_SIZE &&
                    enemy.state !== ENEMY_STATES.DYING
                ){
                    activeEnemy = enemy;
                } else
                    cursor.style = "cursor: url(./images/cursors/normal.cur), auto;";
            })

            if(activeEnemy)
                cursor.style = "cursor: url(./images/cursors/text.cur), auto;";

            this.tileHandler.tiles.forEach(tile => {
                if( mouse.x > tile.position.x &&
                    mouse.x < tile.position.x + tile.size &&
                    mouse.y > tile.position.y &&
                    mouse.y < tile.position.y + tile.size
                ){
                    activeTile = tile;
                    tile.mouseOver = true;
                } else 
                    tile.mouseOver = false;
                
            });
        })
        
        window.addEventListener('keydown', e =>{
            const key = e.key.toLowerCase();
            keys.add(key);
        });

        window.addEventListener('keyup', e =>{
            if (keys.has(USER_INPUT_KEYS.PAUSE))
                this.pauseGame();
            
            if(keys.has(USER_INPUT_KEYS.RESTART))
                this.restartGame();

            if(keys.has(USER_INPUT_KEYS.DEBUG))
                this.debugGame();
            
            // if(this.keys.has(USER_INPUT_KEYS.MUSIC))
            
            keys.clear();
        });
    }
}

