import burgerImage from "../img/burger.jpg";
export default function loadMenuPage() {
    const figure = document.querySelector("figure");
    const burgerTime = document.createElement("img");
    burgerTime.src = burgerImage;
    figure.prepend(burgerImage);
}
