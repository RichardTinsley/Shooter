import * as GAME from "../constants/game.js";
import * as INPUT from "../constants/input.js";
import * as OBJECTS from "../constants/objects.js";

const NULL_OBJECT = {
    type: OBJECTS.TYPES.NORMAL,
};

let newTower = null;
let mouseOverObject = NULL_OBJECT;

export class Mouse {

    static enemySelected = NULL_OBJECT;
    static towerSelected = NULL_OBJECT;

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
            mouseOverObject = NULL_OBJECT;
        });
    }

    onMouseClick(switchScenes){
        switch(mouseOverObject.type){
            case OBJECTS.TYPES.ENEMY:
                this.clickOnEnemyAction();
                break
            case OBJECTS.TYPES.MENUITEM:
                switchScenes(mouseOverObject.option);
                if(Mouse.towerSelected !== NULL_OBJECT)
                    newTower = Mouse.towerSelected.towerFactory(mouseOverObject.option);
                break
            case OBJECTS.TYPES.TOWER:
                this.clicOnTowerAction();
                break
            case OBJECTS.TYPES.NORMAL:
                Mouse.towerSelected.state = OBJECTS.ANIMATION.ANIMATING;
                Mouse.towerSelected = NULL_OBJECT;
                break
        }
    }

    update(scene){
        if(Mouse.enemySelected.type === OBJECTS.TYPES.ENEMY)
            if(Mouse.enemySelected.isEnemyDying())
                Mouse.enemySelected = NULL_OBJECT;

        if(Mouse.towerSelected.type === OBJECTS.TYPES.TOWER)
            this.mouseOverObject(Mouse.towerSelected.modal.menu);
        
        if(scene.menu)
            this.mouseOverObject(scene.menu);

        if(scene.objects && scene.getCurrentState() === GAME.STATES.RESUME){
            this.mouseOverObject(scene.objects.towers);
            this.mouseOverObject(scene.objects.enemies);
            this.buildTower(scene.objects.towers);
        }

        this.mouse.style.cursor = `url(../../images/cursors/${mouseOverObject.type}.cur), auto`;
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

    clickOnEnemyAction(){
        if(Mouse.enemySelected === mouseOverObject){
            Mouse.enemySelected.state = OBJECTS.ANIMATION.ANIMATING;
            Mouse.enemySelected = NULL_OBJECT;
        }
        else{
            Mouse.enemySelected.state = OBJECTS.ANIMATION.ANIMATING;
            Mouse.enemySelected = mouseOverObject;
            Mouse.enemySelected.state = OBJECTS.ANIMATION.SELECTED;
        }
    }

    clicOnTowerAction(){
        if(Mouse.towerSelected !== mouseOverObject){
            Mouse.towerSelected.state = OBJECTS.ANIMATION.ANIMATING;
            Mouse.towerSelected = mouseOverObject;
            Mouse.towerSelected.state = OBJECTS.ANIMATION.SELECTED;
            Mouse.towerSelected.createModal();
        }
    }

    buildTower(towers){
        if(newTower){
            towers[towers.findIndex(tower => tower === Mouse.towerSelected)] = newTower;
            newTower = null;
            Mouse.towerSelected = NULL_OBJECT;
        }
    }
}   