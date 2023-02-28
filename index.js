let countEl = document.querySelector("#count-el");
let count = 0;

function increment() {
  count = ++count;
  countEl.innerText = count;
  console.log(count);
}

let incrementBtn = document.querySelector("#increment-btn");
incrementBtn.addEventListener("click", increment);
