const text = document.getElementById("text");
const total = document.getElementById("total");
const remaining = document.getElementById("remaining");

const limit = 50;

text.addEventListener("input", () => {
  let length = text.value.length;

  total.textContent = length;
  remaining.textContent = limit - length;

  // Lock textarea when limit reached
  if (length >= limit) {
    text.value = text.value.substring(0, limit);
    remaining.textContent = 0;
  }
});