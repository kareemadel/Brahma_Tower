var audio = document.getElementById("player");
var button = document.getElementById("playPause");
audio.loop = true;
var togglePlay = function(e) {
    e.preventDefault();
    button.classList.toggle('mute');
    audio.paused ? audio.play() : audio.pause();
};

button.addEventListener('click', togglePlay);
