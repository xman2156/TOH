var btn = document.getElementById("navBtn");

function openClose() {
  var x = document.getElementById("myTopnav");
  var icon = document.getElementById("navIcon")
  if (x.className === "topnav") {
    x.className += " responsive";
    icon.className = "fa-solid fa-xmark";
  } else {
    x.className = "topnav";
    icon.className = "fa-solid fa-bars";
  }
}

btn.onclick = function() {
  openClose()
}