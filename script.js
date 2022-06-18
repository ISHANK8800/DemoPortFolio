const checkBox = document.querySelector("#toggle");
const html = document.querySelector("html");

checkBox.addEventListener("click", function darkMode() {
  checkBox.checked ? html.classList.add("dark") : html.classList.remove("dark");
});

darkMode();
