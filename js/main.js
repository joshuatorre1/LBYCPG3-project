var icon = document.getElementById("icon");

var sdg1_img = document.getElementById("sdg1-img");
var sdg2_img = document.getElementById("sdg2-img");
var sdg3_img = document.getElementById("sdg3-img");
var sdg4_img = document.getElementById("sdg4-img");
var sdg5_img = document.getElementById("sdg5-img");
var sdg6_img = document.getElementById("sdg6-img");
var sdg7_img = document.getElementById("sdg7-img");
var sdg8_img = document.getElementById("sdg8-img");
var sdg9_img = document.getElementById("sdg9-img");
var sdg10_img = document.getElementById("sdg10-img");
var sdg11_img = document.getElementById("sdg11-img");
var sdg12_img = document.getElementById("sdg12-img");
var sdg13_img = document.getElementById("sdg13-img");
var sdg14_img = document.getElementById("sdg14-img");
var sdg15_img = document.getElementById("sdg15-img");
var sdg16_img = document.getElementById("sdg16-img");
var sdg17_img = document.getElementById("sdg17-img");
var dropdown = document.getElementById("dropdown");
var nav_button = document.getElementById("navbar-button");

let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('#icon');

const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
    darkModeImages();
};

const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", null);
    lightModeImages();
};

if(darkMode === "enabled") {
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if(darkMode !== "enabled") {
        enableDarkMode(); 
    } else {
        disableDarkMode();
    }
});

function darkModeImages() {
    icon.src = "assets/icons/sun.png"
    sdg1_img.src = "assets/sdg-icons/sdg-1.png"
    sdg2_img.src = "assets/sdg-icons/sdg-2.png"
    sdg3_img.src = "assets/sdg-icons/sdg-3.png"
    sdg4_img.src = "assets/sdg-icons/sdg-4.png"
    sdg5_img.src = "assets/sdg-icons/sdg-5.png"
    sdg6_img.src = "assets/sdg-icons/sdg-6.png"
    sdg7_img.src = "assets/sdg-icons/sdg-7.png"
    sdg8_img.src = "assets/sdg-icons/sdg-8.png"
    sdg9_img.src = "assets/sdg-icons/sdg-9.png"
    sdg10_img.src = "assets/sdg-icons/sdg-10.png"
    sdg11_img.src = "assets/sdg-icons/sdg-11.png"
    sdg12_img.src = "assets/sdg-icons/sdg-12.png"
    sdg13_img.src = "assets/sdg-icons/sdg-13.png"
    sdg14_img.src = "assets/sdg-icons/sdg-14.png"
    sdg15_img.src = "assets/sdg-icons/sdg-15.png"
    sdg16_img.src = "assets/sdg-icons/sdg-16.png"
    sdg17_img.src = "assets/sdg-icons/sdg-17.png" 
    dropdown.classList.add("dropdown-menu-dark");
    nav_button.classList.add("navbar-dark");
}

function lightModeImages() {
    icon.src = "assets/icons/moon.png"
    sdg1_img.src = "assets/sdg-icons/sdg-1-color.png"
    sdg2_img.src = "assets/sdg-icons/sdg-2-color.png"
    sdg3_img.src = "assets/sdg-icons/sdg-3-color.png"
    sdg4_img.src = "assets/sdg-icons/sdg-4-color.png"
    sdg5_img.src = "assets/sdg-icons/sdg-5-color.png"
    sdg6_img.src = "assets/sdg-icons/sdg-6-color.png"
    sdg7_img.src = "assets/sdg-icons/sdg-7-color.png"
    sdg8_img.src = "assets/sdg-icons/sdg-8-color.png"
    sdg9_img.src = "assets/sdg-icons/sdg-9-color.png"
    sdg10_img.src = "assets/sdg-icons/sdg-10-color.png"
    sdg11_img.src = "assets/sdg-icons/sdg-11-color.png"
    sdg12_img.src = "assets/sdg-icons/sdg-12-color.png"
    sdg13_img.src = "assets/sdg-icons/sdg-13-color.png"
    sdg14_img.src = "assets/sdg-icons/sdg-14-color.png"
    sdg15_img.src = "assets/sdg-icons/sdg-15-color.png"
    sdg16_img.src = "assets/sdg-icons/sdg-16-color.png"
    sdg17_img.src = "assets/sdg-icons/sdg-17-color.png"
    dropdown.classList.remove("dropdown-menu-dark"); 
    nav_button.classList.remove("navbar-dark");
}
