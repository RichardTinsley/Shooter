import { FILE_NAMES } from "../constants/assets.js";
import { COLOURS } from "../constants/colours.js";
import { SIZES } from "../constants/game.js";
import { Position } from "../constants/types.js";
import { Sprite } from "../entities/Sprite.js";
import { drawRectangle } from "../utilities/drawShapes.js";

export class HUDDisplay {
  private anchorPointX = this.position.x;
  private anchorPointY = this.position.y + SIZES.TILE + 8;
  private icons: Array<Sprite> = [];

  private names: Array<string> = [
    FILE_NAMES.ICONS_LIVES,
    FILE_NAMES.ICONS_COINS,
    FILE_NAMES.ICONS_EXP,
    FILE_NAMES.ICONS_WAVES,
    FILE_NAMES.ICONS_MANA,
    FILE_NAMES.ICONS_PAUSE,
    FILE_NAMES.ICONS_AUDIO,
    FILE_NAMES.ICONS_SETTINGS,
    FILE_NAMES.ICONS_TIMER,
  ];

  private spacing: number = SIZES.TILE;
  constructor(private position: Position) {
    this.icons = this.names.map((name, index) => {
      if (index === 1) this.spacing = SIZES.TILE * 4; //LIVES, COINS, EXPERIENCE, WAVES
      if (index === 5) this.spacing = SIZES.TILE * 7; //MANA SPACING
      if (index === 6) this.spacing = SIZES.TILE_HALF * 5; //BUTTONS
      if (index === 8) this.spacing = SIZES.TILE * 4; //TIMER

      return new Sprite(
        {
          x: (this.anchorPointX += this.spacing),
          y: this.anchorPointY,
        },
        name,
        SIZES.TILE,
        SIZES.TILE
      );
    });
  }

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

    this.icons.forEach((icon) => icon.draw(ctx));
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
