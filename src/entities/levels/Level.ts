import { Position } from "../../constants/types";

export enum LEVEL_NAMES {
  TERRA_HAUTE,
  LAVONEY,
  HELLWORTICA,
}

export abstract class Level {
  abstract levelImage: HTMLImageElement;
  abstract tileMap: Array<Array<number>>;
  abstract doodads: Array<any>;

  constructor() {}

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.levelImage, 0, 0);
  }

  abstract update(): void;

  abstract getTileMap(): Array<number>;

  abstract getWaypoints(): Array<Position>;

  emptyTowerSpots = () => {
    // const emptyTowerSpots = [];
    // this.tileMap.forEach((row, y) => {
    //   row.forEach((symbol, x) => {
    //     if (symbol !== 0)
    //       emptyTowerSpots.push(
    //         new EmptyTowerSpot({
    //           position: {
    //             x: x * GAME.SIZES.TILE + GAME.SIZES.TILE_HALF,
    //             y: y * GAME.SIZES.TILE + GAME.SIZES.TILE_HALF,
    //           },
    //         })
    //       );
    //   });
    // });
    // return emptyTowerSpots;
  };
}
