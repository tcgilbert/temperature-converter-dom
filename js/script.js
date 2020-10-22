//js variables
let userInput = 0;
let result = 0;
//DOM elements
const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");
const output = document.getElementById("output");
const faren = document.getElementById("faren");
const celcius = document.getElementById("celcius");
const textField = document.getElementById("user-input");
//default behavior
reset();

//event listeners
submitBtn.addEventListener("click", update);
resetBtn.addEventListener("click", reset);
textField.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    update();
  }
});

//functions
function update() {
  userInput = document.getElementById("user-input").value;
  let converted;
  if (celcius.checked) {
    converted = cToF(userInput);
    output.innerHTML = `${userInput}&degC = ${converted}&degF`;
  } else {
    converted = fToC(userInput);
    output.innerHTML = `${userInput}&degF = ${converted}&degC`;
  }
}

function reset() {
  output.innerHTML = "0&degF = 0&degC";
  textField.value = "";
  faren.checked = true;
  textField.value = "0";
}

function fToC(input) {
  let converted = (input - 32) * (5 / 9);
  return converted.toFixed();
}

function cToF(input) {
  let converted = input * (5 / 9) + 32;
  return converted.toFixed();
}
