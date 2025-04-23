const EFFECTS_URL: string = "./images/effects/";
const ENEMIES_URL: string = "./images/enemies/";
const ZOMBIES_URL: string = "./images/enemies/zombies/";
const PROJECTILES_URL: string = "./images/projectiles/";
const TOWERS_URL: string = "./images/towers/";
const UI_URL: string = "./images/UI/";
const LEVELS_URL: string = "./images/levels/";
const MUSIC_URL: string = "./audio/";
const ICONS_URL: string = "./images/UI/icons/";

export const ALL_ASSETS = new Map();

// prettier-ignore
export const FILE_NAMES: Record<string, string> = {
  DSLOGO: "DsShieldLogo.png",
  LEVEL_LAVONEY: "lavoney.png",

  ICONS_LIVES: "lives.png",
  ICONS_COINS: "coins.png",
  ICONS_EXP: "experience.png",
  ICONS_MANA: "mana.png",
  ICONS_WAVES: "waves.png",
  ICONS_PAUSE: "pause.png",
  ICONS_AUDIO: "audio.png",
  ICONS_SETTINGS: "settings.png",
  ICONS_TIMER: "timer.png",

  MUSIC_MAIN_MENU: "mainMenu.mp3",

  TOWER_EMPTY_SPOT: "emptyTowerSpot.png",
  TOWER_AMETHYST_1: "amethystTower (1).png",
  
  PROJECTILE_SAPPHIRE_1: "Iceball_84x9.png", 

  ZOMBIE_DARKCHEEKS_WALK: "zombie_dark_cheeks_walk.png",
  ZOMBIE_DARKCHEEKS_DIE: "zombie_dark_cheeks_die.png",
  ZOMBIE_DARKCHEEKS_IDLE: "zombie_dark_cheeks_idle.png",
  ZOMBIE_DARKCHEEKS_SCREAM: "zombie_dark_cheeks_scream.png",

  ZOMBIE_CHEEKS_WALK: "zombie_cheeks_walk.png",
  ZOMBIE_CHEEKS_DIE: "zombie_cheeks_die.png",
  ZOMBIE_CHEEKS_IDLE: "zombie_cheeks_idle.png",
  ZOMBIE_CHEEKS_SCREAM: "zombie_cheeks_scream.png",
  
};

// prettier-ignore
export const ASSET_LIST: string[][] = [
  //GUI
  [`${FILE_NAMES.DSLOGO}`, `${UI_URL}${FILE_NAMES.DSLOGO}`],
  //LEVELS
  [`${FILE_NAMES.LEVEL_LAVONEY}`, `${LEVELS_URL}${FILE_NAMES.LEVEL_LAVONEY}`],

  //ICONS
  [`${FILE_NAMES.ICONS_LIVES}`, `${ICONS_URL}${FILE_NAMES.ICONS_LIVES}`], 
  [`${FILE_NAMES.ICONS_COINS}`, `${ICONS_URL}${FILE_NAMES.ICONS_COINS}`], 
  [`${FILE_NAMES.ICONS_EXP}`, `${ICONS_URL}${FILE_NAMES.ICONS_EXP}`], 
  [`${FILE_NAMES.ICONS_MANA}`, `${ICONS_URL}${FILE_NAMES.ICONS_MANA}`], 
  [`${FILE_NAMES.ICONS_WAVES}`, `${ICONS_URL}${FILE_NAMES.ICONS_WAVES}`], 
  [`${FILE_NAMES.ICONS_PAUSE}`, `${ICONS_URL}${FILE_NAMES.ICONS_PAUSE}`], 
  [`${FILE_NAMES.ICONS_AUDIO}`, `${ICONS_URL}${FILE_NAMES.ICONS_AUDIO}`], 
  [`${FILE_NAMES.ICONS_SETTINGS}`, `${ICONS_URL}${FILE_NAMES.ICONS_SETTINGS}`], 
  [`${FILE_NAMES.ICONS_TIMER}`, `${ICONS_URL}${FILE_NAMES.ICONS_TIMER}`], 

  //MUSIC 
  [`${FILE_NAMES.MUSIC_MAIN_MENU}`, `${MUSIC_URL}${FILE_NAMES.MUSIC_MAIN_MENU}`],

  //SOUNDFX

  //ENEMIES
  [`${FILE_NAMES.ZOMBIE_DARKCHEEKS_WALK}`, `${ZOMBIES_URL}${FILE_NAMES.ZOMBIE_DARKCHEEKS_WALK}`],
  [`${FILE_NAMES.ZOMBIE_DARKCHEEKS_DIE}`, `${ZOMBIES_URL}${FILE_NAMES.ZOMBIE_DARKCHEEKS_DIE}`],
  [`${FILE_NAMES.ZOMBIE_DARKCHEEKS_IDLE}`, `${ZOMBIES_URL}${FILE_NAMES.ZOMBIE_DARKCHEEKS_IDLE}`],
  [`${FILE_NAMES.ZOMBIE_DARKCHEEKS_SCREAM}`, `${ZOMBIES_URL}${FILE_NAMES.ZOMBIE_DARKCHEEKS_SCREAM}`],

  [`${FILE_NAMES.ZOMBIE_CHEEKS_WALK}`, `${ZOMBIES_URL}${FILE_NAMES.ZOMBIE_CHEEKS_WALK}`],
  [`${FILE_NAMES.ZOMBIE_CHEEKS_DIE}`, `${ZOMBIES_URL}${FILE_NAMES.ZOMBIE_CHEEKS_DIE}`],
  [`${FILE_NAMES.ZOMBIE_CHEEKS_IDLE}`, `${ZOMBIES_URL}${FILE_NAMES.ZOMBIE_CHEEKS_IDLE}`],
  [`${FILE_NAMES.ZOMBIE_CHEEKS_SCREAM}`, `${ZOMBIES_URL}${FILE_NAMES.ZOMBIE_CHEEKS_SCREAM}`],
  
  //TOWERS
  [`${FILE_NAMES.TOWER_EMPTY_SPOT}`, `${TOWERS_URL}${FILE_NAMES.TOWER_EMPTY_SPOT}`],
  [`${FILE_NAMES.TOWER_AMETHYST_1}`, `${TOWERS_URL}${FILE_NAMES.TOWER_AMETHYST_1}`],

  //PROJECTILES
  [`${FILE_NAMES.PROJECTILE_SAPPHIRE_1}`, `${PROJECTILES_URL}${FILE_NAMES.PROJECTILE_SAPPHIRE_1}`],

  //EFFECTS
];
