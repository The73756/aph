import { burger } from "../functions/burger";

const menuItems = document.querySelectorAll(".header-nav__link");

const closeMenu = burger();

menuItems.forEach((el) => {
  el.addEventListener("click", closeMenu);
});
