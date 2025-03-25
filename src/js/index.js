import "../css/styles.css";
import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadAboutPage from "./about.js";

loadHomePage();

// Retrieve the 3 menu buttons
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

homeButton.addEventListener("click", loadHomePage);
homeButton.addEventListener("click", (e) => {
    highlightTabButton(e);
})
menuButton.addEventListener("click", loadMenuPage);
menuButton.addEventListener("click", (e) => {
    highlightTabButton(e);
})
aboutButton.addEventListener("click", loadAboutPage);
aboutButton.addEventListener("click", (e) => {
    highlightTabButton(e);
})
// Helper function to add styling to the button based
// on the currently visited page
function highlightTabButton(event) {
    const allTabButtons = document.querySelectorAll("button");
    allTabButtons.forEach((button) => button.classList.replace("highlighted", "normal"));
    event.target.classList.replace("normal", "highlighted");
}