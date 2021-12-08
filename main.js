var hamburgerMenu = document.querySelector("#hamburger-menu");
var hamburgerIcon = document.querySelector("#hamburger-icon");
var toggleItems = document.querySelectorAll(".hide");
var main = document.querySelector(".main");


hamburgerMenu.addEventListener('click',() => {
    toggleItems.forEach((link) => {
        link.classList.toggle("show");
    })
    hamburgerIcon.classList.toggle("hide");
    main.classList.toggle("hide");

    //Patrik
    if(hamburgerMenu.classList.contains("home")){
        var homeContainer = document.querySelector(".container.home");
        homeContainer.classList.toggle("hide-background");
    }
    //Patrik
    //Lundberg
    else if(hamburgerMenu.classList.contains("contact")){
        var contactFooter = document.querySelector(".footer.contact-footer");
        contactFooter.classList.toggle("fixed");
    }
    //Lundberg
    //Vidar
    else if (hamburgerMenu.classList.contains("testimonials")){
        var testimonialsFooter = document.querySelector(".footer.testimonials-footer");
        testimonialsFooter.classList.toggle("fixed");
    }
    //Vidar
})


// Vidar Rehn

// full star <i class='fas fa-star'></i>
// half star <i class='fas fa-star-half-alt'></i>
// empty star <i class='far fa-star'></i>

const testimonials = [{
    quote: "Aldrig har en flytt varit så enkel. Flyttarna jobbade snabbt, effektivt, var vänliga, och allt detta till ett mycket rimligt pris. Tack flyttarna för ni avlastade mig från all stress jag gått runt och burit på de senaste månaderna!",
    stars: "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i>",
    name: "Henrik Sköld, Uppsala"
},{
    quote: "Jag och min man bokade flyttstäd samt bärhjälp via flyttarna. Efter en halv dag städning så såg lägenheten sprillans ny ut. Vi hade nästan svårt att lämna! Flytten gick även den otroligt smidigt och flyttarna kom förberedda med lådor, emballage och allt annat som man vanligtvis själv glömmer. Vi har ingen anledning att någonsin anlita några andra än flyttarna. TACK!",
    stars: "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
    name: "Malin Bergstedt, Stockholm"
},{
    quote: "Jag kunde inte vara mer tacksam för flyttarna! Ett vänligare bemötande går inte att få <3",
    stars: "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='far fa-star'></i>",
    name: "Matias Kauppinen, Kista"
},{
    quote: "Vilket gäng! Allt från första kontakt var en fröjd. Vi kommer alltid rekommendera flyttarna till våra vänner i behov av städ och flytthjälp.",
    stars: "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i>",
    name: "Fatimah Al Saadi, Danderyd"
}
];

let testimonialQuote = document.querySelector(".citat-text");
let starRating = document.querySelector(".stjärnor");
let nameOfPerson = document.querySelector(".namn");

let leftButton = document.querySelector("#left-btn");
let rightButton = document.querySelector("#right-btn");

let counter = 0;

testimonialQuote.innerText = testimonials[counter].quote;
starRating.innerHTML = testimonials[counter].stars;
nameOfPerson.innerText = testimonials[counter].name;

function nextQuote(){
if (counter == 3){
    counter = -1;
}
testimonialQuote.innerText = testimonials[counter+1].quote;
starRating.innerHTML = testimonials[counter+1].stars;
nameOfPerson.innerText = testimonials[counter+1].name;
counter++;
}

rightButton.addEventListener("click", nextQuote);

function previousQuote(){
if (counter == 0){
    counter = 3;
}
testimonialQuote.innerText = testimonials[counter-1].quote;
starRating.innerHTML = testimonials[counter-1].stars;
nameOfPerson.innerText = testimonials[counter-1].name;
counter--;
}

leftButton.addEventListener("click", previousQuote);

setInterval(nextQuote, 6000)

// Vidar Rehn

// Patrik Lundberg
let contactSubmitButton = document.querySelector("#contactSubmit");

contactSubmitButton.addEventListener("click",() => {
    alert("Tack för meddelandet, vi återkommer så snabbt vi kan.");
});




// Patrik Lundberg