function ImageChanger() {
    var image = document.getElementById('Image');
    if (image.src.match("image1.jpg")) {
      image.src = "image2.jpg";
    } else {
      image.src = "image1.jpg";
    }

}

var Title = document.getElementById('myTitle');

function TitleChanger(){
  if (Title.innerHTML.match("Frog Treats")){
    Title.innerHTML = "Jelly Candy";
    Title.style.backgroundColor =  "#33cc33"
  }
  else if (Title.innerHTML.match("Jelly Candy")){
    Title.innerHTML = "Fly Snacks";
    Title.style.backgroundColor = "#7B7878"
  }

  else{
    Title.innerHTML = "Frog Treats";
    Title.style.background= "transparent"
  }
  }

/* later */
clearInterval(refreshIntervalId);
