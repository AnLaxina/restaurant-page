import "../css/styles.css";
import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import burgerImage from "../img/burger.jpg";

// loadHomePage();

// Retrieve the 3 menu buttons
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

homeButton.addEventListener("click", loadHomePage);
menuButton.addEventListener("click", loadMenuPage);

// For testing, will remove later

const figure = document.querySelector("figure");
const burgerTime = document.createElement("img");
burgerTime.src = burgerImage;
figure.prepend(burgerTime);