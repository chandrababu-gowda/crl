let hamBtn = document.querySelector(".section--nav__ham");
let menu = document.querySelector(".nav--display");

hamBtn.addEventListener("click", () => {
  if (menu.classList.contains("nav__display--hide")) {
    menu.classList.remove("nav__display--hide");
  } else {
    menu.classList.add("nav__display--hide");
  }
});

// console.log(menu.classList);
