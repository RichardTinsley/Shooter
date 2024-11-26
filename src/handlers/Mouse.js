import { COLOURS } from "../constants/colours.js";
import * as MOUSE from "../constants/mouse.js";
import { OBJECT_TYPES, OBJECT_COLOURS, TOWER_SIZE } from "../constants/objects.js";
import { assets } from "./Assets.js";
import { checkCircleCollision, checkBoxCollision } from "../utilities/math.js";
import { SapphireTower } from "../objects/towers/SapphireTower.js";

let selectedObject = MOUSE.NULL_OBJECT;
let buildTowerHere = null;

export class Mouse {
    constructor(switchScreens){  
        this.Mouse = {
            center: {
                x: 0,
                y: 0,
                radius: MOUSE.SIZE,
            },
            width: MOUSE.SIZE,
            height: MOUSE.SIZE,
            style: document.getElementById("canvas").style,
        };
        
        window.addEventListener('mousemove', e => {
            this.Mouse.center.x = e.offsetX;
            this.Mouse.center.y = e.offsetY;
            selectedObject = MOUSE.NULL_OBJECT;
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
            case OBJECT_TYPES.ENEMY:
                break
            case OBJECT_TYPES.MENUITEM:
                switchScreens(selectedObject.option);
                break
            case OBJECT_TYPES.TOWER:
                buildTowerHere = selectedObject;
                break
        }
    }

    menuSelector(menu){
        menu.forEach((menuItem) => {
            if(checkBoxCollision(this.Mouse, menuItem))
                menuItem.colour = COLOURS.WHITE;
            else {
                selectedObject = menuItem;
                menuItem.colour = COLOURS.RED;
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
            image: assets.get(`${OBJECT_COLOURS.SAPPHIRE}${OBJECT_TYPES.TOWER}1`),
            size: TOWER_SIZE, 
            position: tower.position,
        })
        newTower.isOccupied = true;
        towers[towers.findIndex(tower => tower === buildTowerHere)] = newTower;
        buildTowerHere = null;
    }
}   