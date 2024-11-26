import { Tower } from "../Tower.js";
import { assets } from "../../handlers/Assets.js";

export class EmptyTowerSpot extends Tower {
    constructor({
        position
    }){
        super({position});
        this.sprite.image = assets.get('towerSpot');
    }

    draw(ctx){
        super.draw(ctx);
    }

    update(event){
        super.update(event);
    }

    drawTower(ctx){
        super.drawTower(ctx);
    }

    updateTower(){
        super.updateTower();
    }

    shootEnemy(){
        return;
    }
}