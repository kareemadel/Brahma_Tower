var audio = document.getElementById("player");
var button = document.getElementById("playPause");
audio.loop = true;
audio.play();
var togglePlay = function(e) {
    e.preventDefault();
    button.classList.toggle('mute');
    audio.paused ? audio.play() : audio.pause();
};

button.addEventListener('click', togglePlay);
