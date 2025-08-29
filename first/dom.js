let input = document.getElementById("age-input");
let button = document.getElementById("submit");
let number = document.getElementById("fav-number");

button.addEventListener("click", () => {
  console.log(input.value + number.value);
});
