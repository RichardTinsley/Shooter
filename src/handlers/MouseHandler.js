import { checkBoxCollision } from "../utilities/math.js";
// let mouseOverOption = null;
// let mouseOverTower = null;
// let mouseOverEnemy = null;

let mouseOverEntity = null //IF BRANCH DEPENDING ON TYPE
const mouseSize = 3

export class MouseHandler {
    constructor(){  
        this.center = {
                x: 0,
                y: 0,
                radius: mouseSize,
                width: mouseSize,
                height: mouseSize,
                cursor: document.getElementById("canvas")
            };
            
        
        // this.mouse.cursor.setAttribute("class", "html.cursor");

        window.addEventListener('mousemove', e => {
            this.center.x = e.offsetX;
            this.center.y = e.offsetY;
            // mouseOverTower = null;
            // mouseOverEnemy = null;
            // mouseOverOption = null;
        });
        
    }

    menuScreenButtonsSelector = (menu) => {
        menu.forEach((menuItem) => {
            if(checkBoxCollision(mouse, menuItem))
                // mouseOverOption = option;
                console.log(menuItem);
            else {
                // option.colour = "white";
                // this.mouse.cursor.setAttribute("class", "normal");
            }
        });

        if(mouseOverOption){
            // mouseOverOption.colour = "red";
            // this.mouse.cursor.setAttribute("class", "select");
        }
    }
}