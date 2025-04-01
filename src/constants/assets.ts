const EFFECTS_URL: string = "./images/effects/";
const ENEMIES_URL: string = "./images/enemies/";
const PROJECTILES_URL: string = "./images/projectiles/";
const TOWERS_URL: string = "./images/towers/";
const UI_URL: string = "./images/UI/";
const LEVELS_URL: string = "./images/levels/";
const MUSIC_URL: string = "./audio/";

export const ALL_ASSETS = new Map();

// prettier-ignore
export const FILE_NAMES: Record<string, string> = {
  DSLOGO: "DsShieldLogo.png",
  LEVEL_LAVONEY: "lavoney.png",

  MUSIC_MAIN_MENU: "mainMenu.mp3",

  TOWER_AMETHYST_1: `amethystTower (1).png`,
  
  PROJECTILE_SAPPHIRE_1: "Iceball_84x9.png",
};

// prettier-ignore
export const ASSET_LIST: string[][] = [
  //BUI
  [`${FILE_NAMES.DSLOGO}`, `${UI_URL}${FILE_NAMES.DSLOGO}`],
  
  //LEVELS
  [`${FILE_NAMES.LEVEL_LAVONEY}`, `${LEVELS_URL}${FILE_NAMES.LEVEL_LAVONEY}`],

  //MUSIC 
  [`${FILE_NAMES.MUSIC_MAIN_MENU}`, `${MUSIC_URL}${FILE_NAMES.MUSIC_MAIN_MENU}`],

  //SOUNDFX

  //ENEMIES

  //TOWERS
  [`${FILE_NAMES.TOWER_AMETHYST_1}`, `${TOWERS_URL}${FILE_NAMES.TOWER_AMETHYST_1}`],

  //PROJECTILES
  [`${FILE_NAMES.PROJECTILE_SAPPHIRE_1}`, `${PROJECTILES_URL}${FILE_NAMES.PROJECTILE_SAPPHIRE_1}`],

  //EFFECTS
];
