import * as MOUSE from "../constants/mouse.js";
import { checkCircleCollision, checkBoxCollision } from "../utilities/math.js";

let selectedObject = MOUSE.NULL_OBJECT;

export class MouseHandler {
    constructor(switchScreens, switchMusic){  
        this.Mouse = {
            center: {
                x: 0,
                y: 0,
                radius: MOUSE.SIZE,
            },
            x: 0,
            y: 0,
            width: MOUSE.SIZE,
            height: MOUSE.SIZE,
            style: document.getElementById("canvas").style,
        };
        
        window.addEventListener('mousemove', e => {
            this.Mouse.x = e.offsetX;
            this.Mouse.y = e.offsetY;
            this.Mouse.center.x = e.offsetX;
            this.Mouse.center.y = e.offsetY;
            selectedObject = MOUSE.NULL_OBJECT;
        });

        window.addEventListener('click', () => {
            if(!selectedObject)
                return
            switchScreens(selectedObject.option);
            switchMusic(selectedObject.option);
        });
    }

    update(Screen){
        if(Screen.menu)
            this.menuSelected(Screen.menu);

        if(Screen.ObjectHandler)
            this.towerSelected(Screen.ObjectHandler.towers);
        
        this.switchMouseCursor();
    }

    menuSelected(menu){
        menu.forEach((menuItem) => {
            if(checkBoxCollision(this.Mouse, menuItem))
                menuItem.colour = "white"
            else {
                selectedObject = menuItem;
                menuItem.colour = "red"
            }
        });
    }

    towerSelected(towers){
        towers.forEach((tower) => {
            if(checkCircleCollision(this.Mouse, tower)){
                tower.isSelected = true;
            }
            else 
                tower.isSelected = false;
        });
    }

    switchMouseCursor(){
        switch(selectedObject.type){
            case MOUSE.OBJECT_TYPES.NORMAL:
                this.Mouse.style.cursor = "url(../../images/cursors/normal.cur), auto"; // STRING INTERPOLATION ${OBJECT_TYPES}url
                break
            case MOUSE.OBJECT_TYPES.ENEMY:
                this.Mouse.style.cursor = "url(../../images/cursors/attack.cur), auto";
                break
            case MOUSE.OBJECT_TYPES.MENUITEM:
                this.Mouse.style.cursor = "url(../../images/cursors/select.cur), auto";   
                break
            case MOUSE.OBJECT_TYPES.TOWER:
                this.Mouse.style.cursor = "url(../../images/cursors/select.cur), auto";   
                break
        }
    }
}