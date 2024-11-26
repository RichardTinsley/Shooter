import { GAME_SIZES } from "../constants/game.js";
import { WASTELANDS_TILEMAP } from "../constants/levels.js";
import { assets } from "../utilities/assets.js";
import { Tower } from "../objects/towers/Tower.js"
import { TOWER_SIZE } from "../constants/objects.js";

const levelImage = new OffscreenCanvas(GAME_SIZES.GAME_WIDTH, GAME_SIZES.GAME_HEIGHT);
const context = levelImage.getContext('2d');

export class Levels {
    constructor(){
        this.tileMap2D = this.create2DTileMapArray(WASTELANDS_TILEMAP);
        this.tilesetImage = assets.get('wastelands');
        this.tilesetImageWidth = Math.floor(this.tilesetImage.width / GAME_SIZES.TILE_SIZE);
        this.buildMap();
    }

    draw(ctx){
        ctx.drawImage(levelImage, 0, 0);
    }
    
    create2DTileMapArray(tileMap){
        const TileMapArray = [];
        for (let i = 0; i < tileMap.length; i+= GAME_SIZES.COLUMNS)
            TileMapArray.push(tileMap.slice(i, i + GAME_SIZES.COLUMNS));
        return TileMapArray;
    }
    
    buildMap(){
        for (let rowIndex = 0; rowIndex < this.tileMap2D.length; rowIndex++)
            for(let columnIndex = 0; columnIndex < this.tileMap2D[rowIndex].length; columnIndex++){
                const tile = this.tileMap2D[rowIndex][columnIndex];
                this.drawTile(context, tile - 1, columnIndex * GAME_SIZES.TILE_SIZE, rowIndex * GAME_SIZES.TILE_SIZE); // -1 to zero index
            }
    }

    drawTile(context, tile, x, y){    
        context.drawImage(
            this.tilesetImage,
            (tile % this.tilesetImageWidth) * GAME_SIZES.TILE_SIZE,
            Math.floor(tile / this.tilesetImageWidth) * GAME_SIZES.TILE_SIZE,
            GAME_SIZES.TILE_SIZE, GAME_SIZES.TILE_SIZE,
            x, y, GAME_SIZES.TILE_SIZE, GAME_SIZES.TILE_SIZE,
        );
    }

    emptyTowerSpots = () => {
        const emptyTowerSpots = [];   
        this.tileMap2D.forEach((row, y) => {
            row.forEach((symbol, x) => {
                if (symbol === 19)
                    emptyTowerSpots.push(new Tower({
                        image: assets.get('towerSpot'),
                        position: { 
                            x: x * GAME_SIZES.TILE_SIZE + GAME_SIZES.TILE_SIZE_HALF, 
                            y: y * GAME_SIZES.TILE_SIZE + GAME_SIZES.TILE_SIZE_HALF 
                        },
                        size: TOWER_SIZE
                    })
                ) 
            })
        })
        return emptyTowerSpots;
    }
}