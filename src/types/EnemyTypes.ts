import { FILE_NAMES } from "../constants/assets.js";

type sprite = {
  move: string;
  death: string;
  idle: string;
  attack: string;
  attack2?: string;
  attack3?: string;
};

export type ENEMY_TYPE = {
  width: number;
  height: number;
  scale: number;
  speed: number;
  drawOffsets: { x: number; y: number };
  widthDivisor: number;
  hitboxHeight: number;
  healthBarHeight: number;
  normal: sprite;
  dark?: sprite;
};

export const ENEMY_TYPES = new Map<string, ENEMY_TYPE>([
  [
    "zombieCheeks",
    {
      width: 32,
      height: 32,
      scale: 1.5,
      speed: 6,
      drawOffsets: { x: 0.0, y: 0.05 },
      widthDivisor: 1,
      hitboxHeight: 0.5,
      healthBarHeight: 1,
      normal: {
        move: FILE_NAMES.ZOMBIE_CHEEKS_WALK,
        attack: FILE_NAMES.ZOMBIE_CHEEKS_ATTACK,
        death: FILE_NAMES.ZOMBIE_CHEEKS_DIE,
        idle: FILE_NAMES.ZOMBIE_CHEEKS_IDLE,
      },
      dark: {
        move: FILE_NAMES.ZOMBIE_DARK_CHEEKS_WALK,
        attack: FILE_NAMES.ZOMBIE_DARK_CHEEKS_ATTACK,
        death: FILE_NAMES.ZOMBIE_DARK_CHEEKS_DIE,
        idle: FILE_NAMES.ZOMBIE_DARK_CHEEKS_IDLE,
      },
    },
  ],
  [
    "zombieCrawler",
    {
      width: 64,
      height: 32,
      scale: 1.5,
      speed: 1,
      drawOffsets: { x: 0.25, y: 0.1 },
      widthDivisor: 2,
      hitboxHeight: 0.25,
      healthBarHeight: 0.65,
      normal: {
        move: FILE_NAMES.ZOMBIE_CRAWLER_WALK,
        attack: FILE_NAMES.ZOMBIE_CRAWLER_ATTACK,
        death: FILE_NAMES.ZOMBIE_CRAWLER_DIE,
        idle: FILE_NAMES.ZOMBIE_CRAWLER_IDLE,
      },
      dark: {
        move: FILE_NAMES.ZOMBIE_DARK_CRAWLER_WALK,
        attack: FILE_NAMES.ZOMBIE_DARK_CRAWLER_ATTACK,
        death: FILE_NAMES.ZOMBIE_DARK_CRAWLER_DIE,
        idle: FILE_NAMES.ZOMBIE_DARK_CRAWLER_IDLE,
      },
    },
  ],
]);
