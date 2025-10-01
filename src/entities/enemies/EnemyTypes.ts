import { FILE_NAMES } from "../../constants/assets.js";

export const ENEMY_TYPES = {
  zombieCheeks: {
    width: 32,
    height: 32,
    scale: 1.5,
    speed: 6,
    normalSprite: {
      walk: FILE_NAMES.ZOMBIE_CHEEKS_WALK,
      scream: FILE_NAMES.ZOMBIE_CHEEKS_SCREAM,
      death: FILE_NAMES.ZOMBIE_CHEEKS_DIE,
      idle: FILE_NAMES.ZOMBIE_CHEEKS_IDLE,
    },
    darkSprite: {
      walk: FILE_NAMES.ZOMBIE_DARK_CHEEKS_WALK,
      scream: FILE_NAMES.ZOMBIE_DARK_CHEEKS_SCREAM,
      death: FILE_NAMES.ZOMBIE_DARK_CHEEKS_DIE,
      idle: FILE_NAMES.ZOMBIE_DARK_CHEEKS_IDLE,
    },
  },

  zombieCrawler: {
    width: 64,
    height: 32,
    scale: 1.5,
    speed: 1,
    normalSprite: {
      walk: FILE_NAMES.ZOMBIE_CRAWLER_WALK,
      scream: FILE_NAMES.ZOMBIE_CRAWLER_ATTACK,
      death: FILE_NAMES.ZOMBIE_CRAWLER_DIE,
      idle: FILE_NAMES.ZOMBIE_CRAWLER_IDLE,
    },
    darkSprite: {
      walk: FILE_NAMES.ZOMBIE_DARK_CRAWLER_WALK,
      scream: FILE_NAMES.ZOMBIE_DARK_CRAWLER_ATTACK,
      death: FILE_NAMES.ZOMBIE_DARK_CRAWLER_DIE,
      idle: FILE_NAMES.ZOMBIE_DARK_CRAWLER_IDLE,
    },
  },
};
