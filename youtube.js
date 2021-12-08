var youtube = document.getElementById("youtube");		
var source = "thumbnail.webp";
var image = new Image();

image.src = source;
image.addEventListener("load", function() {
	youtube.appendChild(image);
});
		
youtube.addEventListener( "click", function() {
  var iframe = document.createElement( "iframe" );
	iframe.setAttribute("frameborder", "0");
	iframe.setAttribute("allowfullscreen", "");
	iframe.setAttribute("src", "https://www.youtube.com/embed/j0Xk_Wa6Ync?autoplay=1");
  this.innerHTML = "";
	this.appendChild(iframe);
});