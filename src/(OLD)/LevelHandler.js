import { COLUMNS, TILE_SIZE, GAME_HEIGHT, GAME_WIDTH } from "./constants/constants.js";
import { WASTELANDS_TILEMAP } from "./constants/levelData.js";
import { assets } from "./AssetLoader.js";
import { EmptyTower } from "./entities/towers/emptyTower.js";

const levelImage = new OffscreenCanvas(GAME_WIDTH, GAME_HEIGHT);
const context = levelImage.getContext('2d');

export class LevelHandler {
    constructor(){
        this.tileMap2D = this.create2DTileMapArray(WASTELANDS_TILEMAP);
        this.tilesetImage = assets.get('wastelands');
        this.tilesetImageWidth = Math.floor(this.tilesetImage.width / TILE_SIZE);
        this.buildMap();
    }

    draw(ctx){
        ctx.drawImage(levelImage, 0, 0);
    }
    
    create2DTileMapArray(tileMap){
        const TileMapArray = [];
        for (let i = 0; i < tileMap.length; i+= COLUMNS)
            TileMapArray.push(tileMap.slice(i, i + COLUMNS));
        return TileMapArray;
    }
    
    buildMap(){
        for (let rowIndex = 0; rowIndex < this.tileMap2D.length; rowIndex++)
            for(let columnIndex = 0; columnIndex < this.tileMap2D[rowIndex].length; columnIndex++){
                const tile = this.tileMap2D[rowIndex][columnIndex];
                this.drawTile(context, tile - 1, columnIndex * TILE_SIZE, rowIndex * TILE_SIZE); // -1 to zero index
            }
    }

    drawTile(context, tile, x, y) {    
        context.drawImage(
            this.tilesetImage,
            (tile % this.tilesetImageWidth) * TILE_SIZE,
            Math.floor(tile / this.tilesetImageWidth) * TILE_SIZE,
            TILE_SIZE, TILE_SIZE,
            x, y, TILE_SIZE, TILE_SIZE,
        );
    }

    emptyTowerSpots = () => {
        const emptyTowerSpots = [];   
        this.tileMap2D.forEach((row, y) => {
            row.forEach((symbol, x) => {
                if (symbol == 19){
                    emptyTowerSpots.push(new EmptyTower({
                            position: { 
                                x: x * TILE_SIZE, 
                                y: y * TILE_SIZE 
                            }}
                        )
                    ) 
                }
            })
        })
        return emptyTowerSpots;
    }
}