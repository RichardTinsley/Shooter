export class AudioHandler {
    constructor() {
        this.music = new Audio('./audio/music.mp3');
        this.music.volume = 0.1;
        this.music.pause();

        this.audios = [];

        this.bowImpact1 = new Audio('./audio/bowImpact1.ogg');
    }

    renderAudios(){
        this.audios.forEach(audio => {
            audio.play();
        })
    }

    populateAudiosArray(audio){
        this.audios.push(
            audio
        );
    }


}