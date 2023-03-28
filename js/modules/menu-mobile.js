import outsideClick from "./outsideclick.js"

export default function initMenuMobile() {
  
};

const menuButton = document.querySelector("[data-menu='button']");
const menuList = document.querySelector("[data-menu='list']");

function openMenu(event) {
  menuList.classList.add("active");
}

menuButton.addEventListener("click", openMenu);