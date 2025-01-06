import * as INTERFACE from "../constants/interface.js";
import * as OBJECTS from "../constants/objects.js";
import { checkCircleCollision } from "../utilities/math.js";
import { assets } from "../utilities/assets.js";
import { BuildTowerModal } from "./BuildTowerModal.js";

import { AmethystTower } from "../objects/towers/AmethystTower.js";
import { DiamondTower } from "../objects/towers/DiamondTower.js";
import { EmeraldTower } from "../objects/towers/EmeraldTower.js";
import { RubyTower } from "../objects/towers/RubyTower.js";
import { SapphireTower } from "../objects/towers/SapphireTower.js";
import { TopazTower } from "../objects/towers/TopazTower.js";

export class EmptyTowerSpot{
    constructor({
        position,
    }){
        this.image = assets.get('towerSpot');
        this.width = OBJECTS.SIZES.TOWER;
        this.height = OBJECTS.SIZES.TOWER;
        this.position = position;

        this.center = {
            x: this.position.x,
            y: this.position.y - this.width / 2,
            radius: this.width / 2,
        };

        this.drawPositionX = this.position.x - this.width / 2;
        this.drawPositionY = this.position.y - this.height;
    
        this.modal = null;
        this.type = OBJECTS.TYPES.TOWER;
        this.isMouseOver = false;
        this.state = OBJECTS.ANIMATION.ANIMATING;
    }

    draw(ctx){
        switch(this.state){
            case OBJECTS.ANIMATION.SELECTED:
                this.modal.draw(ctx);
            case OBJECTS.ANIMATION.ANIMATING:
                ctx.drawImage(
                    this.image, 
                    this.drawPositionX, 
                    this.drawPositionY,
                    this.width,
                    this.height
                );
                this.drawMouseOver(ctx);
                break
            case OBJECTS.ANIMATION.FINISHED:
                break 
        }
    }

    update(event){
        switch(this.state){
            case OBJECTS.ANIMATION.SELECTED:
                this.modal.update(event)
            case OBJECTS.ANIMATION.ANIMATING:
                break
            case OBJECTS.ANIMATION.FINISHED:
                break 
        }
    }

    createModal(){
        this.modal = new BuildTowerModal({position: {...this.center}});
    }

    drawMouseOver(ctx){
        if(this.isMouseOver)
            this.drawSelectionCircle(ctx);
    }

    setIsMouseOver(){
        if(this.isMouseOver === true)
            this.isMouseOver = false;
        else
            this.isMouseOver = true;
    }

    drawSelectionCircle(ctx){
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.center.radius, 0, Math.PI * 2);
        ctx.lineWidth = 4;
        ctx.strokeStyle = INTERFACE.COLOURS.GREEN;
        ctx.stroke();
        ctx.closePath();
    }

    collisionDetection(mouse){
        return checkCircleCollision(mouse, this.center);
    }

    towerFactory(tower){
        const newTowerStats = {
            position: {...this.position},
            cost: OBJECTS.TOWERINFORMATION[tower].cost,
            damage: OBJECTS.TOWERINFORMATION[tower].damage,
            firerate: OBJECTS.TOWERINFORMATION[tower].firerate,
            range: OBJECTS.TOWERINFORMATION[tower].range,
        }
        switch(tower){
            case OBJECTS.COLOURS.AMETHYST:
                return new AmethystTower(newTowerStats);
            case OBJECTS.COLOURS.DIAMOND:
                return new DiamondTower(newTowerStats);
            case OBJECTS.COLOURS.EMERALD:
                return new EmeraldTower(newTowerStats);
            case OBJECTS.COLOURS.RUBY:
                return new RubyTower(newTowerStats);
            case OBJECTS.COLOURS.SAPPHIRE:
                return new SapphireTower(newTowerStats);
            case OBJECTS.COLOURS.TOPAZ:
                return new TopazTower(newTowerStats);
        }
    }
}

