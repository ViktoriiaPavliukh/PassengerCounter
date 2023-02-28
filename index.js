let countEl = document.querySelector("#count-el");
let saveEl = document.querySelector("#save-el");
let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  let countStr = " " + count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}

let incrementBtn = document.querySelector("#increment-btn");
incrementBtn.addEventListener("click", increment);

let saveBtn = document.querySelector("#save-btn");
saveBtn.addEventListener("click", save);
