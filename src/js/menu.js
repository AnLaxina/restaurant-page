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
    const contentToAdd = `<h1>Cozy Bites - Menu</h1>

        <h2>The Menu</h2>

        <div class="menu-item" id="cozy-burger">
            <figure>
                <figcaption>$7.00: Signature Cozy Burger</figcaption>
            </figure>
            <p>Introducing our greatest burger! With a juicy beef patty with melted chedder,
                caramelized onions, and house sauce.
            </p>
        </div>
        <div class="menu-item" id="mac-cheese">
            <figure>
                <figcaption>$5.00: Homemade Mac & Cheese</figcaption>
            </figure>
            <p>Creamy, cheesy goodness with a crispy breadcrumb topping.
            </p>
        </div>
        <div class="menu-item" id="pancakes">
            <figure>
                <figcaption>$9.00: Cozy Pancakes</figcaption>
            </figure>
            <p>Fluffy pancakes with a hint of vanilla, served with our homemade maple syrup.
            </p>
        </div>`;

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
