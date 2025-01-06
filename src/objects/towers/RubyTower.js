import * as OBJECTS from "../../constants/objects.js"
import { Tower } from "../Tower.js";
import { assets } from "../../utilities/assets.js";

export class RubyTower extends Tower{
    constructor({
        position,
        image,
        cost,
        damage,
        firerate,
        range
    }){
        super({ 
            image: image ?? assets.get(`${OBJECTS.COLOURS.RUBY}${OBJECTS.TYPES.TOWER}1`),
            width: OBJECTS.SIZES.TOWER,
            height: OBJECTS.SIZES.TOWER,
            position,
            scale: 1, 
            cost,
            damage,
            firerate,
            range 
        });
    }

    draw(ctx){
        super.draw(ctx);
    }

    update(event, enemies, projectiles){
        super.update(event, enemies, projectiles);
    }

    shootEnemy(projectiles){

    }
}