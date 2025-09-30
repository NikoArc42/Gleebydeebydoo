const submitButton = document.querySelector("#gernabuttog");
console.log(gernabuttog);

function gatherData() {
  console.log("Button clicked")
}

const germa = document.querySelector("#germa");
const germaValue = germa.value;
console.log(germa);

gernabuttog.addEventListener("click", gatherData);

const jeremiah = document.querySelector("#jeremiah");
jeremiah.textContent = germa;