export const assets = new Map();

const EFFECTS_URL = './images/effects/'; 
const ENEMIES_URL = './images/enemies/';
const PROJECTILES_URL = './images/projectiles/';
const TOWERS_URL = './images/towers/';

const ASSET_TYPE = {
    IMAGE: 'image',
    SOUND: 'sound',
};

const ASSET_TYPE_LOOKUP = {
    png: ASSET_TYPE.IMAGE,
    mp3: ASSET_TYPE.SOUND,
    ogg: ASSET_TYPE.SOUND,
}

export const assetList = [
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

export async function initialiseAssets(){
    await load(assetList);
}

export async function load(assetArray, onComplete){
    const promises = assetArray.map(([key, fileName]) => {
        const extension = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
        const type = ASSET_TYPE_LOOKUP[extension];

        if(type === ASSET_TYPE.IMAGE)
            return loadImage(key, fileName, onComplete);
        else if (type === ASSET_TYPE.SOUND)
            return loadSound(key, fileName, onComplete);
        else
            throw new TypeError('Error unknown type');
    });

    return Promise.all(promises).then(loadedAssets => {
        for(const { key, asset } of loadedAssets){
            assets.set(key, asset);
        }
    });
}

function loadImage(key, fileName, onComplete){
    return new Promise((resolve, reject) => {
        const image = new Image();

        image.addEventListener('load', () => {
            resolve({ key, asset: image });

            if(typeof onComplete === 'function')
                onComplete({ fileName, image });
        }, { once: true });
        
        image.addEventListener('error', event => reject({ fileName, event }));

        image.src = fileName;
    });
}

function loadSound(key, fileName, onComplete){
    return new Promise((resolve, reject) => {
        const sound = new Audio();

        sound.addEventListener('canplay', () => {
            resolve({ key, asset: sound });

            if(typeof onComplete === 'function')
                onComplete({ fileName, sound });
        }, { once: true });

        sound.addEventListener('error', event => reject({ fileName, event }));

        sound.src = fileName;
    });
}
