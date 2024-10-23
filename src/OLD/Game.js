// import { Input } from "./Input.js";
// import { AssetHandler } from "./AssetHandler.js";
// import { RenderHandler } from "./RenderHandler.js";
// import { GameTextHandler } from "./GameTextHandler.js";
// import { Enemy } from "./Enemy.js";
// import { Tower } from "./Tower.js";
// import { ENEMY_SIZE, TOWER_SIZE, HALF_TILE_SIZE} from "../Main.js";



export class Game {
    constructor(){
        this.input = new Input(this);
        this.assetHandler = new AssetHandler(this);
        this.renderHandler = new RenderHandler(this);
        this.gameTextHandler = new GameTextHandler(this);

    }



    randomPositiveOrNegativeNumber(range){
        const positiveOrNegative = Math.ceil((Math.random() - 0.5) * 2) < 1 ? -1 : 1
        return Math.floor(Math.random() * range) * positiveOrNegative;
    }


}

