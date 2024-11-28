import * as GAME from "../constants/game.js";
import * as INPUT from "../constants/input.js";

const keys = new Set();

export class Keyboard {
    constructor(switchScreens, switchDebugMode){
        window.addEventListener('keydown', e =>{
            keys.add(e.key.toLowerCase());
        });

        window.addEventListener('keyup', e =>{
            if(keys.has(INPUT.KEYBOARD.PAUSE))
                switchScreens(GAME.STATES.PAUSED);
            
            if(keys.has(INPUT.KEYBOARD.RESTART))
                switchScreens(GAME.STATES.RESTART);
            
            if(keys.has(INPUT.KEYBOARD.DEBUG))
                switchDebugMode();
            
            if(keys.has(INPUT.KEYBOARD.MUSIC))
                switchScreens(GAME.STATES.MUSIC);
    
            keys.clear();
        });
    }
}
