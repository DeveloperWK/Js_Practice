function welcomeMessage() {
  var h1 = document.createElement("h1");

  let text;
  var name = prompt("Enter Your Name ");

  if (name === null || name === "") {
    text = "No Name found";
  } else {
    text = "Happy Birthday " + name;
  }
  var textNode = document.createTextNode(text);
  h1.appendChild(textNode);

  document.body.appendChild(h1);
  h1.style.color = "green";
}

welcomeMessage();
