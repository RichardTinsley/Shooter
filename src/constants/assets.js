import { OBJECT_COLOURS, OBJECT_TYPES } from "./objects.js";

const EFFECTS_URL = './images/effects/'; 
const ENEMIES_URL = './images/enemies/';
const PROJECTILES_URL = './images/projectiles/';
export const TOWERS_URL = './images/towers/';

export const URL_NUMBER = {
    ONE: ' (1)',
    TWO: ' (2)',
    THREE: ' (3)',
    FOUR: ' (4)',
    FIVE: ' (5)',
    SIX: ' (6)',
}

export const ASSET_TYPE = {
    IMAGE: 'image',
    SOUND: 'sound',
};

export const ASSET_TYPE_LOOKUP = {
    png: ASSET_TYPE.IMAGE,
    mp3: ASSET_TYPE.SOUND,
    ogg: ASSET_TYPE.SOUND,
}

export const ASSET_LIST = [
    ['hudBackgroundImage',  './images/hudBackgroundImage.png'],
    ['menuLogo',    './images/logos/menuLogo.png'],
    ['wastelands',  './images/levels/wastelandsTilemap.png'],
    ['towerSpot',   './images/levels/towerSpot.png'],
    ['boss',        './audio/boss.ogg'],
    ['menuMusic',   './audio/menuMusic.mp3'],
    ['blood',       `${EFFECTS_URL}blood_110x110.png`],
    ['blueExplosion',   `${EFFECTS_URL}blueExplosion_256x256.png`],
    ['sapphireProjectile',    `${PROJECTILES_URL}sapphireProjectile_50x25.png`],

    [`${OBJECT_COLOURS.AMETHYST}`, `${ENEMIES_URL}${OBJECT_COLOURS.AMETHYST}.png`],
    [`${OBJECT_COLOURS.CITRINE}`,  `${ENEMIES_URL}${OBJECT_COLOURS.CITRINE}.png`],
    [`${OBJECT_COLOURS.DIAMOND}`,  `${ENEMIES_URL}${OBJECT_COLOURS.DIAMOND}.png`],
    [`${OBJECT_COLOURS.EMERALD}`,  `${ENEMIES_URL}${OBJECT_COLOURS.EMERALD}.png`],
    [`${OBJECT_COLOURS.GOLD}`,  `${ENEMIES_URL}${OBJECT_COLOURS.GOLD}.png`],
    [`${OBJECT_COLOURS.OBSIDIAN}`,  `${ENEMIES_URL}${OBJECT_COLOURS.OBSIDIAN}.png`],
    [`${OBJECT_COLOURS.OPAL}`,  `${ENEMIES_URL}${OBJECT_COLOURS.OPAL}.png`],
    [`${OBJECT_COLOURS.RUBY}`,  `${ENEMIES_URL}${OBJECT_COLOURS.RUBY}.png`],
    [`${OBJECT_COLOURS.SAPPHIRE}`,  `${ENEMIES_URL}${OBJECT_COLOURS.SAPPHIRE}.png`],
    [`${OBJECT_COLOURS.SILVER}`,  `${ENEMIES_URL}${OBJECT_COLOURS.SILVER}.png`],
    [`${OBJECT_COLOURS.TOPAZ}`,  `${ENEMIES_URL}${OBJECT_COLOURS.TOPAZ}.png`],
    [`${OBJECT_COLOURS.URANIUM}`,  `${ENEMIES_URL}${OBJECT_COLOURS.URANIUM}.png`],

    [`${OBJECT_COLOURS.AMETHYST}${OBJECT_TYPES.TOWER}1`, `${TOWERS_URL}${OBJECT_COLOURS.AMETHYST}${OBJECT_TYPES.TOWER}${URL_NUMBER.ONE}.png`], 
    // [`${OBJECT_COLOURS.CITRINE}${OBJECT_TYPES.TOWER}1`,  `${TOWERS_URL}${OBJECT_COLOURS.CITRINE}${OBJECT_TYPES.TOWER}${URL_NUMBER.ONE}.png`],
    [`${OBJECT_COLOURS.DIAMOND}${OBJECT_TYPES.TOWER}1`,  `${TOWERS_URL}${OBJECT_COLOURS.DIAMOND}${OBJECT_TYPES.TOWER}${URL_NUMBER.ONE}.png`],
    [`${OBJECT_COLOURS.EMERALD}${OBJECT_TYPES.TOWER}1`,  `${TOWERS_URL}${OBJECT_COLOURS.EMERALD}${OBJECT_TYPES.TOWER}${URL_NUMBER.ONE}.png`],
    // [`${OBJECT_COLOURS.GOLD}${OBJECT_TYPES.TOWER}1`,     `${TOWERS_URL}${OBJECT_COLOURS.GOLD}${OBJECT_TYPES.TOWER}${URL_NUMBER.ONE}.png`],
    // [`${OBJECT_COLOURS.OBSIDIAN}${OBJECT_TYPES.TOWER}1`, `${TOWERS_URL}${OBJECT_COLOURS.OBSIDIAN}${OBJECT_TYPES.TOWER}${URL_NUMBER.ONE}.png`],
    // [`${OBJECT_COLOURS.OPAL}${OBJECT_TYPES.TOWER}1`,     `${TOWERS_URL}${OBJECT_COLOURS.OPAL}${OBJECT_TYPES.TOWER}${URL_NUMBER.ONE}.png`],
    [`${OBJECT_COLOURS.RUBY}${OBJECT_TYPES.TOWER}1`,     `${TOWERS_URL}${OBJECT_COLOURS.RUBY}${OBJECT_TYPES.TOWER}${URL_NUMBER.ONE}.png`],
    [`${OBJECT_COLOURS.SAPPHIRE}${OBJECT_TYPES.TOWER}1`, `${TOWERS_URL}${OBJECT_COLOURS.SAPPHIRE}${OBJECT_TYPES.TOWER}${URL_NUMBER.ONE}.png`],
    // [`${OBJECT_COLOURS.SILVER}${OBJECT_TYPES.TOWER}1`,   `${TOWERS_URL}${OBJECT_COLOURS.SILVER}${OBJECT_TYPES.TOWER}${URL_NUMBER.ONE}.png`],
    [`${OBJECT_COLOURS.TOPAZ}${OBJECT_TYPES.TOWER}1`,    `${TOWERS_URL}${OBJECT_COLOURS.TOPAZ}${OBJECT_TYPES.TOWER}${URL_NUMBER.ONE}.png`],
    // [`${OBJECT_COLOURS.URANIUM}${OBJECT_TYPES.TOWER}1`,  `${TOWERS_URL}${OBJECT_COLOURS.URANIUM}${OBJECT_TYPES.TOWER}${URL_NUMBER.ONE}.png`],

    [`${OBJECT_COLOURS.AMETHYST}${OBJECT_TYPES.TOWER}2`, `${TOWERS_URL}${OBJECT_COLOURS.AMETHYST}${OBJECT_TYPES.TOWER}${URL_NUMBER.TWO}.png`], 
    // [`${OBJECT_COLOURS.CITRINE}${OBJECT_TYPES.TOWER}2`,  `${TOWERS_URL}${OBJECT_COLOURS.CITRINE}${OBJECT_TYPES.TOWER}${URL_NUMBER.TWO}.png`],
    [`${OBJECT_COLOURS.DIAMOND}${OBJECT_TYPES.TOWER}2`,  `${TOWERS_URL}${OBJECT_COLOURS.DIAMOND}${OBJECT_TYPES.TOWER}${URL_NUMBER.TWO}.png`],
    [`${OBJECT_COLOURS.EMERALD}${OBJECT_TYPES.TOWER}2`,  `${TOWERS_URL}${OBJECT_COLOURS.EMERALD}${OBJECT_TYPES.TOWER}${URL_NUMBER.TWO}.png`],
    // [`${OBJECT_COLOURS.GOLD}${OBJECT_TYPES.TOWER}2`,     `${TOWERS_URL}${OBJECT_COLOURS.GOLD}${OBJECT_TYPES.TOWER}${URL_NUMBER.TWO}.png`],
    // [`${OBJECT_COLOURS.OBSIDIAN}${OBJECT_TYPES.TOWER}2`, `${TOWERS_URL}${OBJECT_COLOURS.OBSIDIAN}${OBJECT_TYPES.TOWER}${URL_NUMBER.TWO}.png`],
    // [`${OBJECT_COLOURS.OPAL}${OBJECT_TYPES.TOWER}2`,     `${TOWERS_URL}${OBJECT_COLOURS.OPAL}${OBJECT_TYPES.TOWER}${URL_NUMBER.TWO}.png`],
    [`${OBJECT_COLOURS.RUBY}${OBJECT_TYPES.TOWER}2`,     `${TOWERS_URL}${OBJECT_COLOURS.RUBY}${OBJECT_TYPES.TOWER}${URL_NUMBER.TWO}.png`],
    [`${OBJECT_COLOURS.SAPPHIRE}${OBJECT_TYPES.TOWER}2`, `${TOWERS_URL}${OBJECT_COLOURS.SAPPHIRE}${OBJECT_TYPES.TOWER}${URL_NUMBER.TWO}.png`],
    // [`${OBJECT_COLOURS.SILVER}${OBJECT_TYPES.TOWER}2`,   `${TOWERS_URL}${OBJECT_COLOURS.SILVER}${OBJECT_TYPES.TOWER}${URL_NUMBER.TWO}.png`],
    [`${OBJECT_COLOURS.TOPAZ}${OBJECT_TYPES.TOWER}2`,    `${TOWERS_URL}${OBJECT_COLOURS.TOPAZ}${OBJECT_TYPES.TOWER}${URL_NUMBER.TWO}.png`],
    // [`${OBJECT_COLOURS.URANIUM}${OBJECT_TYPES.TOWER}2`,  `${TOWERS_URL}${OBJECT_COLOURS.URANIUM}${OBJECT_TYPES.TOWER}${URL_NUMBER.TWO}.png`],

    [`${OBJECT_COLOURS.AMETHYST}${OBJECT_TYPES.TOWER}3`, `${TOWERS_URL}${OBJECT_COLOURS.AMETHYST}${OBJECT_TYPES.TOWER}${URL_NUMBER.THREE}.png`], 
    // [`${OBJECT_COLOURS.CITRINE}${OBJECT_TYPES.TOWER}3`,  `${TOWERS_URL}${OBJECT_COLOURS.CITRINE}${OBJECT_TYPES.TOWER}${URL_NUMBER.THREE}.png`],
    [`${OBJECT_COLOURS.DIAMOND}${OBJECT_TYPES.TOWER}3`,  `${TOWERS_URL}${OBJECT_COLOURS.DIAMOND}${OBJECT_TYPES.TOWER}${URL_NUMBER.THREE}.png`],
    [`${OBJECT_COLOURS.EMERALD}${OBJECT_TYPES.TOWER}3`,  `${TOWERS_URL}${OBJECT_COLOURS.EMERALD}${OBJECT_TYPES.TOWER}${URL_NUMBER.THREE}.png`],
    // [`${OBJECT_COLOURS.GOLD}${OBJECT_TYPES.TOWER}3`,     `${TOWERS_URL}${OBJECT_COLOURS.GOLD}${OBJECT_TYPES.TOWER}${URL_NUMBER.THREE}.png`],
    // [`${OBJECT_COLOURS.OBSIDIAN}${OBJECT_TYPES.TOWER}3`, `${TOWERS_URL}${OBJECT_COLOURS.OBSIDIAN}${OBJECT_TYPES.TOWER}${URL_NUMBER.THREE}.png`],
    // [`${OBJECT_COLOURS.OPAL}${OBJECT_TYPES.TOWER}3`,     `${TOWERS_URL}${OBJECT_COLOURS.OPAL}${OBJECT_TYPES.TOWER}${URL_NUMBER.THREE}.png`],
    [`${OBJECT_COLOURS.RUBY}${OBJECT_TYPES.TOWER}3`,     `${TOWERS_URL}${OBJECT_COLOURS.RUBY}${OBJECT_TYPES.TOWER}${URL_NUMBER.THREE}.png`],
    [`${OBJECT_COLOURS.SAPPHIRE}${OBJECT_TYPES.TOWER}3`, `${TOWERS_URL}${OBJECT_COLOURS.SAPPHIRE}${OBJECT_TYPES.TOWER}${URL_NUMBER.THREE}.png`],
    // [`${OBJECT_COLOURS.SILVER}${OBJECT_TYPES.TOWER}3`,   `${TOWERS_URL}${OBJECT_COLOURS.SILVER}${OBJECT_TYPES.TOWER}${URL_NUMBER.THREE}.png`],
    [`${OBJECT_COLOURS.TOPAZ}${OBJECT_TYPES.TOWER}3`,    `${TOWERS_URL}${OBJECT_COLOURS.TOPAZ}${OBJECT_TYPES.TOWER}${URL_NUMBER.THREE}.png`],
    // [`${OBJECT_COLOURS.URANIUM}${OBJECT_TYPES.TOWER}3`,  `${TOWERS_URL}${OBJECT_COLOURS.URANIUM}${OBJECT_TYPES.TOWER}${URL_NUMBER.THREE}.png`],
    
] 