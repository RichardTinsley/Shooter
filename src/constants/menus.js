import { GAME_STATES, GAME_SIZES } from "./game.js";
import { TEXT_COLOURS } from "./colours.js";
import { CURSOR_TYPES } from "./mouse.js";

export const MENU_POSITIONS = {
    MAIN_MENU: 460,
};

export const MENU_SIZES = {
    TEXT: 60,
    BUFFER: 15,
};

export const MAIN_MENU = [
    {
        name: "New Game",
        option: GAME_STATES.BATTLE,
    }, 
    {
        name: "Options",
        option: GAME_STATES.OPTIONS,
    }, 
    {
        name: "About",
        option: GAME_STATES.ABOUT,
    }, 
];

export const GAMEOVER_MENU = [
    "Restart",
    "Main Menu",
];

export const MENU_ITEM_TEMPLATE = {
    name: " ",
    colour: TEXT_COLOURS.WHITE,
    option: null,
    textPosition: GAME_SIZES.GAME_WIDTH_HALF,
    width: null,
    x: null,
    y: null,
    height: MENU_SIZES.TEXT,
    space: MENU_SIZES.BUFFER,
    type: CURSOR_TYPES.MENUITEM,
}


//MENUHANDLER?
export const MENUS = {
    MAIN: MAIN_MENU,
};