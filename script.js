const songs = [
    { title: "Changes", artist: "By XXXTENTACION", file: "song1.mp3" },
    { title: "SAD!", artist: "By XXXTENTACION", file: "SONG2.mp3" },
    { title: "Numb", artist: "By XXXTENTACION", file: "song3.mp3" },
    { title: "Already Dead", artist: "By JUICE WRLD", file: "song4.mp3" },
    { title: "Chemical", artist: "By POST MALONE", file: "song5.mp3" },
    { title: "A Thousands bad times", artist: "By POST MALONE", file: "song6.mp3" },
    { title: "Take Me To Church", artist: "By HOZIER", file: "song7.mp3" },
];

let currentSongIndex = 0;
let isPlaying = false;

const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const volumeControl = document.getElementById('volume-control');

const audio = new Audio();
audio.src = songs[currentSongIndex].file;
audio.volume = volumeControl.value;

function loadSong(songIndex) {
    const song = songs[songIndex];
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    audio.src = song.file;
}

function playPauseSong() {
    if (isPlaying) {
        audio.pause();
        playBtn.textContent = "▶️";
    } else {
        audio.play();
        playBtn.textContent = "⏸️";
    }
    isPlaying = !isPlaying;
}

function prevSong() {
    currentSongIndex = (currentSongIndex > 0) ? currentSongIndex - 1 : songs.length - 1;
    loadSong(currentSongIndex);
    if (isPlaying) audio.play();
}

function nextSong() {
    currentSongIndex = (currentSongIndex < songs.length - 1) ? currentSongIndex + 1 : 0;
    loadSong(currentSongIndex);
    if (isPlaying) audio.play();
}

playBtn.addEventListener('click', playPauseSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

volumeControl.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});

// Initial load
loadSong(currentSongIndex);
