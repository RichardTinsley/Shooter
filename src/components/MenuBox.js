import * as GAME from "../constants/game.js";
import { HUD_MAP } from "../constants/interface.js";
import { assets } from "../utilities/assets.js";
import { create2DArray } from "../utilities/array.js";

const levelImage = new OffscreenCanvas(GAME.SIZES.GAME_WIDTH, GAME.SIZES.GAME_HEIGHT);
const context = levelImage.getContext('2d');

export class MenuBox {
    constructor({
        position
    }){
        this.tileMap =  create2DArray(HUD_MAP, GAME.SIZES.COLUMNS - 14);
        this.menuImage = assets.get('menuBox');
        this.menuImageWidth = Math.floor(this.menuImage.width / GAME.SIZES.TILE);
        this.buildMap();
        this.position = position;
    }

    draw(ctx){
        ctx.drawImage(levelImage, this.position.x, this.position.y);
    }
    
    buildMap(){
        for (let rowIndex = 0; rowIndex < this.tileMap.length; rowIndex++)
            for(let columnIndex = 0; columnIndex < this.tileMap[rowIndex].length; columnIndex++){
                const tile = this.tileMap[rowIndex][columnIndex];
                this.drawTile(context, tile - 1, columnIndex * GAME.SIZES.TILE, rowIndex * GAME.SIZES.TILE); // -1 to zero index
            }
    }

    drawTile(context, tile, x, y){    
        context.drawImage(
            this.menuImage,
            (tile % this.menuImageWidth) * GAME.SIZES.TILE,
            Math.floor(tile / this.menuImageWidth) * GAME.SIZES.TILE,
            GAME.SIZES.TILE, GAME.SIZES.TILE,
            x, y, GAME.SIZES.TILE, GAME.SIZES.TILE,
        );
    }
}