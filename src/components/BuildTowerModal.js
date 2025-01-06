import * as OBJECTS from "../constants/objects.js";
import { MenuItemTower } from "./MenuItemTower.js";
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
        this.radius = 70;
        this.hexagonCorners = this.getHexagonCornerPositions();

        this.menu = this.initialiseMenu();
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

    initialiseMenu(){
        const array = [];
        for (let i = 0; i < 6; i++){
            array.push(new MenuItemTower({
                image: assets.get(`${towerIcons[i]}${OBJECTS.TYPES.TOWER}1`),
                position: this.hexagonCorners[i],
                option: towerIcons[i],
                cost: OBJECTS.TOWERINFORMATION[towerIcons[i]].cost,
            }));
        }
        return array;
    }
}
