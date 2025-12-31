const audioPlayer = document.getElementById('audioPlayer');
const currentSongDisplay = document.getElementById('currentSong');

const playlist = [
    { title: "TaWebSong One", src: "TWS1.mp3" },
    { title: "TaWebSong Two", src: "TWS2.mp3" },
    { title: "TaWebSong Three", src: "TWS3.mp3" }
];

let currentTrackIndex = 0;

function playCurrentTrack() {
    const track = playlist[currentTrackIndex];
    audioPlayer.src = track.src;
    currentSongDisplay.textContent = `Current song: ${track.title}`;
    
    const playPromise = audioPlayer.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            // Autoplay started successfully
            console.log("Autoplay started!");
        }).catch(error => {
            // Autoplay was prevented
            console.log("Autoplay was prevented by the browser. Please use the 'Play Music' button.");
        });
    }
}

audioPlayer.addEventListener('ended', () => {
    currentTrackIndex++;
    if (currentTrackIndex >= playlist.length) {
        currentTrackIndex = 0; // Loop back to the start
    }
    playCurrentTrack();
});

function playMusic() {
    // Start the playlist from the current index (usually 0 initially)
    playCurrentTrack();
    // Hide the button if you want once music starts
    document.querySelector('button').style.display = 'none'; 
}

window.onload = playCurrentTrack; 
