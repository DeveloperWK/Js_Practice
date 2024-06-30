var photos = ["img/img1.jpg", "img/img2.webp", "img/img3.jpg", "img/img4.png"];
var imgTag = document.querySelector("img");
var count = 0;
console.log(photos.length);
function next() {
  count++;
  if (count >= photos.length) {
    count = 0;
    imgTag.src = photos[count];
  } else {
    imgTag.src = photos[count];
  }
}

function prev() {
  count--;
  if (count < 0) {
    count = photos.length - 1;
    imgTag.src = photos[count];
  } else {
    imgTag.src = photos[count];
  }
}

// var h1 = document.querySelector("h1");
// var b = document.querySelector(".hello");

// function changeCss() {
//   h1.style.color = "red";
// }
