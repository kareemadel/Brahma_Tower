var audio = document.getElementById("player");
var button = document.getElementById("playPause");
button.style.outline = "none";
audio.play()
var isPlay = false;
var togglePlay = function () {
  if (isPlay)
  {
    audio.pause();
    button.src="assets/images/audio_off.png";
  }
  else
  {
    audio.play();
    button.src="assets/images/audio_on.png";
  }
  isPlay = !isPlay;
}
button.addEventListener('click', togglePlay);
