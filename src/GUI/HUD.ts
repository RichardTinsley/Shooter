import { FILE_NAMES } from "../constants/assets.js";
import { COLOURS } from "../constants/colours.js";
import { SIZES } from "../constants/game.js";
import { Position } from "../constants/types.js";
import { Sprite } from "../entities/Sprite.js";
import { drawRectangle } from "../utilities/drawShapes.js";

export class HUDDisplay {
  // let timer = 0;
  private anchorPointX = this.position.x + SIZES.TILE;
  private anchorPointY = this.position.y + SIZES.TILE + 8;

  private lives = new Sprite(
    { x: this.anchorPointX, y: this.anchorPointY },
    FILE_NAMES.ICONS_LIVES,
    SIZES.TILE,
    SIZES.TILE
  );

  private coins = new Sprite(
    { x: this.anchorPointX * 3, y: this.anchorPointY },
    FILE_NAMES.ICONS_COINS,
    SIZES.TILE,
    SIZES.TILE
  );

  private experience = new Sprite(
    { x: this.anchorPointX * 5, y: this.anchorPointY },
    FILE_NAMES.ICONS_EXP,
    SIZES.TILE,
    SIZES.TILE
  );

  private mana = new Sprite(
    { x: this.anchorPointX * 7, y: this.anchorPointY },
    FILE_NAMES.ICONS_MANA,
    SIZES.TILE,
    SIZES.TILE
  );

  private waves = new Sprite(
    { x: this.anchorPointX * 11, y: this.anchorPointY },
    FILE_NAMES.ICONS_WAVES,
    SIZES.TILE,
    SIZES.TILE
  );

  private pause = new Sprite(
    { x: this.anchorPointX * 14, y: this.anchorPointY },
    FILE_NAMES.ICONS_PAUSE,
    SIZES.TILE,
    SIZES.TILE
  );

  private audio = new Sprite(
    { x: this.anchorPointX * 15, y: this.anchorPointY },
    FILE_NAMES.ICONS_AUDIO,
    SIZES.TILE,
    SIZES.TILE
  );

  private settings = new Sprite(
    { x: this.anchorPointX * 16, y: this.anchorPointY },
    FILE_NAMES.ICONS_SETTINGS,
    SIZES.TILE,
    SIZES.TILE
  );

  constructor(private position: Position) {}

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.lineWidth = 3;
    drawRectangle(
      ctx,
      this.position,
      SIZES.GAME_WIDTH - SIZES.TILE,
      SIZES.TILE + SIZES.TILE_HALF,
      COLOURS.DARKSHADOW,
      COLOURS.WHITE
    );

    this.lives.draw(ctx);
    this.coins.draw(ctx);
    this.experience.draw(ctx);
    this.mana.draw(ctx);
    this.waves.draw(ctx);
    this.pause.draw(ctx);
    this.audio.draw(ctx);
    this.settings.draw(ctx);
  }
  update(): void {}
}

//     static setLives(){
//         lives--;
//     }

//     static getCoins(){
//         return coins;
//     }

//     static buy(cost){
//         coins -= cost;
//     }

//     static setCoins(){//ENEMY TYPE in parameter affect gold.  BOSS or GoldEnemy etc
//         const newCoins = Math.floor(Math.random() * waves + 1);
//         coins += newCoins;
//         return '$' + newCoins
//     }

//     getExperience(){
//         return experience;
//     }

//     static setExperience(){//ENEMY TYPE in parameter affect experience.  BOSS or EmeraldEnemy etc
//         if (Math.random() * 10 > 1)
//             return 0

//         const newExperience = Math.floor(Math.random() * waves + 1);
//         experience += newExperience;
//         return newExperience + 'exp'
//     }

//     static getWave(){
//         return waves;
//     }

//     static setWave(){
//         waves++;
//     }

//     waveText(){
//         if(waves === 1)
//         {}
//     }

//     drawHUDBackground(ctx){
//         ctx.beginPath();
//         ctx.fillStyle = INTERFACE.COLOURS.DARKSHADOW;
//         ctx.fillRect(this.position.x + 2, this.position.y + 2, GAME.SIZES.TILE * 26 - 4, GAME.SIZES.TILE * 2 - 4);
//         ctx.closePath();
//     }
