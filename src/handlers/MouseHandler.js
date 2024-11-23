
// let mouseOverOption = null;
// let mouseOverTower = null;
// let mouseOverEnemy = null;

let mouseOverEntity = null //IF BRANCH DEPENDING ON TYPE

export class MouseHandler {
    constructor(){  
        this.mouse = {
            hitBox: {
                x: 0,
                y: 0,
                radius: 3,
            },
            cursor: document.getElementById("canvas")
            
        };  
        this.mouse.cursor.setAttribute("class", "html.cursor");
        
        window.addEventListener('mousemove', e => {
            this.mouse.hitBox.x = e.offsetX;
            this.mouse.hitBox.y = e.offsetY;
            // mouseOverTower = null;
            // mouseOverEnemy = null;
            // mouseOverOption = null;
        });
        
    }
}