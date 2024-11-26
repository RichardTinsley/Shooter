import { GAME_STATES } from "../constants/game.js";
import { USER_INPUT_KEYS } from "../constants/keyboard.js";

const keys = new Set();

export class Keyboard {
    constructor(){
        window.addEventListener('keydown', e =>{
            keys.add(e.key.toLowerCase());
        });
    }

    update(switchScreens, switchMusic, switchDebugMode){
        if(keys.size === 0)
            return
        console.log(keys.size)
        if(keys.has(USER_INPUT_KEYS.PAUSE)){
            switchScreens(GAME_STATES.PAUSED);
            switchMusic(GAME_STATES.PAUSED);
        }
        
        if(keys.has(USER_INPUT_KEYS.RESTART)){
            switchScreens(GAME_STATES.RESTART);
            switchMusic(GAME_STATES.RESTART);
        }
        
        if(keys.has(USER_INPUT_KEYS.DEBUG))
            switchDebugMode();
        
        if(keys.has(USER_INPUT_KEYS.MUSIC))
            switchMusic(GAME_STATES.MUSIC);

        keys.clear();
    }
}
