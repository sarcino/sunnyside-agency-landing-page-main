var hamburger = document.querySelector(".hamburger");
var navigation = document.querySelector(".nav-box");
var header = document.getElementsByTagName("header");

hamburger.addEventListener("click", function () {
    navigation.classList.toggle("show-nav");
});

