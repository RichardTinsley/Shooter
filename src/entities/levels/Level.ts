import { ALL_ASSETS, FILE_NAMES } from "../../constants/assets.js";
import { SIZES } from "../../constants/game.js";
import { Position } from "../../constants/types.js";
import { create2DArray } from "../../utilities/array.js";
import { EmptyTowerSpot } from "../towers/emptyTowerSpot.js";

export enum LEVEL_NAMES {
  TERRA_HAUTE,
  LAVONEY,
  HELLWORTICA,
}

export abstract class Level {
  levelImage = ALL_ASSETS.get(FILE_NAMES.LEVEL_LAVONEY);
  tileMap = create2DArray(this.getTileMap(), SIZES.COLUMNS);
  doodads: Array<any> = [];
  towerSpots: any;

  constructor() {
    this.towerSpots = this.emptyTowerSpots();
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.levelImage, 0, 0);
    this.towerSpots.forEach((towerSpot: EmptyTowerSpot) => towerSpot.draw(ctx));
  }

  update(): void {
    this.towerSpots.forEach((towerSpot: EmptyTowerSpot) => towerSpot.update());
  }

  abstract getTileMap(): Array<number>;

  abstract getWaypoints(): Array<Position>;

  emptyTowerSpots() {
    const emptyTowerSpots: any = [];
    this.tileMap.forEach((row, y) => {
      row.forEach((symbol, x) => {
        if (symbol !== 0)
          emptyTowerSpots.push(
            new EmptyTowerSpot(FILE_NAMES.TOWER_EMPTY_SPOT, 64, 64).setPosition(
              {
                x: x * SIZES.TILE + SIZES.TILE_HALF,
                y: y * SIZES.TILE + SIZES.TILE_HALF,
              }
            )
          );
      });
    });
    return emptyTowerSpots;
  }
}
