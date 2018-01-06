var audio = document.getElementById("player");
var button = document.getElementsByClassName("speaker");
audio.loop = true;
audio.play();
var isPlay = true;
var togglePlay = function(e) {
    e.preventDefault();
    for (var i = button.length - 1; i > -1; i--) {
        button[i].classList.toggle('mute');
    }
    if (isPlay) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlay = !isPlay;
};

for (var i = button.length - 1; i > -1; i--) {
    button[i].addEventListener('click', togglePlay);
}

var flip = function(current_page, target_page) {
    for (var i = 1; i < 7; i++) {
        document.getElementById("page" + i).style.display = "none";
    }
    document.getElementById("page" + target_page).style.display = "";
};

flip(0, 1);
