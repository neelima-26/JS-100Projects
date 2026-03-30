const selector = document.getElementById("selector");
const options = document.getElementById("options");
const selectedText = document.getElementById("selectedText");
const arrow = document.getElementById("arrow");
const items = document.querySelectorAll(".options li");

// Toggle menu
selector.addEventListener("click", () => {
  options.classList.toggle("show");
  arrow.classList.toggle("rotate");
});

// Select option
items.forEach(item => {
  item.addEventListener("click", () => {
    selectedText.textContent = item.dataset.name;

    // Close menu
    options.classList.remove("show");
    arrow.classList.remove("rotate");
  });
});