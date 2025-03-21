import "../css/styles.css";
import CoffeeImage from "../img/coffee-clipart.jpg";
console.log(coolGreeting);

const figure = document.querySelector("figure");

// for creating images
const coffeeImage = document.createElement("img");
coffeeImage.src = CoffeeImage;
figure.prepend(coffeeImage)