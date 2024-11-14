import { LEVELS, COLUMNS, TILE_SIZE } from "./constants/constants.js";
import { assets } from "./AssetLoader.js";
import { Tile } from "./Tile.js";
import { TERRA_HAUTE_TILEMAP, TERRA_HAUTE_WAYPOINTS } from "./constants/terraHaute.js";

export class TileHandler {
    constructor(currentLevel){
        this.backgroundImage = assets.get('levelOne');
        this.tileMap = this.populateTileMapArray(currentLevel);
        this.waypoints = this.populateWaypointsArray(currentLevel);
        this.tiles = this.populateTilesArray();
    }

    draw(ctx){
        // ctx.drawImage(this.backgroundImage, 0, 0);
        this.tiles.forEach(tile => tile.draw(ctx));
    }

    populateTilesArray(){
        const tileMap2DArray = [];
        for (let i = 0; i < this.tileMap.length; i+= COLUMNS)
            tileMap2DArray.push(this.tileMap.slice(i, i + COLUMNS));
        
        const tiles = [];
        tileMap2DArray.forEach((row, y) => {
            row.forEach((symbol, x) => {
                if (symbol != 0) 
                    tiles.push(
                        new Tile({ 
                            position: { 
                                x: x * TILE_SIZE, 
                                y: y * TILE_SIZE 
                            } 
                        }));
                    })
                })
        return tiles;
    }

    createBackgroundImage(currentLevel){
        if(currentLevel === LEVELS.TERRA_HAUTE){
            return assets.get('levelOne');    
        }
    }

    populateTileMapArray(currentLevel){
        if(currentLevel === LEVELS.TERRA_HAUTE){
            return TERRA_HAUTE_TILEMAP;
        }
    }

    populateWaypointsArray(currentLevel){
        if(currentLevel === LEVELS.TERRA_HAUTE){
            return TERRA_HAUTE_WAYPOINTS;
        }
    }
}