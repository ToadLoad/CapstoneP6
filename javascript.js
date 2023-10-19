function ImageChanger() {
    var image = document.getElementById('Image');
    if (image.src.match("image1.jpg")) {
      image.src = "image2.jpg";
    } else {
      image.src = "image1.jpg";
    }

}
