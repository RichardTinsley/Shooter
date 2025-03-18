import * as OBJECTS from "../constants/objects.js";
import { MenuItemImage } from "./MenuItemImage.js";
import { assets } from "../utilities/assets.js";

const towerIcons = [
    OBJECTS.COLOURS.EMERALD,
    OBJECTS.COLOURS.DIAMOND,
    OBJECTS.COLOURS.AMETHYST,
    OBJECTS.COLOURS.RUBY,
    OBJECTS.COLOURS.TOPAZ,
    OBJECTS.COLOURS.SAPPHIRE,
]

export class BuildTowerModal{
    constructor({
        position
    }){
        this.position = {...position};
        this.radius = 0;

        this.menu = this.initialiseMenu();

        this.globalAlpha = 0;
        this.delta = 0.045;
        this.speed = 5
    }

    draw(ctx){
        ctx.globalAlpha = this.globalAlpha;
        this.menu.forEach(item => item.draw(ctx));
        ctx.globalAlpha = 1;
    }

    update(event){
        if(this.globalAlpha < 1)
            this.globalAlpha += this.delta;

        this.menu.forEach(item => item.update(event));
        this.expandMenu();
    }

    expandMenu(){
        if (this.radius < 70){
            for (let i = 0; i < 6; i++){
                const rotation = (Math.PI / 3) * i;
                this.menu[i].updatePosition({
                        x: (this.radius * Math.cos(rotation)) + this.position.x,
                        y: (this.radius * Math.sin(rotation)) + this.position.y
                });
            }
            this.radius += this.speed;
        }
    }

    initialiseMenu(){
        const array = [];
        for (let i = 0; i < 6; i++){
            array.push(new MenuItemImage({
                image: assets.get(`${towerIcons[i]}${OBJECTS.TYPES.TOWER}1`),
                position: {...this.position},
                option: towerIcons[i],
                cost: OBJECTS.TOWERINFORMATION[towerIcons[i]].cost,
                scale: 0.65,
            }));
        }
        return array;
    }
}
