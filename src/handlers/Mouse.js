import * as GAME from "../constants/game.js";
import * as INPUT from "../constants/input.js";
import * as OBJECTS from "../constants/objects.js";

import { AmethystTower } from "../objects/towers/AmethystTower.js";
import { DiamondTower } from "../objects/towers/DiamondTower.js";
import { EmeraldTower } from "../objects/towers/EmeraldTower.js";
import { RubyTower } from "../objects/towers/RubyTower.js";
import { SapphireTower } from "../objects/towers/SapphireTower.js";
import { TopazTower } from "../objects/towers/TopazTower.js";

const NULL_OBJECT = {
    type: OBJECTS.TYPES.NORMAL,
};

let mouseOverObject = NULL_OBJECT;
let selectedObject = NULL_OBJECT;
let currentModal = null;
let newTower = null;

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
            mouseOverObject = NULL_OBJECT;
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
                this.towerFactory(mouseOverObject.option);
                break
            case OBJECTS.TYPES.TOWER:
                selectedObject = mouseOverObject;
                selectedObject.isSelected = true;
                selectedObject.createModal();
                break
            case OBJECTS.TYPES.NORMAL:
                selectedObject = NULL_OBJECT;
                currentModal = null;
                break
        }
    }

    update(scene){
        if(scene.menu)
            this.mouseOverObject(scene.menu);

        if(scene.objects && scene.getCurrentState() === GAME.STATES.RESUME){
            this.mouseOverObject(scene.objects.towers);
            this.mouseOverObject(scene.objects.enemies);
            if(currentModal === null && selectedObject.type === OBJECTS.TYPES.NORMAL)
                this.selectObject(scene.objects.towers);
            this.buildTower(scene.objects.towers);
        }

        if(selectedObject && selectedObject.modal)  
            currentModal = selectedObject.modal;
        if(currentModal)
            this.mouseOverObject(currentModal.menu);

        if(selectedObject){
            if(selectedObject.type === OBJECTS.TYPES.ENEMY)
                this.selectObject(scene.objects.enemies);
    
            if(selectedObject.type === OBJECTS.TYPES.TOWER)
                this.selectObject(scene.objects.towers);

            // selectedObject = NULL_OBJECT;
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

    buildTower(towers){
        if(newTower){
            towers[towers.findIndex(tower => tower === selectedObject)] = newTower;
            newTower = null;
            currentModal = null
        }
    }

    towerFactory(tower){
        currentModal.position.y += 32;
        switch(tower){
            case OBJECTS.COLOURS.AMETHYST:
                newTower = new AmethystTower({ position: {...currentModal.position} });
                break
            case OBJECTS.COLOURS.DIAMOND:
                newTower = new DiamondTower({ position: {...currentModal.position} });
                break
            case OBJECTS.COLOURS.EMERALD:
                newTower = new EmeraldTower({ position: {...currentModal.position} });
                break
            case OBJECTS.COLOURS.RUBY:
                newTower = new RubyTower({ position: {...currentModal.position} });
                break
            case OBJECTS.COLOURS.SAPPHIRE:
                newTower = new SapphireTower({ position: {...currentModal.position} });
                break
            case OBJECTS.COLOURS.TOPAZ:
                newTower = new TopazTower({ position: {...currentModal.position} });
                break
        }
    }
}   

