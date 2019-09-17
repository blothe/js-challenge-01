var bulb = document.getElementById("myImage");

function toggle() {
  if (bulb.src == "http://localhost/baptiste/exercice-javascript/img/pic_bulboff.gif") {
    bulb.src="http://localhost/baptiste/exercice-javascript/img/pic_bulbon.gif";
  }
  else {
    bulb.src="http://localhost/baptiste/exercice-javascript/img/pic_bulboff.gif";
  }
}
