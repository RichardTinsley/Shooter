import * as GAME from "../constants/game.js";
import { WASTELANDS_TILEMAP } from "../constants/levels.js";
import { assets } from "../utilities/assets.js";
import { EmptyTowerSpot } from "../components/EmptyTowerSpot.js";
import { create2DArray } from "../utilities/array.js";

export class Levels {
    constructor(){
        this.tileMap = create2DArray(WASTELANDS_TILEMAP, GAME.SIZES.COLUMNS);
        this.levelImage = assets.get('hellwortica');
    }

    draw(ctx){
        ctx.drawImage(this.levelImage, 0, 0);
    }
    
    emptyTowerSpots = () => {
        const emptyTowerSpots = [];   
        this.tileMap.forEach((row, y) => {
            row.forEach((symbol, x) => {
                if (symbol !== 0)
                    emptyTowerSpots.push(new EmptyTowerSpot({
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