import * as GAME from "./game.js"

export const SIZES = {
    textSize: 60,
    spacing: 15,
    thirds: GAME.SIZES.GAME_WIDTH / 3,
};

export const MAIN_MENU = [
    {
        text: "New Game",
        option: GAME.STATES.BATTLE,
    }, 
    {
        text: "Options",
        option: GAME.STATES.OPTIONS,
    }, 
    {
        text: "About",
        option: GAME.STATES.ABOUT,
    }, 
];
