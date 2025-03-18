import * as OBJECTS from "../../constants/objects.js"
import { Tower } from "../Tower.js";
import { assets } from "../../utilities/assets.js";
import { SapphireProjectile } from "../projectiles/SapphireProjectile.js";

export class SapphireTower extends Tower{
    constructor({
        position,
        image,
        cost,
        damage,
        firerate,
        range
    }){
        super({ 
            image: image ?? assets.get(`${OBJECTS.COLOURS.SAPPHIRE}${OBJECTS.TYPES.TOWER}1`),
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
        if(this.target){
            projectiles.push(new SapphireProjectile({
                width: 50,
                height: 25,
                damage: this.damage,
                enemy: this.target, 
                position: {...this.muzzle}, 
            }));
            this.shootTimer = 0;
            this.target = null;
        }
        this.towerState = OBJECTS.STATES.RELOADING;
    }
}