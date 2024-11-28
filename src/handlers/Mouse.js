import * as INPUT from "../constants/input.js"
import * as OBJECTS from "../constants/objects.js"
import { checkCircleCollision, checkBoxCollision } from "../utilities/math.js";
import { SapphireTower } from "../objects/towers/SapphireTower.js";

let selectedObject = INPUT.NULL_OBJECT;
let buildTowerHere = null;

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
            selectedObject = INPUT.NULL_OBJECT;
        });

        window.addEventListener('click', () => {
            this.onMouseClick(switchScreens);
        });
    }

    update(Screen){
        if(Screen.menu)
            this.menuSelector(Screen.menu);

        if(Screen.Objects)
            this.towerSelector(Screen.Objects.towers);

        if(buildTowerHere)
            this.buildTower(buildTowerHere, Screen.Objects.towers);
        
        this.Mouse.style.cursor = `url(../../images/cursors/${selectedObject.type}.cur), auto`;
    }

    onMouseClick(switchScreens){
        switch(selectedObject.type){
            case OBJECTS.TYPES.ENEMY:
                break
            case OBJECTS.TYPES.MENUITEM:
                switchScreens(selectedObject.option);
                break
            case OBJECTS.TYPES.TOWER:
                buildTowerHere = selectedObject;
                break
        }
    }

    menuSelector(menu){
        menu.menuItems.forEach((menuItem) => {
            if(checkBoxCollision(this.Mouse, menuItem))
                menuItem.text.enable(false);
            else {
                menuItem.text.enable(true);
                selectedObject = menuItem;
            }
        });
    }

    towerSelector(towers){
        towers.forEach((tower) => {
            if(checkCircleCollision(this.Mouse, tower)){
                tower.isSelected = true;
                selectedObject = tower;
            }
            else 
                tower.isSelected = false;
        });
    }

    buildTower(tower, towers){
        if(selectedObject.isOccupied)
            return

        // if(!Screen.Hud.canAfford(buildThisTower.cost)){
        //     addText(
        //         "Not Enough Gold",
        //         TEXT_COLOURS.RED,
        //         mouseOverTower.center
        //     );
        //     return
        // }

        let newTower = new SapphireTower({
            position: tower.position,
        })

        towers[towers.findIndex(tower => tower === buildTowerHere)] = newTower;
        buildTowerHere = null;
    }
}   
