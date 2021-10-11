var open = document.getElementById('hamburger');
var run = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');
    var char = document.getElementById("container_char");

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (run) {
        char.style.display = "none";

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        run = false;
    }
    else {
        char.style.display = "block";
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        run = true;
    }
});