const EFFECTS_URL = './images/effects/'; 
const ENEMIES_URL = './images/enemies/';
const PROJECTILES_URL = './images/projectiles/';
const TOWERS_URL = './images/towers/';

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
    ['amethyst',    `${ENEMIES_URL}amethyst.png`],
    ['citrine',     `${ENEMIES_URL}citrine.png`],
    ['diamond',     `${ENEMIES_URL}diamond.png`],
    ['emerald',     `${ENEMIES_URL}emerald.png`],
    ['gold',        `${ENEMIES_URL}gold.png`],
    ['obsidian',    `${ENEMIES_URL}obsidian.png`],
    ['opal',        `${ENEMIES_URL}opal.png`],
    ['ruby',        `${ENEMIES_URL}ruby.png`],
    ['sapphire',    `${ENEMIES_URL}sapphire.png`],
    ['silver',      `${ENEMIES_URL}silver.png`],
    ['topaz',       `${ENEMIES_URL}topaz.png`],
    ['uranium',     `${ENEMIES_URL}uranium.png`],
    ['blood',       `${EFFECTS_URL}blood_110x110.png`],
    ['blueExplosion',   `${EFFECTS_URL}blueExplosion_256x256.png`],
    ['sapphireTower',   `${TOWERS_URL}sapphire1.png`],
    ['sapphireProjectile',    `${PROJECTILES_URL}sapphireProjectile_50x25.png`],
] 