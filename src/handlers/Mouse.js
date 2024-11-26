import { COLOURS } from "../constants/colours.js";
import * as MOUSE from "../constants/mouse.js";
import { checkCircleCollision, checkBoxCollision } from "../utilities/math.js";

let selectedObject = MOUSE.NULL_OBJECT;

export class Mouse {
    constructor(switchScreens, switchMusic){  
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
            this.onMouseClick(switchScreens, switchMusic);
        });
    }

    update(Screen){
        if(Screen.menu)
            this.menuSelector(Screen.menu);

        if(Screen.Objects)
            this.towerSelector(Screen.Objects.towers);
        
        this.Mouse.style.cursor = `url(../../images/cursors/${selectedObject.type}.cur), auto`;
    }

    onMouseClick(switchScreens, switchMusic){
        switch(selectedObject.type){
            case MOUSE.CURSOR_TYPES.NORMAL:
                break
            case MOUSE.CURSOR_TYPES.ENEMY:
                break
            case MOUSE.CURSOR_TYPES.MENUITEM:
                switchScreens(selectedObject.option);
                switchMusic(selectedObject.option);
                break
            case MOUSE.CURSOR_TYPES.TOWER:
                //buildThisTower = selectedObject.tower;
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

    // buildTower(){
    //     //if(!buildThisTower)
    //     //return

    //     //if(!Screen.Hud.canAfford(buildThisTower.cost))


                    
    //         const newTower = new SapphireTower({ 
    //             position: mouseOverTower.position
    //         });
    //         let foundIndex = towers.find(tower => tower === mouseOverTower);
    //         towers.splice(foundIndex, 1, newTower);
            
    //         towers.push(newTower);
    //         battleScreenHud.coins -= 25;

    //     } 

    //     if(mouseOverTower && battleScreenHud.coins - 25 < 0)
    //         addText(
    //             "Not Enough Gold",
    //             TEXT_COLOURS.RED,
    //             mouseOverTower.center
    //         );
    // }

}   
