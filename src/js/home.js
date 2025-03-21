import CoffeeImage from "../img/coffee-clipart.jpg";
export default function loadHomePage() {
    const contentContainer = document.querySelector("#content");
    const innerContentString = "<h1>Cozy Bites</h1> <figure><figcaption>Where Every Bite Feels Like Home</figcaption></figure><h2>Welcome to Cozy Bites!</h2><p>While we only have 3 food items rest assured that these dishes are the absolute best when it comes to their flavour and quality!</p>";
    contentContainer.innerHTML = innerContentString;

    const figure = document.querySelector("figure");

    // for creating images
    const coffeeImage = document.createElement("img");
    coffeeImage.src = CoffeeImage;
    figure.prepend(coffeeImage)
}