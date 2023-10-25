document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header-center-menu");
  const open = document.querySelector(".hambergar-menu i");
  const close = document.querySelector(".fa-xmark");
  open.addEventListener("click", () => {
    menu.classList.toggle("visibility");
  });
  close.addEventListener("click", () => {
    menu.classList.toggle("visibility");
  });
});
