const keyPressContainer = document.querySelectorAll(".box");

for (list of keyPressContainer) {
    list.addEventListener("click", sound);

}
document.addEventListener("mouseup", function () {
    for (list of keyPressContainer) {
      end(list)
    }
  });

document.addEventListener("keypress", sound);

document.addEventListener("keyup", function () {
  for (list of keyPressContainer) {
    end(list)
  }
});

function sound(e) {
  let audio = new Audio();
  let key = e.keyCode || Number(e.target.id);
  switch (key) {
    case 97:
      audio.src = "./sound/boom.wav";
      break;
    case 115:
      audio.src = "./sound/clap.wav";
      break;
    case 100:
      audio.src = "./sound/hihat.wav";
      break;
    case 102:
      audio.src = "./sound/kick.wav";
      break;
    case 103:
      audio.src = "./sound/openhat.wav";
      break;
    case 104:
      audio.src = "./sound/ride.wav";
      break;
    case 106:
      audio.src = "./sound/snare.wav";
      break;
    case 107:
      audio.src = "./sound/tink.wav";
      break;
    case 108:
      audio.src = "./sound/tom.wav";
      break;
    default:
      return;
  }
  audio.play();
  let item = document.getElementById(key);
  item.style.transform = "scale(1.1)";
}

function end(element) {
    element.style.transform = "scale(1)";
}