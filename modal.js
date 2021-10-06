var spacer = document.getElementsByClassName("spacer");
var modal = document.getElementById("info");
var btn = document.getElementById("infoBtn");
var closeBtn = document.getElementsByClassName("close")[0];
var body = document.body;
var i;


function dim() {
  body.style.backgroundSize = "cover";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundPosition = "center";
  body.style.backgroundAttachment = "fixed";
  body.style.color = "#006680";
  for (i=0; i < spacer.length; i++) {
    spacer[i].style.background = "#006680";
  }
}

btn.onclick = function() {
  modal.style.display = "block";
  body.style.background = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('background.webp')";
  dim()
}

closeBtn.onclick = function() {
  modal.style.display = "none";
  document.body.style.background = "url('background.webp')";
  dim()
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.background = "url('background.webp')";
    dim()
  }
}