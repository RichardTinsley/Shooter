import * as INPUT from "../constants/input.js"
import * as OBJECTS from "../constants/objects.js"
import { checkCircleCollision, checkBoxCollision } from "../utilities/math.js";
import { SapphireTower } from "../objects/towers/SapphireTower.js";

let mouseOverObject = INPUT.NULL_OBJECT;
let selectedObject = null;

export class Mouse {
    constructor(switchScreens){  
        this.mouse = {
            x: 0,
            y: 0,
            radius: INPUT.SIZE,
            width: INPUT.SIZE,
            height: INPUT.SIZE,
            style: document.getElementById("canvas").style,
        };
        
        window.addEventListener('mousemove', e => {
            this.mouse.x = e.offsetX;
            this.mouse.y = e.offsetY;
            mouseOverObject = INPUT.NULL_OBJECT;
        });

        window.addEventListener('click', () => {
            this.onMouseClick(switchScreens);
        });
    }

    update(screen){
        this.mouseOverObject(screen);
        if(selectedObject){
            if(selectedObject.type === OBJECTS.TYPES.ENEMY)
                this.selectEnemy(screen.objects.enemies);
    
            if(selectedObject.type === OBJECTS.TYPES.TOWER)
                this.buildTower(screen.objects.towers);

            selectedObject = null;
        }
        
        this.mouse.style.cursor = `url(../../images/cursors/${mouseOverObject.type}.cur), auto`;
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

    mouseOverObject(screen){
        if(screen.menu)
            this.mouseOverMenuItem(screen.menu);

        if(screen.objects){
            this.mouseOverTower(screen.objects.towers);
            this.mouseOverEnemy(screen.objects.enemies);
        }
    }

    mouseOverMenuItem(menu){
        menu.forEach(menuItem => {
            if(checkBoxCollision(this.mouse, menuItem.position))
                menuItem.text.enable(false);
            else {
                menuItem.text.enable(true);
                mouseOverObject = menuItem;
            }
        });
    }

    mouseOverTower(towers){
        towers.forEach((tower) => {
            if(checkCircleCollision(this.mouse, tower.center)){
                tower.isSelected = true;
                mouseOverObject = tower;
            }
            else 
                tower.isSelected = false;
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

    mouseOverEnemy(enemies){
        enemies.forEach((enemy) => {
            if(checkCircleCollision(this.mouse, enemy.center))
                mouseOverObject = enemy;
        });
    }

    selectEnemy(enemies){
        enemies.forEach((enemy) => {
            if(enemy.isSelected === true && enemy !== selectedObject)
                enemy.isSelected = false;
        });
    }
}   
