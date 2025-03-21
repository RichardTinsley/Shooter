const EFFECTS_URL: string = "./images/effects/";
const ENEMIES_URL: string = "./images/enemies/";
const PROJECTILES_URL: string = "./images/projectiles/";
const TOWERS_URL: string = "./images/towers/";
const UI_URL: string = "./images/UI/";

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

export const FILE_NAMES: Record<string, string> = {
  DsShieldLogo: "DsShieldLogo.png",
};

const URL_NUMBER = {
  ONE: " (1)",
  TWO: " (2)",
  THREE: " (3)",
  FOUR: " (4)",
  FIVE: " (5)",
  SIX: " (6)",
};

export const ASSET_LIST: string[][] = [
  //GUI
  [`${FILE_NAMES.DsShieldLogo}`, `${UI_URL}${FILE_NAMES.DsShieldLogo}`],
  [`${FILE_NAMES.DsShieldLogo}`, `${UI_URL}${FILE_NAMES.DsShieldLogo}`],
  // ['hellwortica',  './images/levels/hellwortica/hellwortica.png'],
  // ['towerSpot',   './images/levels/towerSpot.png'],
  // ['bossWave',    './audio/bossWave.ogg'],
  // ['menuMusic',   './audio/menuMusic.mp3'],
  // ['blood',       `${EFFECTS_URL}blood_110x110.png`],
  // ['blueExplosion',   `${EFFECTS_URL}blueExplosion_256x256.png`],
  // ['sapphireProjectile',    `${PROJECTILES_URL}sapphireProjectile_50x25.png`],

  //ENEMIES
  // [`${TYPES.ENEMY}${URL_NUMBER.ONE}`, `${ENEMIES_URL}${TYPES.ENEMY}${URL_NUMBER.ONE}.png`],
  // [`${TYPES.ENEMY}${URL_NUMBER.TWO}`, `${ENEMIES_URL}${TYPES.ENEMY}${URL_NUMBER.TWO}.png`],
  //TOWERS
  [
    `${TOWERS.AMETHYST}${TYPES.TOWER}1`,
    `${TOWERS_URL}${TOWERS.AMETHYST}${TYPES.TOWER}${URL_NUMBER.ONE}.png`,
  ],
  // [`${TOWERS.CITRINE}${TYPES.TOWER}1`,  `${TOWERS_URL}${TOWERS.CITRINE}${TYPES.TOWER}${URL_NUMBER.ONE}.png`],
  [
    `${TOWERS.DIAMOND}${TYPES.TOWER}1`,
    `${TOWERS_URL}${TOWERS.DIAMOND}${TYPES.TOWER}${URL_NUMBER.ONE}.png`,
  ],
  [
    `${TOWERS.EMERALD}${TYPES.TOWER}1`,
    `${TOWERS_URL}${TOWERS.EMERALD}${TYPES.TOWER}${URL_NUMBER.ONE}.png`,
  ],
  // [`${TOWERS.GOLD}${TYPES.TOWER}1`,     `${TOWERS_URL}${TOWERS.GOLD}${TYPES.TOWER}${URL_NUMBER.ONE}.png`],
  // [`${TOWERS.OBSIDIAN}${TYPES.TOWER}1`, `${TOWERS_URL}${TOWERS.OBSIDIAN}${TYPES.TOWER}${URL_NUMBER.ONE}.png`],
  // [`${TOWERS.OPAL}${TYPES.TOWER}1`,     `${TOWERS_URL}${TOWERS.OPAL}${TYPES.TOWER}${URL_NUMBER.ONE}.png`],
  [
    `${TOWERS.RUBY}${TYPES.TOWER}1`,
    `${TOWERS_URL}${TOWERS.RUBY}${TYPES.TOWER}${URL_NUMBER.ONE}.png`,
  ],
  [
    `${TOWERS.SAPPHIRE}${TYPES.TOWER}1`,
    `${TOWERS_URL}${TOWERS.SAPPHIRE}${TYPES.TOWER}${URL_NUMBER.ONE}.png`,
  ],
  // [`${TOWERS.SILVER}${TYPES.TOWER}1`,   `${TOWERS_URL}${TOWERS.SILVER}${TYPES.TOWER}${URL_NUMBER.ONE}.png`],
  [
    `${TOWERS.TOPAZ}${TYPES.TOWER}1`,
    `${TOWERS_URL}${TOWERS.TOPAZ}${TYPES.TOWER}${URL_NUMBER.ONE}.png`,
  ],
  // [`${TOWERS.URANIUM}${TYPES.TOWER}1`,  `${TOWERS_URL}${TOWERS.URANIUM}${TYPES.TOWER}${URL_NUMBER.ONE}.png`],
  [
    `${TOWERS.AMETHYST}${TYPES.TOWER}2`,
    `${TOWERS_URL}${TOWERS.AMETHYST}${TYPES.TOWER}${URL_NUMBER.TWO}.png`,
  ],
  // [`${TOWERS.CITRINE}${TYPES.TOWER}2`,  `${TOWERS_URL}${TOWERS.CITRINE}${TYPES.TOWER}${URL_NUMBER.TWO}.png`],
  [
    `${TOWERS.DIAMOND}${TYPES.TOWER}2`,
    `${TOWERS_URL}${TOWERS.DIAMOND}${TYPES.TOWER}${URL_NUMBER.TWO}.png`,
  ],
  [
    `${TOWERS.EMERALD}${TYPES.TOWER}2`,
    `${TOWERS_URL}${TOWERS.EMERALD}${TYPES.TOWER}${URL_NUMBER.TWO}.png`,
  ],
  // [`${TOWERS.GOLD}${TYPES.TOWER}2`,     `${TOWERS_URL}${TOWERS.GOLD}${TYPES.TOWER}${URL_NUMBER.TWO}.png`],
  // [`${TOWERS.OBSIDIAN}${TYPES.TOWER}2`, `${TOWERS_URL}${TOWERS.OBSIDIAN}${TYPES.TOWER}${URL_NUMBER.TWO}.png`],
  // [`${TOWERS.OPAL}${TYPES.TOWER}2`,     `${TOWERS_URL}${TOWERS.OPAL}${TYPES.TOWER}${URL_NUMBER.TWO}.png`],
  [
    `${TOWERS.RUBY}${TYPES.TOWER}2`,
    `${TOWERS_URL}${TOWERS.RUBY}${TYPES.TOWER}${URL_NUMBER.TWO}.png`,
  ],
  [
    `${TOWERS.SAPPHIRE}${TYPES.TOWER}2`,
    `${TOWERS_URL}${TOWERS.SAPPHIRE}${TYPES.TOWER}${URL_NUMBER.TWO}.png`,
  ],
  // [`${TOWERS.SILVER}${TYPES.TOWER}2`,   `${TOWERS_URL}${TOWERS.SILVER}${TYPES.TOWER}${URL_NUMBER.TWO}.png`],
  [
    `${TOWERS.TOPAZ}${TYPES.TOWER}2`,
    `${TOWERS_URL}${TOWERS.TOPAZ}${TYPES.TOWER}${URL_NUMBER.TWO}.png`,
  ],
  // [`${TOWERS.URANIUM}${TYPES.TOWER}2`,  `${TOWERS_URL}${TOWERS.URANIUM}${TYPES.TOWER}${URL_NUMBER.TWO}.png`],
  [
    `${TOWERS.AMETHYST}${TYPES.TOWER}3`,
    `${TOWERS_URL}${TOWERS.AMETHYST}${TYPES.TOWER}${URL_NUMBER.THREE}.png`,
  ],
  // [`${TOWERS.CITRINE}${TYPES.TOWER}3`,  `${TOWERS_URL}${TOWERS.CITRINE}${TYPES.TOWER}${URL_NUMBER.THREE}.png`],
  [
    `${TOWERS.DIAMOND}${TYPES.TOWER}3`,
    `${TOWERS_URL}${TOWERS.DIAMOND}${TYPES.TOWER}${URL_NUMBER.THREE}.png`,
  ],
  [
    `${TOWERS.EMERALD}${TYPES.TOWER}3`,
    `${TOWERS_URL}${TOWERS.EMERALD}${TYPES.TOWER}${URL_NUMBER.THREE}.png`,
  ],
  // [`${TOWERS.GOLD}${TYPES.TOWER}3`,     `${TOWERS_URL}${TOWERS.GOLD}${TYPES.TOWER}${URL_NUMBER.THREE}.png`],
  // [`${TOWERS.OBSIDIAN}${TYPES.TOWER}3`, `${TOWERS_URL}${TOWERS.OBSIDIAN}${TYPES.TOWER}${URL_NUMBER.THREE}.png`],
  // [`${TOWERS.OPAL}${TYPES.TOWER}3`,     `${TOWERS_URL}${TOWERS.OPAL}${TYPES.TOWER}${URL_NUMBER.THREE}.png`],
  [
    `${TOWERS.RUBY}${TYPES.TOWER}3`,
    `${TOWERS_URL}${TOWERS.RUBY}${TYPES.TOWER}${URL_NUMBER.THREE}.png`,
  ],
  [
    `${TOWERS.SAPPHIRE}${TYPES.TOWER}3`,
    `${TOWERS_URL}${TOWERS.SAPPHIRE}${TYPES.TOWER}${URL_NUMBER.THREE}.png`,
  ],
  // [`${TOWERS.SILVER}${TYPES.TOWER}3`,   `${TOWERS_URL}${TOWERS.SILVER}${TYPES.TOWER}${URL_NUMBER.THREE}.png`],
  [
    `${TOWERS.TOPAZ}${TYPES.TOWER}3`,
    `${TOWERS_URL}${TOWERS.TOPAZ}${TYPES.TOWER}${URL_NUMBER.THREE}.png`,
  ],
  // [`${TOWERS.URANIUM}${TYPES.TOWER}3`,  `${TOWERS_URL}${TOWERS.URANIUM}${TYPES.TOWER}${URL_NUMBER.THREE}.png`],
];

export const ASSET_TYPE: { IMAGE: string; SOUND: string } = {
  IMAGE: "image",
  SOUND: "sound",
};

export const ASSET_TYPE_LOOKUP: Record<string, string> = {
  png: ASSET_TYPE.IMAGE,
  mp3: ASSET_TYPE.SOUND,
  ogg: ASSET_TYPE.SOUND,
};
