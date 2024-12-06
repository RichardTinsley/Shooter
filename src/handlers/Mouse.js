import * as INPUT from "../constants/input.js"
import * as OBJECTS from "../constants/objects.js"
import { checkCircleCollision, checkBoxCollision } from "../utilities/math.js";
import { SapphireTower } from "../objects/towers/SapphireTower.js";

let mouseOverObject = INPUT.NULL_OBJECT;
let selectedObject = null;

export class Mouse {
    constructor(switchScreens){  
        this.Mouse = {
            center: {
                x: 0,
                y: 0,
                radius: INPUT.SIZE,
            },
            width: INPUT.SIZE,
            height: INPUT.SIZE,
            style: document.getElementById("canvas").style,
        };
        
        window.addEventListener('mousemove', e => {
            this.Mouse.center.x = e.offsetX;
            this.Mouse.center.y = e.offsetY;
            mouseOverObject = INPUT.NULL_OBJECT;
        });

        window.addEventListener('click', () => {
            this.onMouseClick(switchScreens);
        });
    }

    update(Screen){
        if(Screen.menu)
            this.mouseOverMenuItem(Screen.menu);

        if(Screen.Objects){
            this.mouseOverTower(Screen.Objects.towers);
            this.mouseOverEnemy(Screen.Objects.enemies);
        }

        if(selectedObject){
            if(selectedObject.type === OBJECTS.TYPES.ENEMY)
                this.selectEnemy(Screen.Objects.enemies);
    
            if(selectedObject.type === OBJECTS.TYPES.TOWER)
                this.buildTower(Screen.Objects.towers);

            selectedObject = null;
        }
        
        this.Mouse.style.cursor = `url(../../images/cursors/${mouseOverObject.type}.cur), auto`;
    }

    onMouseClick(switchScreens){
        switch(mouseOverObject.type){
            case OBJECTS.TYPES.ENEMY:
                selectedObject = mouseOverObject;
                selectedObject.isSelected = true;
                break
            case OBJECTS.TYPES.MENUITEM:
                switchScreens(mouseOverObject.option);
                break
            case OBJECTS.TYPES.TOWER:
                selectedObject = mouseOverObject;
                break
        }
    }

    mouseOverMenuItem(menu){
        menu.forEach(menuItem => {
            if(checkBoxCollision(this.Mouse, menuItem))
                menuItem.text.enable(false);
            else {
                menuItem.text.enable(true);
                mouseOverObject = menuItem;
            }
        });
    }

    mouseOverTower(towers){
        towers.forEach((tower) => {
            if(checkCircleCollision(this.Mouse, tower)){
                tower.isSelected = true;
                mouseOverObject = tower;
            }
            else 
                tower.isSelected = false;
        });
    }

    mouseOverEnemy(enemies){
        enemies.forEach((enemy) => {
            if(checkCircleCollision(this.Mouse, enemy))
                mouseOverObject = enemy;
        });
    }

    selectEnemy(enemies){
        enemies.forEach((enemy) => {
            if(enemy.isSelected === true && enemy !== selectedObject)
                enemy.isSelected = false;
        });
    }

    buildTower(towers){
        if(mouseOverObject.isOccupied)
            return

        // if(!Screen.Hud.canAfford(buildThisTower.cost))

        let newTower = new SapphireTower({
            position: selectedObject.position,
        })

        towers[towers.findIndex(tower => tower === selectedObject)] = newTower;
    }
}   
