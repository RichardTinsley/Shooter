import * as OBJECTS from "../constants/objects.js";
import { MenuItemTower } from "./MenuItemTower.js";
import { assets } from "../utilities/assets.js";

export class BuildTowerModal{
    constructor({
        position
    }){
        this.position = {...position};
        this.radius = 70;
        this.hexagonCorners = this.getHexagonCornerPositions();

        this.menuItemtower1 = new MenuItemTower({
            image: assets.get(`${OBJECTS.COLOURS.AMETHYST}${OBJECTS.TYPES.TOWER}1`),
            position: this.hexagonCorners[0],
        })
        this.menuItemtower2 = new MenuItemTower({
            image: assets.get(`${OBJECTS.COLOURS.DIAMOND}${OBJECTS.TYPES.TOWER}1`),
            position: this.hexagonCorners[1],
        })
        this.menuItemtower3 = new MenuItemTower({
            image: assets.get(`${OBJECTS.COLOURS.EMERALD}${OBJECTS.TYPES.TOWER}1`),
            position: this.hexagonCorners[2],
        })
        this.menuItemtower4 = new MenuItemTower({
            image: assets.get(`${OBJECTS.COLOURS.RUBY}${OBJECTS.TYPES.TOWER}1`),
            position: this.hexagonCorners[3],
        })
        this.menuItemtower5 = new MenuItemTower({
            image: assets.get(`${OBJECTS.COLOURS.SAPPHIRE}${OBJECTS.TYPES.TOWER}1`),
            position: this.hexagonCorners[4],
        })
        this.menuItemtower6 = new MenuItemTower({
            image: assets.get(`${OBJECTS.COLOURS.TOPAZ}${OBJECTS.TYPES.TOWER}1`),
            position: this.hexagonCorners[5],
        })

        this.menu = [
            this.menuItemtower1,
            this.menuItemtower2,
            this.menuItemtower3,
            this.menuItemtower4,
            this.menuItemtower5,
            this.menuItemtower6,
        ];
    }

    draw(ctx){
        this.menu.forEach(item => item.draw(ctx));
    }

    update(event){
        this.menu.forEach(item => item.update(event));
    }

    getHexagonCornerPositions(){
        const array = [];
        for (let i = 0; i < 6; i++){
            const rotation = (Math.PI / 3) * i;
            array.push({
                x: (this.radius * Math.cos(rotation)) + this.position.x,
                y: (this.radius * Math.sin(rotation)) + this.position.y
            });
        }
        return array;
    }
}
