export class AudioHandler {
    constructor(game) {
        this.game = game;

        // MUSIC
        this.music = new Audio('./audio/battleMusic.mp3');
        this.music.currentTime = 9;
        this.music.volume = 0.1;
        this.music.pause();

        // SOUNDSFX
        this.bowImpact1 = new Audio('./audio/death (1).ogg');
        this.bowImpact2 = new Audio('./audio/death (2).ogg');
        this.bowImpact3 = new Audio('./audio/death (3).ogg');

        this.sounds = [this.bowImpact1, this.bowImpact2, this.bowImpact3];
    }


    audioImporter(){
    }
}