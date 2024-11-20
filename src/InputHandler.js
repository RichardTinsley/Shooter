import { USER_INPUT_KEYS, ENEMY_STATES, GAME_WIDTH, GAME_STATES } from './constants/constants.js'
import { assets } from './AssetLoader.js';
import { menuScreenButtonsPosition, menuScreenButtonsTextSize } from './constants/buttons.js';
import { checkCollision } from './utilities/math.js';

let keys = new Set();
let mouseOverOption = undefined;
let mouseOverTower = undefined;
let mouseOverEnemy = undefined;

export class InputHandler {
    constructor(onMouseClickSwitchScreens){
        this.onMouseClickSwitchScreens = onMouseClickSwitchScreens;
        
        this.mouse = {
            hitBox: {
                x: 0,
                y: 0,
                radius: 3,
            },
            cursor: document.getElementById("canvas")
            
        };  
        this.mouse.cursor.setAttribute("class", "normal");

        // this.mouse.cursor = document.body.className = 'normal';
        // this.mouse.cursor.style = `cursor: url(${this.cursor1.src}), auto;`;
        // this.mouse.cursor.style.cursor = 'text';
        // this.mouse.cursor.style = document.getElementById.apply("html").style.cursor = "text";

        window.addEventListener('mousemove', e => {
            this.mouse.hitBox.x = e.offsetX;
            this.mouse.hitBox.y = e.offsetY;
            mouseOverTower = null;
            mouseOverEnemy = null;
            mouseOverOption = null;
        })
        
        window.addEventListener('keydown', e =>{
            keys.add(e.key.toLowerCase());
        });

        window.addEventListener('keyup', e =>{
            if(keys.has(USER_INPUT_KEYS.PAUSE))
                this.onMouseClickSwitchScreens(GAME_STATES.PAUSED);

            if(keys.has(USER_INPUT_KEYS.UNPAUSE))
                this.onMouseClickSwitchScreens(GAME_STATES.UNPAUSED);
            
            if(keys.has(USER_INPUT_KEYS.RESTART))
                this.onMouseClickSwitchScreens(GAME_STATES.RESTART);

            if(keys.has(USER_INPUT_KEYS.DEBUG))
                this.onMouseClickSwitchScreens(GAME_STATES.DEBUG);
            
            // if(this.keys.has(USER_INPUT_KEYS.MUSIC))
            
            keys.clear();
        });
    }

    menuScreenButtonSelected = (GameState) => {
        if(mouseOverOption){
            this.onMouseClickSwitchScreens(mouseOverOption.option);
        }
    }

    menuScreenButtonsSelector = (menuScreenButtons) => {
        menuScreenButtons.forEach((option, index) => {
            if( this.mouse.hitBox.x > GAME_WIDTH / 2 - ((option.name.length / 2) * menuScreenButtonsTextSize) &&
                this.mouse.hitBox.x < GAME_WIDTH / 2 + ((option.name.length / 2) * menuScreenButtonsTextSize) &&
                this.mouse.hitBox.y > menuScreenButtonsPosition + (menuScreenButtonsTextSize * index) &&
                this.mouse.hitBox.y < menuScreenButtonsPosition + (menuScreenButtonsTextSize * index) + menuScreenButtonsTextSize
            )
                mouseOverOption = option;
            else {
                option.colour = "white";
                // this.mouse.cursor.setAttribute("class", "normal");
            }
        });

        if(mouseOverOption){
            mouseOverOption.colour = "red";
            this.mouse.cursor.setAttribute("class", "select");
        }
    }

    towerSelected = (addTower, addText, battleScreenHud) => {
        if(mouseOverTower && battleScreenHud.coins - 25 >= 0) {
            addTower(
                assets.get('sapphireTower'), 
                mouseOverTower
            );
            battleScreenHud.coins -= 25;
        } 

        if(mouseOverTower && battleScreenHud.coins - 25 < 0)
            addText(
                "Not Enough Gold",
                '250, 0, 0, ',
                mouseOverTower.center
            );
        
    }

    towerSelector(towers){
        towers.forEach(tower => {
            const newtower = { hitBox: {
                x: tower.hitBox.x,
                y: tower.hitBox.y,
                radius: 32,
            }};
            if(checkCollision(this.mouse, newtower)){
                mouseOverTower = tower;
                tower.mouseOver = true;
            } else {
                tower.mouseOver = false;
                // this.mouse.cursor.setAttribute("class", "normal");
            }
        });

        if(mouseOverTower)
            this.mouse.cursor.setAttribute("class", "select");
    }

    enemySelected(enemies){
        if(mouseOverEnemy) 
            mouseOverEnemy.isSelected = true;

        enemies.forEach(enemy => {
            if(enemy != mouseOverEnemy){
                enemy.isSelected = false;
            }
        });
    }

    enemySelector(enemies){
        enemies.forEach(enemy => {
            if(checkCollision(this.mouse, enemy) && enemy.state !== ENEMY_STATES.DYING)
                mouseOverEnemy = enemy;
        })
    
        if(mouseOverEnemy)
            this.mouse.cursor.setAttribute("class", "attack");
        else
            this.mouse.cursor.setAttribute("class", "normal");
    }
}

