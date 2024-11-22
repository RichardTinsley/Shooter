import { COLUMNS, TILE_SIZE, GAME_HEIGHT, GAME_WIDTH } from "./constants/constants.js";
import { WASTELANDS_TILEMAP, WASTELANDS_WAYPOINTS } from "./constants/levelData.js";
import { assets } from "./AssetLoader.js";
import { Tower } from "./entities/Tower.js";

export class MapHandler {
    constructor(){
        this.tileMap = this.create2DTileMapArray(WASTELANDS_TILEMAP);
        this.waypoints = WASTELANDS_WAYPOINTS;
        this.image = assets.get('wastelands');
        this.stateImage = new OffscreenCanvas(GAME_WIDTH, GAME_HEIGHT);
        this.context = this.stateImage.getContext('2d');
        this.numberOfTilesWidth = Math.floor(this.image.width / TILE_SIZE);
        this.buildMap();
    }

    draw(ctx){
        ctx.drawImage(this.stateImage, 0, 0);
    }

    buildMap(){
        for (let rowIndex = 0; rowIndex < this.tileMap.length; rowIndex++)
            for(let columnIndex = 0; columnIndex < this.tileMap[rowIndex].length; columnIndex++){
                const tile = this.tileMap[rowIndex][columnIndex];
                this.drawTile(this.context, tile - 1, columnIndex * TILE_SIZE, rowIndex * TILE_SIZE); // -1 to zero index
            }
    }

    drawTile(ctx, tile, x, y) {    
        ctx.drawImage(
            this.image,
            (tile % this.numberOfTilesWidth) * TILE_SIZE,
            Math.floor(tile / this.numberOfTilesWidth) * TILE_SIZE,
            TILE_SIZE, TILE_SIZE,
            x, y, TILE_SIZE, TILE_SIZE,
        );
    }

    create2DTileMapArray(tileMap){
        const TileMapArray = [];
        for (let i = 0; i < tileMap.length; i+= COLUMNS)
            TileMapArray.push(tileMap.slice(i, i + COLUMNS));
        return TileMapArray;
    }

    towerPlacementSpots = () => {
        const towerSpots = [];
        for (let rowIndex = 0; rowIndex < this.tileMap.length; rowIndex++)
            for(let columnIndex = 0; columnIndex < this.tileMap[rowIndex].length; columnIndex++){
                if (this.tileMap[rowIndex][columnIndex] == 19){
                    towerSpots.push(new Tower({
                        // towerSpot,
                        // position: { 
                        //     x: rowIndex * TILE_SIZE, 
                        //     y: columnIndex * TILE_SIZE 
                        //     }
                    }))
                }
            }
    
        // this.tileMap.forEach((row, y) => {
        //     row.forEach((symbol, x) => {
        //         if (symbol == 19){
        //             towerSpots.push(new Tower(
        //                     towerSpot
        //                 //     {
        //                 //     towerSpot,
        //                 //     position: { 
        //                 //         x: x * TILE_SIZE, 
        //                 //         y: y * TILE_SIZE 
        //                 //     },
        //                 // }
        //                 )
        //             ) 
        //             console.log(towerSpots)
        //         }
        //     })
        // })
        return towerSpots;
    }
}