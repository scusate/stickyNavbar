var navbar = document.getElementById("navbar");
var stick = navbar.offsetTop;

window.onscroll = function (){

    if (window.scrollY > stick) {
        navbar.classList.add("stick");
        } 
    else {
        navbar.classList.remove("stick");
        }
    };