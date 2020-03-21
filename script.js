const input = document.querySelector("input");
const change1 = document.querySelector("#change1");
const change2 = document.querySelector("#change2");
const change3 = document.querySelector("#change3");
const body = document.querySelector("body");
const select = document.querySelector("select");
const colorChoiceDeluxe = document.querySelector("#colorChoiceDeluxe");

change1.addEventListener("click", function() {
  body.style.background = select.value;
});

change2.addEventListener("click", function() {
  body.style.background = input.value;
});

input.addEventListener("keyup", function() {
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    change2.click();
  }
});

change3.addEventListener("click", function() {
  body.style.background = colorChoiceDeluxe.value;
});
