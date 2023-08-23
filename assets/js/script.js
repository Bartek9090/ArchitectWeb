// display sidebar

const hamMenu = document.querySelector(".hamburger-menu");
hamMenu.addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});
