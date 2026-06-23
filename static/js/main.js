function driver() {
  const button = document.querySelector("#hamburgerBtn");
  const mobileNav = document.querySelector("[data-mobile-nav]");

  button.addEventListener("click", () => {
    button.classList.toggle("open");
    mobileNav.classList.toggle("show");
    console.log("executing");
  });
}

driver();
