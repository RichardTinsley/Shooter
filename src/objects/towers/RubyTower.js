import * as OBJECTS from "../../constants/objects.js"
import { Tower } from "../Tower.js";
import { assets } from "../../utilities/assets.js";

export class RubyTower extends Tower{
    constructor({
        image,
        width,
        height,
        position,
        scale,
    }){
        super({ 
            image: image ?? assets.get(`${OBJECTS.COLOURS.RUBY}${OBJECTS.TYPES.TOWER}1`),
            width: width ?? OBJECTS.SIZES.TOWER,
            height: height ?? OBJECTS.SIZES.TOWER,
            position,
            scale: scale ?? 1, 
        });
        this.isOccupied = true;

        this.damage = 50;
        this.range = 150;
        this.cooldown = 20;
        this.shootTimer = this.cooldown;

        this.towerRange = {
            x: this.center.x,
            y: this.center.y,
            radius: this.range
        };
    }

    draw(ctx){
        switch(this.state){
            case OBJECTS.ANIMATION.ANIMATING:
                super.draw(ctx);
                break
            case OBJECTS.ANIMATION.FINISHED:
                break
        }
    }

    update(event, enemies, projectiles){
        switch(this.state){
            case OBJECTS.ANIMATION.ANIMATING:
                super.update(event);
                this.incrementShootTimer(event);
                this.targetEnemy(enemies);
                this.shootEnemy(projectiles);
                break
            case OBJECTS.ANIMATION.FINISHED:
                break
        }
    }

    shootEnemy(projectiles){
        // if(this.shootTimer >= this.cooldown && this.target){
        //     projectiles.push(new SapphireProjectile({
        //         width: 50,
        //         height: 25,
        //         damage: this.damage,
        //         enemy: this.target, 
        //         position: {...this.muzzle}, 
        //     }));
        //     this.shootTimer = 0;
        //     this.target = null;
        // }
    }
}