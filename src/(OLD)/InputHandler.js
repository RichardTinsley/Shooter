import { USER_INPUT_KEYS, ENEMY_STATES, GAME_WIDTH, GAME_STATES, TEXT_COLOURS } from './constants/constants.js'
import { menuScreenButtonsPosition, menuScreenButtonsTextSize } from './constants/buttons.js';
import { checkCollision } from './utilities/math.js';
import { SapphireTower } from './entities/towers/SapphireTower.js';

    menuScreenButtonSelected = (GameState) => {
        if(mouseOverOption){
            this.onMouseClickSwitchScreens(mouseOverOption.option);
        }
    }



    towerSelected(towers, addText, battleScreenHud){
        if(mouseOverTower)
            mouseOverTower.isSelected = true;

        towers.forEach(tower => {
            if(tower != mouseOverTower)
                tower.isSelected = false;
        });

        if(mouseOverTower && battleScreenHud.coins - 25 >= 0) {
            
            const newTower = new SapphireTower({ 
                position: mouseOverTower.position
            });
            let foundIndex = towers.find(tower => tower === mouseOverTower);
            towers.splice(foundIndex, 1, newTower);
            
            towers.push(newTower);
            battleScreenHud.coins -= 25;

        } 

        if(mouseOverTower && battleScreenHud.coins - 25 < 0)
            addText(
                "Not Enough Gold",
                TEXT_COLOURS.RED,
                mouseOverTower.center
            );
        
    }

    towerSelector(towers){
        towers.forEach(tower => {
            const newtower = { hitBox: {
                x: tower.hitBox.x,
                y: tower.hitBox.y,
                radius: 16,
            }};
            if(checkCollision(this.mouse, newtower))
                mouseOverTower = tower;
        });
        
        if(mouseOverTower)
            this.mouse.cursor.setAttribute("class", "select");
        else
            this.mouse.cursor.setAttribute("class", "normal");
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
            else
                this.mouse.cursor.setAttribute("class", "normal");
    });
        
        if(mouseOverEnemy)
            this.mouse.cursor.setAttribute("class", "attack");
    }
}

