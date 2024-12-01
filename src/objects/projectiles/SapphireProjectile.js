import * as OBJECTS from "../../constants/objects.js"
import { assets } from "../../utilities/assets.js";
import { Projectile } from "./Projectile.js";

export class SapphireProjectile extends Projectile{
    constructor({
        image, 
        position,
        width,
        height,
        damage,
        enemy,
    }){
        super({
            image: image ?? assets.get('sapphireProjectile'),
            position,
            width: width ?? 50,
            height: height ?? 25,
            damage,
            enemy,
        });

        this.speed = 2;
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

    update(event){
        switch(this.state){
            case OBJECTS.ANIMATION.ANIMATING:
                super.update(event);
                break
            case OBJECTS.ANIMATION.FINISHED:
                break
        }
    }
}