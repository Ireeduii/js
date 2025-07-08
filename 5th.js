let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");
let num3Input = document.getElementById("num3");
let addBtn = document.getElementById("addBtn");
let mulBtn = document.getElementById("mulBtn");
let divBtn = document.getElementById("divBtn");
let maxBtn = document.getElementById("maxBtn");
let minBtn = document.getElementById("minBtn");
let aveBtn = document.getElementById("aveBtn");

addBtn.addEventListener("click", () => {
  console.log(parseInt(num1.value) + parseInt(num2.value));
});

minBtn.addEventListener("click", () => {
  console.log(parseInt(num1.value) - parseInt(num2.value));
});

mulBtn.addEventListener("click", () => {
  console.log(parseInt(num1.value) * parseInt(num2.value));
});

divBtn.addEventListener("click", () => {
  console.log(parseInt(num1.value) % parseInt(num2.value));
});

maxBtn.addEventListener("click", () => {
  let num1 = parseInt(num1Input.value);
  let num2 = parseInt(num2Input.value);
  let num3 = parseInt(num3Input.value);

  if (num1 > num2) {
    if (num3 > num1) {
      console.log(num3);
    } else {
      console.log(num1);
    }
  } else {
    if (num2 > num3) {
      console.log(num2);
    } else {
      console.log(num3);
    }
  }
});

minBtn.addEventListener("click", () => {
  let num1 = parseInt(num1Input.value);
  let num2 = parseInt(num2Input.value);
  let num3 = parseInt(num3Input.value);
  if (num1 < num2) {
    if (num3 < num1) {
      console.log(num3);
    } else {
      console.log(num1);
    }
  } else {
    if (num2 < num3) {
      console.log(num2);
    } else {
      console.log(num3);
    }
  }
});
