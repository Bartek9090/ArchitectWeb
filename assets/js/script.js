// display sidebar

const hamMenu = document.querySelector(".hamburger-menu");
hamMenu.addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

// close sideBar after click

const allMenuLink = document.querySelectorAll(".menu-link");

allMenuLink.forEach(function (link) {
  link.addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
  });
});
