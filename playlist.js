const audioPlayer = document.getElementById('audioPlayer');
const currentSongDisplay = document.getElementById('currentSong');

// The playlist array
const playlist = [
    { title: "Song One", src: "TWS1.mp3" },
    { title: "Song Two", src: "TWS2.mp3" },
    { title: "Song Three", src: "TWS3.mp3" }
];

let currentTrackIndex = 0;

// Function to load and play the current track
function playCurrentTrack() {
    const track = playlist[currentTrackIndex];
    audioPlayer.src = track.src;
    currentSongDisplay.textContent = `Current song: ${track.title}`;
    
    // Attempt to play the audio. Browsers might block this until user interaction.
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

// Function to play the next track when the current one ends
audioPlayer.addEventListener('ended', () => {
    currentTrackIndex++;
    if (currentTrackIndex >= playlist.length) {
        currentTrackIndex = 0; // Loop back to the start
    }
    playCurrentTrack();
});

// A function linked to the user interaction button
function playMusic() {
    // Start the playlist from the current index (usually 0 initially)
    playCurrentTrack();
    // Hide the button if you want once music starts
    document.querySelector('button').style.display = 'none'; 
}

// Initial call to set the source when the page loads, but actual playback waits for interaction
window.onload = playCurrentTrack; 
