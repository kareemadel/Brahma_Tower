var audio = document.getElementById("player");
var button = document.getElementById("playPause");
button.style.outline = "none";
audio.play();
var isPlay = true;
var togglePlay = function(e) {
    e.preventDefault();
    button.classList.toggle('mute');
    if (isPlay) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlay = !isPlay;
};
button.addEventListener('click', togglePlay);
