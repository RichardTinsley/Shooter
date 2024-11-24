import { MOUSE_OVER_ENTITY } from "../constants/mouse.js";
import { checkBoxCollision } from "../utilities/math.js";

let isMouseOverObject = MOUSE_OVER_ENTITY.NORMAL;
let selectedObject = null;
const mouseSize = 3

export class MouseHandler {
    constructor(){  
        this.mouse = {
            x: 0,
            y: 0,
            radius: mouseSize,
            width: mouseSize,
            height: mouseSize,
        };
        
        window.addEventListener('mousemove', e => {
            this.mouse.x = e.offsetX;
            this.mouse.y = e.offsetY;
            isMouseOverObject = MOUSE_OVER_ENTITY.NORMAL
            selectedObject = null;
        });

        window.addEventListener('click', () => {
            console.log(selectedObject);
        });
    }

    mouseOverEntity = (menu, enemies) => {
        if(!menu)
            return;
        
        menu.forEach((menuItem) => {
            if(checkBoxCollision(this.mouse, menuItem)){
                menuItem.colour = "white"
            }
            else {
                selectedObject = menuItem;
                menuItem.colour = "red"
                isMouseOverObject = MOUSE_OVER_ENTITY.MENUITEM
            }
        });

        // if(!enemies || enemies.length)
        //     return

        this.switchMouseCursor();
    }

    mouseClickOnEntity(){
        console.log(isMouseOverObject);
    }

    switchMouseCursor(){
        switch(isMouseOverObject){
            case MOUSE_OVER_ENTITY.NORMAL:
                document.getElementById("canvas").style.cursor  = "url(../../images/cursors/normal.cur), auto";
                break
            case MOUSE_OVER_ENTITY.ENEMY:
                document.getElementById("canvas").style.cursor = "url(../../images/cursors/attack.cur), auto";
                break
            case MOUSE_OVER_ENTITY.MENUITEM:
                document.getElementById("canvas").style.cursor = "url(../../images/cursors/select.cur), auto";   
                break
            case MOUSE_OVER_ENTITY.TOWER:
                document.getElementById("canvas").style.cursor = "url(../../images/cursors/select.cur), auto";   
                break
        }
    }
}