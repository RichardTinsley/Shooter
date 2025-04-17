import { ALL_ASSETS, FILE_NAMES } from "../constants/assets.js";
export class Music {
    constructor() { }
    playTrack() {
        console.log(ALL_ASSETS.get(FILE_NAMES.MUSIC_MAIN_MENU));
    }
}
export class Singleton {
    constructor() { }
    static createInstance() {
        if (!Singleton.INSTANCE) {
            Singleton.INSTANCE = new Singleton();
        }
        return Singleton.INSTANCE;
    }
}
//# sourceMappingURL=Music.js.map