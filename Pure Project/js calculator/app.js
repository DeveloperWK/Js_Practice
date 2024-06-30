// todo its call IIFFS function
let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".btn-clear");
let equal = document.querySelector(".btn-equal");
let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      screen.value = string;
    } else {
      string += e.target.innerHTML;
      screen.value = string;
    }
    clear.addEventListener("click", function (e) {
      string = "";
      screen.value = string;
    });
  });
});
