import * as OBJECTS from "../constants/objects.js";
import * as INTERFACE from "../constants/interface.js";
import { MenuItemTower } from "./MenuItemTower.js";
import { assets } from "../utilities/assets.js";

export class BuildTowerModal{
    constructor({
        position
    }){
        this.position = {
            x: position.x,
            y: position.y,
        };

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
    }

    draw(ctx){
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        this.drawHexagon(ctx);
        this.drawMenuItems(ctx);
        ctx.restore();
    }

    
    update(event){
        this.menuItemtower1.update(event);
        this.menuItemtower2.update(event);
        this.menuItemtower3.update(event);
        this.menuItemtower4.update(event);
        this.menuItemtower5.update(event);
        this.menuItemtower6.update(event);
    }

    drawHexagon(ctx){
        ctx.beginPath();
        ctx.strokeStyle = INTERFACE.COLOURS.WHITE;
        ctx.lineWidth = 5;
        ctx.lineJoin = "miter";
        // this.hexagonCorners.forEach(corner => {
        //     ctx.lineTo(corner.x, corner.y);
        // });
        ctx.closePath();
        ctx.stroke();
    }

    drawMenuItems(ctx){
        this.hexagonCorners.forEach(corner => {
            this.menuItemtower1.draw(ctx);
            this.menuItemtower2.draw(ctx);
            this.menuItemtower3.draw(ctx);
            this.menuItemtower4.draw(ctx);
            this.menuItemtower5.draw(ctx);
            this.menuItemtower6.draw(ctx);
        });
    }

    getHexagonCornerPositions(){
        const array = [];
        for (let i = 0; i < 6; i++){
            const rotation = (Math.PI / 3) * i;
            array.push({
                x: this.radius * Math.cos(rotation),
                y: this.radius * Math.sin(rotation)
            });
        }
        return array;
    }
}
