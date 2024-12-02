import * as GAME from "../constants/game.js";
import { WASTELANDS_TILEMAP } from "../constants/levels.js";
import { assets } from "../utilities/assets.js";
import { Tower } from "../objects/Tower.js"

const levelImage = new OffscreenCanvas(GAME.SIZES.GAME_WIDTH, GAME.SIZES.GAME_HEIGHT);
const context = levelImage.getContext('2d');

export class Levels {
    constructor(){
        this.tileMap2D = this.create2DTileMapArray(WASTELANDS_TILEMAP);
        this.tilesetImage = assets.get('wastelands');
        this.tilesetImageWidth = Math.floor(this.tilesetImage.width / GAME.SIZES.TILE);
        this.buildMap();
    }

    draw(ctx){
        ctx.drawImage(levelImage, 0, 0);
    }
    
    create2DTileMapArray(tileMap){
        const TileMapArray = [];
        for (let i = 0; i < tileMap.length; i+= GAME.SIZES.COLUMNS)
            TileMapArray.push(tileMap.slice(i, i + GAME.SIZES.COLUMNS));
        return TileMapArray;
    }
    
    buildMap(){
        for (let rowIndex = 0; rowIndex < this.tileMap2D.length; rowIndex++)
            for(let columnIndex = 0; columnIndex < this.tileMap2D[rowIndex].length; columnIndex++){
                const tile = this.tileMap2D[rowIndex][columnIndex];
                this.drawTile(context, tile - 1, columnIndex * GAME.SIZES.TILE, rowIndex * GAME.SIZES.TILE); // -1 to zero index
            }
    }

    drawTile(context, tile, x, y){    
        context.drawImage(
            this.tilesetImage,
            (tile % this.tilesetImageWidth) * GAME.SIZES.TILE,
            Math.floor(tile / this.tilesetImageWidth) * GAME.SIZES.TILE,
            GAME.SIZES.TILE, GAME.SIZES.TILE,
            x, y, GAME.SIZES.TILE, GAME.SIZES.TILE,
        );
    }

    emptyTowerSpots = () => {
        const emptyTowerSpots = [];   
        this.tileMap2D.forEach((row, y) => {
            row.forEach((symbol, x) => {
                if (symbol === 19)
                    emptyTowerSpots.push(new Tower({
                        position: { 
                            x: x * GAME.SIZES.TILE + GAME.SIZES.TILE_HALF, 
                            y: y * GAME.SIZES.TILE + GAME.SIZES.TILE_HALF 
                        },
                    })
                ) 
            })
        })
        return emptyTowerSpots;
    }
}