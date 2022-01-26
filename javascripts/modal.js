var spacer = document.getElementsByClassName("spacer");
var modal = document.getElementById("info");
var btn = document.getElementById("infoBtn");
var closeBtn = document.getElementsByClassName("close")[0];
var body = document.body.style;
var i;

function dim() {
  body.background = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('images/background.webp')";
  body.backgroundSize = "cover";
  body.backgroundRepeat = "no-repeat";
  body.backgroundPosition = "center";
  body.backgroundAttachment = "fixed";
  body.overflow = "hidden";
  body.color = "#006680";
  for (i=0; i < spacer.length; i++) {
    spacer[i].style.background = "#006680";
  }
}

function bright() {
  body.background = "url('images/background.webp')";
  body.backgroundColor = "#4d4c48";
  body.backgroundSize = "cover";
  body.backgroundRepeat = "no-repeat";
  body.backgroundPosition = "center";
  body.backgroundAttachment = "fixed";
  body.overflow = "visible";
  body.color = "#3cd8ff";
  for (i=0; i < spacer.length; i++) {
    spacer[i].style.background = "#3cd8ff";
  }
}

btn.onclick = function() {
  modal.style.display = "block";
  dim()
}

closeBtn.onclick = function() {
  modal.style.display = "none";
  bright()
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    bright()
  }
}