
var hamburgerMenu = document.querySelector("#hamburger-menu");
var hamburgerIcon = document.querySelector("#hamburger-icon");
var toggleItems = document.querySelectorAll(".hide");
var main = document.querySelector(".main");


hamburgerMenu.addEventListener('click',() => {
    toggleItems.forEach((link) => {
        link.classList.toggle("show");
    })
    main.classList.toggle("hide");
    hamburgerIcon.classList.toggle("hide");
})

