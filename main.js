
var hamburgerMenu = document.querySelector("#hamburger-menu");
var hamburgerIcon = document.querySelector("#hamburger-icon");
var toggleItems = document.querySelectorAll(".hide");

hamburgerMenu.addEventListener('click',() => {
    toggleItems.forEach((link) => {
        link.classList.toggle("show");
    })
    hamburgerIcon.classList.toggle("hide");
})

