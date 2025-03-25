import burgerImage from "../img/burger.jpg";
import macImage from "../img/mac-cheese.jpg";
import pancakeImage from "../img/pancakes.jpg";

export default function loadMenuPage() {
    const contentContainer = document.querySelector("#content");
    contentContainer.innerHTML = generateMenuHTML();
    addImages();
}

// Helper function to add all HTML code into a String
function generateMenuHTML() {
    var contentToAdd = "";
    contentToAdd += "<h1>Cozy Bites - Menu<\/h1>";
    contentToAdd += "";
    contentToAdd += "        <h2>The Menu<\/h2>";
    contentToAdd += "";
    contentToAdd += "        <div class=\"menu-item\" id=\"cozy-burger\">";
    contentToAdd += "            <figure>";
    contentToAdd += "                <figcaption>$7.00: Signature Cozy Burger<\/figcaption>";
    contentToAdd += "            <\/figure>";
    contentToAdd += "            <p>Introducing our greatest burger! With a juicy beef patty with melted chedder,";
    contentToAdd += "                caramelized onions, and house sauce.";
    contentToAdd += "            <\/p>";
    contentToAdd += "        <\/div>";
    contentToAdd += "        <div class=\"menu-item\" id=\"mac-cheese\">";
    contentToAdd += "            <figure>";
    contentToAdd += "                <figcaption>$5.00: Homemade Mac & Cheese<\/figcaption>";
    contentToAdd += "            <\/figure>";
    contentToAdd += "            <p>Creamy, cheesy goodness with a crispy breadcrumb topping.";
    contentToAdd += "            <\/p>";
    contentToAdd += "        <\/div>";
    contentToAdd += "        <div class=\"menu-item\" id=\"pancakes\">";
    contentToAdd += "            <figure>";
    contentToAdd += "                <figcaption>$9.00: Cozy Pancakes<\/figcaption>";
    contentToAdd += "            <\/figure>";
    contentToAdd += "            <p>Fluffy pancakes with a hint of vanilla, served with our homemade maple syrup.";
    contentToAdd += "            <\/p>";
    contentToAdd += "        <\/div>";
    return contentToAdd;

}

function addImages() {
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
}
