const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const img = document.querySelector('.vid-container img');

    //sounds
    const sounds = document.querySelectorAll('.sound-picker button');
   
    //pick different sounds
    sounds.forEach(sound => {
        sound.addEventListener('click', function(){
            song.src = this.getAttribute('data-sound');
            img.src = this.getAttribute('data-video');
            play.src = './svg/play3.png';
        });
    });

    //play sound
    play.addEventListener('click', () => {
        checkPlaying(song);
    });

    //create a function specific to stop and play the song
    const checkPlaying = song =>{
        if(song.paused){
            song.play();
            play.src = './svg/pause3.png';
        }
        else{
            song.pause();
            play.src = './svg/play3.png';
        };
    };

    song.addEventListener('ended', () => {
        play.src = './svg/play3.png';
    });
}

app();