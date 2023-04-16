function openImage() {
    var image = document.getElementById("myImage");
    var fullScreen = window.open("");
    fullScreen.document.write("<img src='" + image.src + "'/>");
  }
  
  var image = document.getElementById("myImage");
  image.addEventListener("click", openImage);  