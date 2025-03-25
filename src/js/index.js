import "../css/styles.css";
import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import burgerImage from "../img/burger.jpg";
import macImage from "../img/mac-cheese.jpg";
import pancakeImage from "../img/pancakes.jpg";

// loadHomePage();

// Retrieve the 3 menu buttons
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

homeButton.addEventListener("click", loadHomePage);
menuButton.addEventListener("click", loadMenuPage);

// For testing, will remove later

const figureBurger = document.querySelector("#cozy-burger figure");
const figureMac = document.querySelector("#mac-cheese figure");
const figurePancake = document.querySelector("#pancakes figure");

const burgerTime = document.createElement("img");
burgerTime.src = burgerImage;
burgerTime.alt = "An image of a delicious burger";

const macTime = document.createElement("img");
macTime.src = macImage;
macTime.alt = "An image of creamy Mac & Cheese";

const pancakeTime = document.createElement("img");
pancakeTime.src = pancakeImage;
pancakeTime.alt = "An image of our delicious fluffy pancakes";

figureBurger.prepend(burgerTime);
figureMac.prepend(macTime);
figurePancake.prepend(pancakeTime);