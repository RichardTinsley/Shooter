import * as GAME from "./game.js"

export const MENU_ITEM_SIZES = {
    size: 60,
    spacing: 15,
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
