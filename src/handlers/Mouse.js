import * as GAME from "../constants/game.js";
import * as INPUT from "../constants/input.js";
import * as OBJECTS from "../constants/objects.js";

let mouseOverObject = INPUT.NULL_OBJECT;
let selectedObject = null;
let currentModalMenu = null;

export class Mouse {
    constructor(switchScenes){  
        this.mouse = {
            x: 0,
            y: 0,
            radius: INPUT.SIZE,
            width: INPUT.SIZE,
            height: INPUT.SIZE,
            style: document.getElementById("canvas").style,
        };

        window.addEventListener('click', () => {
            this.onMouseClick(switchScenes);
        });
        
        window.addEventListener('mousemove', e => {
            this.mouse.x = e.offsetX;
            this.mouse.y = e.offsetY;
            mouseOverObject = INPUT.NULL_OBJECT;
        });
    }

    onMouseClick(switchScenes){
        switch(mouseOverObject.type){
            case OBJECTS.TYPES.ENEMY:
                selectedObject = mouseOverObject;
                selectedObject.isSelected = true;
                break
            case OBJECTS.TYPES.MENUITEM:
                switchScenes(mouseOverObject.option);
                break
            case OBJECTS.TYPES.TOWER:
                selectedObject = mouseOverObject;
                selectedObject.isSelected = true;
                selectedObject.createModal();
                break
        }
    }

    update(scene){
        if(scene.menu)
            this.mouseOverObject(scene.menu);

        if(scene.objects && scene.getCurrentState() === GAME.STATES.RESUME){
            this.mouseOverObject(scene.objects.towers);
            this.mouseOverObject(scene.objects.enemies);
        }

        if(selectedObject && selectedObject.modal)  
            currentModalMenu = selectedObject.modal.menu;
        if(currentModalMenu)
            this.mouseOverObject(currentModalMenu);

        if(selectedObject){
            if(selectedObject.type === OBJECTS.TYPES.ENEMY)
                this.selectObject(scene.objects.enemies);
    
            if(selectedObject.type === OBJECTS.TYPES.TOWER)
                this.selectObject(scene.objects.towers);

            selectedObject = null;
        }
        
        this.mouse.style.cursor = `url(../../images/cursors/${mouseOverObject.type}.cur), auto`;
    }

    selectObject(array){
        array.forEach((object) => {
            if(object.isSelected === true && object !== selectedObject)
                object.isSelected = false;
        });
    }

    mouseOverObject(array){
        array.forEach((object) => {
            if(object.collisionDetection(this.mouse)){
                object.isMouseOver = true;
                mouseOverObject = object;
            }
            else 
                object.isMouseOver = false;
        });
    }
}   

        // let newTower = new SapphireTower({
        //     position: selectedObject.position,
        // })

        // towers[towers.findIndex(tower => tower === selectedObject)] = newTower;
