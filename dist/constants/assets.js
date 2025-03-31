const EFFECTS_URL = "./images/effects/";
const ENEMIES_URL = "./images/enemies/";
const PROJECTILES_URL = "./images/projectiles/";
const TOWERS_URL = "./images/towers/";
const UI_URL = "./images/UI/";
const MUSIC_URL = "./audio/";
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
export const FILE_NAMES = {
    DSLOGO: "DsShieldLogo.png",
    MUSIC_MAIN_MENU: "mainMenu.mp3",
    TOWER_AMETHYST_1: `${TOWERS.AMETHYST}${TYPES.TOWER}${URL_NUMBER.ONE}.png`,
    PROJECTILE_SAPPHIRE_1: "Iceball_84x9.png",
};
export const ASSET_LIST = [
    [`${FILE_NAMES.DSLOGO}`, `${UI_URL}${FILE_NAMES.DSLOGO}`],
    [`${FILE_NAMES.MUSIC_MAIN_MENU}`, `${MUSIC_URL}${FILE_NAMES.MUSIC_MAIN_MENU}`],
    [`${FILE_NAMES.TOWER_AMETHYST_1}`, `${TOWERS_URL}${FILE_NAMES.TOWER_AMETHYST_1}`],
    [`${FILE_NAMES.PROJECTILE_SAPPHIRE_1}`, `${PROJECTILES_URL}${FILE_NAMES.PROJECTILE_SAPPHIRE_1}`],
];
//# sourceMappingURL=assets.js.map