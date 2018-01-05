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

document.getElementById("page1").style.display = "none";
document.getElementById("page2").style.display = "none";
document.getElementById("page4").style.display = "none";
document.getElementById("page5").style.display = "";
