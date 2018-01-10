console.log("Star wars hyperdrive engaged!");

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");
const buttonLeft = document.querySelector(".button-left");
const buttonRight = document.querySelector(".button-right");
const kyloOn = new Audio("./lib/sounds/darkside.wav");
const resistance = new Audio("./lib/sounds/res.wav")
const saberOff = new Audio("./lib/sounds/off.mp3");

left.addEventListener("mouseenter", () => {
    container.classList.add("hover-left");
});
left.addEventListener("mouseleave", () => {  
    container.classList.remove("hover-left");
});
right.addEventListener("mouseenter", () => {
    container.classList.add("hover-right");
});
right.addEventListener("mouseleave", () => {
    container.classList.remove("hover-right");
})

buttonLeft.addEventListener("click", () => {
    kyloOn.play();
});

buttonRight.addEventListener("click", () => {
    resistance.play();
})