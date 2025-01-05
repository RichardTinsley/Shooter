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

let newTower = null;
let mouseOverObject = NULL_OBJECT;
let enemySelected = NULL_OBJECT;
let towerSelected = NULL_OBJECT;

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
                if(enemySelected === mouseOverObject)
                    enemySelected = NULL_OBJECT;
                else
                    enemySelected = mouseOverObject;
                break
            case OBJECTS.TYPES.MENUITEM:
                switchScenes(mouseOverObject.option);
                this.towerFactory(mouseOverObject.option);
                break
            case OBJECTS.TYPES.TOWER:
                towerSelected = mouseOverObject;
                towerSelected.createModal();
                break
            case OBJECTS.TYPES.NORMAL:
                towerSelected = NULL_OBJECT;
                break
        }
    }

    draw(ctx){
        if(enemySelected.type === OBJECTS.TYPES.ENEMY)
            enemySelected.drawSelection(ctx);

        if(towerSelected.type === OBJECTS.TYPES.TOWER)
            towerSelected.drawSelection(ctx);
    }

    update(event, scene){
        if(enemySelected.type === OBJECTS.TYPES.ENEMY)
            if(enemySelected.isEnemyDying())
                enemySelected = NULL_OBJECT;

        if(towerSelected.type === OBJECTS.TYPES.TOWER){
            towerSelected.updateSelection(event);
            if(towerSelected.modal)
                this.mouseOverObject(towerSelected.modal.menu);
        }

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

    buildTower(towers){
        if(newTower){
            towers[towers.findIndex(tower => tower === towerSelected)] = newTower;
            newTower = null;
            towerSelected = NULL_OBJECT;
        }
    }

    towerFactory(tower){
        const tempPosition = {...towerSelected.position};
        switch(tower){
            case OBJECTS.COLOURS.AMETHYST:
                newTower = new AmethystTower({ position: {...tempPosition} });
                break
            case OBJECTS.COLOURS.DIAMOND:
                newTower = new DiamondTower({ position: {...tempPosition} });
                break
            case OBJECTS.COLOURS.EMERALD:
                newTower = new EmeraldTower({ position: {...tempPosition} });
                break
            case OBJECTS.COLOURS.RUBY:
                newTower = new RubyTower({ position: {...tempPosition} });
                break
            case OBJECTS.COLOURS.SAPPHIRE:
                newTower = new SapphireTower({ position: {...tempPosition} });
                break
            case OBJECTS.COLOURS.TOPAZ:
                newTower = new TopazTower({ position: {...tempPosition} });
                break
        }
    }
}   

