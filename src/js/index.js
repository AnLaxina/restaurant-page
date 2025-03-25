import "../css/styles.css";
import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import burgerImage from "../img/burger.jpg";
import macImage from "../img/mac-cheese.jpg";

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

const burgerTime = document.createElement("img");
burgerTime.src = burgerImage;
burgerTime.alt = "An image of a delicious burger";

const macTime = document.createElement("img");
macTime.src = macImage;
macTime.alt = "An image of creamy Mac & Cheese";

figureBurger.prepend(burgerTime);
figureMac.prepend(macTime);