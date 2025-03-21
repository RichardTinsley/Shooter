const EFFECTS_URL = "./images/effects/";
const ENEMIES_URL = "./images/enemies/";
const PROJECTILES_URL = "./images/projectiles/";
const TOWERS_URL = "./images/towers/";
const UI_URL = "./images/UI/";
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
export const FILE_NAMES = {
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
export const ASSET_LIST = [
    [`${FILE_NAMES.DsShieldLogo}`, `${UI_URL}${FILE_NAMES.DsShieldLogo}`],
    [`${FILE_NAMES.DsShieldLogo}`, `${UI_URL}${FILE_NAMES.DsShieldLogo}`],
    [
        `${TOWERS.AMETHYST}${TYPES.TOWER}1`,
        `${TOWERS_URL}${TOWERS.AMETHYST}${TYPES.TOWER}${URL_NUMBER.ONE}.png`,
    ],
    [
        `${TOWERS.DIAMOND}${TYPES.TOWER}1`,
        `${TOWERS_URL}${TOWERS.DIAMOND}${TYPES.TOWER}${URL_NUMBER.ONE}.png`,
    ],
    [
        `${TOWERS.EMERALD}${TYPES.TOWER}1`,
        `${TOWERS_URL}${TOWERS.EMERALD}${TYPES.TOWER}${URL_NUMBER.ONE}.png`,
    ],
    [
        `${TOWERS.RUBY}${TYPES.TOWER}1`,
        `${TOWERS_URL}${TOWERS.RUBY}${TYPES.TOWER}${URL_NUMBER.ONE}.png`,
    ],
    [
        `${TOWERS.SAPPHIRE}${TYPES.TOWER}1`,
        `${TOWERS_URL}${TOWERS.SAPPHIRE}${TYPES.TOWER}${URL_NUMBER.ONE}.png`,
    ],
    [
        `${TOWERS.TOPAZ}${TYPES.TOWER}1`,
        `${TOWERS_URL}${TOWERS.TOPAZ}${TYPES.TOWER}${URL_NUMBER.ONE}.png`,
    ],
    [
        `${TOWERS.AMETHYST}${TYPES.TOWER}2`,
        `${TOWERS_URL}${TOWERS.AMETHYST}${TYPES.TOWER}${URL_NUMBER.TWO}.png`,
    ],
    [
        `${TOWERS.DIAMOND}${TYPES.TOWER}2`,
        `${TOWERS_URL}${TOWERS.DIAMOND}${TYPES.TOWER}${URL_NUMBER.TWO}.png`,
    ],
    [
        `${TOWERS.EMERALD}${TYPES.TOWER}2`,
        `${TOWERS_URL}${TOWERS.EMERALD}${TYPES.TOWER}${URL_NUMBER.TWO}.png`,
    ],
    [
        `${TOWERS.RUBY}${TYPES.TOWER}2`,
        `${TOWERS_URL}${TOWERS.RUBY}${TYPES.TOWER}${URL_NUMBER.TWO}.png`,
    ],
    [
        `${TOWERS.SAPPHIRE}${TYPES.TOWER}2`,
        `${TOWERS_URL}${TOWERS.SAPPHIRE}${TYPES.TOWER}${URL_NUMBER.TWO}.png`,
    ],
    [
        `${TOWERS.TOPAZ}${TYPES.TOWER}2`,
        `${TOWERS_URL}${TOWERS.TOPAZ}${TYPES.TOWER}${URL_NUMBER.TWO}.png`,
    ],
    [
        `${TOWERS.AMETHYST}${TYPES.TOWER}3`,
        `${TOWERS_URL}${TOWERS.AMETHYST}${TYPES.TOWER}${URL_NUMBER.THREE}.png`,
    ],
    [
        `${TOWERS.DIAMOND}${TYPES.TOWER}3`,
        `${TOWERS_URL}${TOWERS.DIAMOND}${TYPES.TOWER}${URL_NUMBER.THREE}.png`,
    ],
    [
        `${TOWERS.EMERALD}${TYPES.TOWER}3`,
        `${TOWERS_URL}${TOWERS.EMERALD}${TYPES.TOWER}${URL_NUMBER.THREE}.png`,
    ],
    [
        `${TOWERS.RUBY}${TYPES.TOWER}3`,
        `${TOWERS_URL}${TOWERS.RUBY}${TYPES.TOWER}${URL_NUMBER.THREE}.png`,
    ],
    [
        `${TOWERS.SAPPHIRE}${TYPES.TOWER}3`,
        `${TOWERS_URL}${TOWERS.SAPPHIRE}${TYPES.TOWER}${URL_NUMBER.THREE}.png`,
    ],
    [
        `${TOWERS.TOPAZ}${TYPES.TOWER}3`,
        `${TOWERS_URL}${TOWERS.TOPAZ}${TYPES.TOWER}${URL_NUMBER.THREE}.png`,
    ],
];
export const ASSET_TYPE = {
    IMAGE: "image",
    SOUND: "sound",
};
export const ASSET_TYPE_LOOKUP = {
    png: ASSET_TYPE.IMAGE,
    mp3: ASSET_TYPE.SOUND,
    ogg: ASSET_TYPE.SOUND,
};
//# sourceMappingURL=assets.js.map