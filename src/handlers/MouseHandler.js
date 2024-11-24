import { MOUSE_OVER_OBJECT } from "../constants/mouse.js";
import { checkBoxCollision } from "../utilities/math.js";

let isMouseOverObject = MOUSE_OVER_OBJECT.NORMAL;
let selectedObject = null;
const mouseSize = 3

export class MouseHandler {
    constructor(switchScreens){  
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
            isMouseOverObject = MOUSE_OVER_OBJECT.NORMAL;
            selectedObject = null;
        });

        window.addEventListener('click', () => {
            console.log(selectedObject);
            switchScreens(selectedObject.option);
            isMouseOverObject = MOUSE_OVER_OBJECT.NORMAL;
        });
    }

    mouseOverObject = (menu, enemies) => {
        if(!menu)
            return;

        menu.forEach((menuItem) => {
            if(checkBoxCollision(this.mouse, menuItem)){
                menuItem.colour = "white"
            }
            else {
                selectedObject = menuItem;
                menuItem.colour = "red"
                isMouseOverObject = MOUSE_OVER_OBJECT.MENUITEM
            }
        });

        // if(!enemies || enemies.length)
        //     return

        this.switchMouseCursor();
    }

    mouseClickOnObject(){
        console.log(isMouseOverObject);
    }

    switchMouseCursor(){
        switch(isMouseOverObject){
            case MOUSE_OVER_OBJECT.NORMAL:
                document.getElementById("canvas").style.cursor = "url(../../images/cursors/normal.cur), auto";
                break
            case MOUSE_OVER_OBJECT.ENEMY:
                document.getElementById("canvas").style.cursor = "url(../../images/cursors/attack.cur), auto";
                break
            case MOUSE_OVER_OBJECT.MENUITEM:
                document.getElementById("canvas").style.cursor = "url(../../images/cursors/select.cur), auto";   
                break
            case MOUSE_OVER_OBJECT.TOWER:
                document.getElementById("canvas").style.cursor = "url(../../images/cursors/select.cur), auto";   
                break
        }
    }
}