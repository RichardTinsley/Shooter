const EFFECTS_URL: string = "./images/effects/";
const ENEMIES_URL: string = "./images/enemies/";
const PROJECTILES_URL: string = "./images/projectiles/";
const TOWERS_URL: string = "./images/towers/";
const UI_URL: string = "./images/UI/";

const MUSIC_URL: string = "./audio/";

export const ALL_ASSETS = new Map();

export const TYPES = {
  NORMAL: "Plain",
  MENUITEM: "MenuItem",
  ENEMY: "Enemy",
  TOWER: "Tower",
  PROJECTILE: "Projectile",
  EFFECT: "Effect",
};

export const TOWERS = {
  TOPAZ: "topaz",
  RUBY: "ruby",
  SAPPHIRE: "sapphire",
  EMERALD: "emerald",
  AMETHYST: "amethyst",
  CITRINE: "citrine",
  SILVER: "silver",
  GOLD: "gold",
  DIAMOND: "diamond",
  OBSIDIAN: "obsidian",
  OPAL: "opal",
  URANIUM: "uranium",
};

const URL_NUMBER = {
  ONE: " (1)",
  TWO: " (2)",
  THREE: " (3)",
  FOUR: " (4)",
  FIVE: " (5)",
  SIX: " (6)",
};

// prettier-ignore
export const FILE_NAMES: Record<string, string> = {
  DSLOGO: "DsShieldLogo.png",

  MUSIC_MAIN_MENU: "mainMenu.mp3",

  TOWER_AMETHYST_1: `${TOWERS.AMETHYST}${TYPES.TOWER}${URL_NUMBER.ONE}.png`,
  
  PROJECTILE_SAPPHIRE_1: "Iceball_84x9.png",
};

// prettier-ignore
export const ASSET_LIST: string[][] = [
  //GUI
  [`${FILE_NAMES.DSLOGO}`, `${UI_URL}${FILE_NAMES.DSLOGO}`],
  // ['hellwortica',  './images/levels/hellwortica/hellwortica.png'],
  // ['towerSpot',   './images/levels/towerSpot.png'],
  // ['bossWave',    './audio/bossWave.ogg'],
  // ['menuMusic',   './audio/menuMusic.mp3'],
  // ['blood',       `${EFFECTS_URL}blood_110x110.png`],
  // ['blueExplosion',   `${EFFECTS_URL}blueExplosion_256x256.png`],
  // ['sapphireProjectile',    `${PROJECTILES_URL}sapphireProjectile_50x25.png`],

  //MUSIC 
  [`${FILE_NAMES.MUSIC_MAIN_MENU}`, `${MUSIC_URL}${FILE_NAMES.MUSIC_MAIN_MENU}`],
  //ENEMIES
  // [`${TYPES.ENEMY}${URL_NUMBER.ONE}`, `${ENEMIES_URL}${TYPES.ENEMY}${URL_NUMBER.ONE}.png`],
  // [`${TYPES.ENEMY}${URL_NUMBER.TWO}`, `${ENEMIES_URL}${TYPES.ENEMY}${URL_NUMBER.TWO}.png`],
  //TOWERS
  [`${FILE_NAMES.TOWER_AMETHYST_1}`, `${TOWERS_URL}${FILE_NAMES.TOWER_AMETHYST_1}`],

  //PROJECTILES
  [`${FILE_NAMES.PROJECTILE_SAPPHIRE_1}`, `${PROJECTILES_URL}${FILE_NAMES.PROJECTILE_SAPPHIRE_1}`],
];
