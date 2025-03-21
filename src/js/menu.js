import burgerImage from "../img/burger.jpg";

const figure = document.querySelector("figure");
const burgerTime = document.createElement("img");
burgerTime.src = burgerImage;
figure.prepend(burgerImage);