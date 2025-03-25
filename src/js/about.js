import coffeeImage from "../img/coffee-clipart.jpg";

export default function loadAboutPage() {
    const contentContainer = document.querySelector("#content");
    contentContainer.innerHTML = generateAboutHTML();
}

function generateAboutHTML() {
    const aboutContent = `
        <h2>About Page</h2>

        <h3>Our Story:</h3>
        <img src=${coffeeImage} alt="A wonderful clipart of a coffee cup">
        <q>Cozy Bites was founded with one goal: to bring comfort food to every table. Whether you're here for a quick
            bite or a long chat over coffee, we're happy to have you.</q>

        <h3>Location & Hours</h3>
        <p>Find us at 123 Cozy Lane, Cozy City. Open 8 AM - 8PM daily.</p>`;

    return aboutContent;
}