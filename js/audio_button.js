var audio = document.getElementById("player");
var button = document.getElementById("playPause");
audio.loop = true;
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

var flip = function(current_page, target_page) {
    for (var i = 1; i < 7; i++) {
        /*if (i == 3) {
            continue;
        }*/
        document.getElementById("page" + i).style.display = "none";
    }
    document.getElementById("page" + target_page).style.display = "";
};

flip(0, 1);
