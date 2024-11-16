import { USER_INPUT_KEYS, ENEMY_STATES, ENEMY_SIZE, ENEMY_SIZE_HALF } from './constants/constants.js'
import { assets } from './AssetLoader.js';

let mouse = {
    x: undefined,
    y: undefined
};

const cursor = document.getElementById("canvas");

let keys = new Set();
let activeTower = undefined;
let activeEnemy = undefined;

export class UserInput {
    constructor(
        entityHandler,
        pauseGame,
        restartGame,
        debugGame
    ){

        this.entityHandler = entityHandler;
        this.pauseGame = pauseGame;
        this.restartGame = restartGame;
        this.debugGame = debugGame;

        window.addEventListener('click', e => {
            if (activeTower && this.entityHandler.hudElements.coins - 25 >= 0) {
                this.entityHandler.addTower(
                    assets.get('sapphireTower'), 
                    activeTower
                );
                
                this.entityHandler.hudElements.coins -= 25;
            }
            
            if(activeEnemy){
                activeEnemy.isSelected = true;
                this.entityHandler.enemies.forEach(enemy => {
                    if(enemy != activeEnemy){
                        enemy.isSelected = false;
                    }
                })
            }
        })
        
        window.addEventListener('mousemove', e => {
            mouse.x = e.offsetX;
            mouse.y = e.offsetY;
            activeTower = null;
            activeEnemy = null;

            this.entityHandler.towers.forEach(tower => {
                if( mouse.x > tower.position.x &&
                    mouse.x < tower.position.x + tower.sprite.width &&
                    mouse.y > tower.position.y &&
                    mouse.y < tower.position.y + tower.sprite.height
                ){
                    activeTower = tower;
                    tower.mouseOver = true;
                } else 
                    tower.mouseOver = false;
                
            });

            this.entityHandler.enemies.forEach(enemy => {
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

