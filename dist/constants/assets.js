const EFFECTS_URL = "./images/effects/";
const ENEMIES_URL = "./images/enemies/";
const PROJECTILES_URL = "./images/projectiles/";
const TOWERS_URL = "./images/towers/";
const UI_URL = "./images/UI/";
const LEVELS_URL = "./images/levels/";
const MUSIC_URL = "./audio/";
export const ALL_ASSETS = new Map();
export const FILE_NAMES = {
    DSLOGO: "DsShieldLogo.png",
    LEVEL_LAVONEY: "lavoney.png",
    MUSIC_MAIN_MENU: "mainMenu.mp3",
    TOWER_EMPTY_SPOT: "emptyTowerSpot.png",
    TOWER_AMETHYST_1: "amethystTower (1).png",
    PROJECTILE_SAPPHIRE_1: "Iceball_84x9.png",
};
export const ASSET_LIST = [
    [`${FILE_NAMES.DSLOGO}`, `${UI_URL}${FILE_NAMES.DSLOGO}`],
    [`${FILE_NAMES.LEVEL_LAVONEY}`, `${LEVELS_URL}${FILE_NAMES.LEVEL_LAVONEY}`],
    [`${FILE_NAMES.MUSIC_MAIN_MENU}`, `${MUSIC_URL}${FILE_NAMES.MUSIC_MAIN_MENU}`],
    [`${FILE_NAMES.TOWER_EMPTY_SPOT}`, `${TOWERS_URL}${FILE_NAMES.TOWER_EMPTY_SPOT}`],
    [`${FILE_NAMES.TOWER_AMETHYST_1}`, `${TOWERS_URL}${FILE_NAMES.TOWER_AMETHYST_1}`],
    [`${FILE_NAMES.PROJECTILE_SAPPHIRE_1}`, `${PROJECTILES_URL}${FILE_NAMES.PROJECTILE_SAPPHIRE_1}`],
];
//# sourceMappingURL=assets.js.map