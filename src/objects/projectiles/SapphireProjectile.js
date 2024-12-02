import * as OBJECTS from "../../constants/objects.js"
import { assets } from "../../utilities/assets.js";
import { SapphireExplosion } from "../effects/SapphireExplosion.js";
import { Projectile } from "./Projectile.js";

export class SapphireProjectile extends Projectile{
    constructor({
        image, 
        width,
        height,
        position,
        damage,
        enemy,
    }){
        super({
            image: image ?? assets.get('sapphireProjectile'),
            width: width ?? 50,
            height: height ?? 25,
            position,
            damage,
            enemy,
        });

        this.drawPositionX = 0 - this.threeQuarterWidth;
        this.drawPositionY = 0 - this.halfHeight - 5;

        this.speed = 3;
        this.center = {
            x: this.position.x,
            y: this.position.y - this.halfHeight,
            radius: this.halfHeight - 5,
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

    update(event, effects){
        switch(this.state){
            case OBJECTS.ANIMATION.ANIMATING:
                super.update(event, effects);
                break
            case OBJECTS.ANIMATION.FINISHED:
                break
        }
    }

    addExplosion(effects){
        effects.push(new SapphireExplosion({
            position: this.center,
        }));
    }
}