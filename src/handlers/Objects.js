import { OBJECT_COLOURS, OBJECT_TYPES, TOWER_SIZE } from "../constants/objects.js";
import { assets } from "./Assets.js";
import { Sprite } from "../objects/Sprite.js";

export class Objects{
    constructor(emptyTowerSpots){
        this.towers = emptyTowerSpots();

        
        this.test = new Sprite({
            image: assets.get(`${OBJECT_COLOURS.SAPPHIRE}${OBJECT_TYPES.TOWER}1`),
            size: TOWER_SIZE, 
            position: {x: 100, y: 100}
        });
    }

    draw(ctx){
        this.towers.forEach(tower => tower.draw(ctx));
        this.test.draw(ctx);
    }

    update(event){
        this.towers.forEach(tower => tower.update(event));
    }
}