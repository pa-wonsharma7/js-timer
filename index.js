const inputDuration = document.querySelector("#input-time");
const startButton = document.querySelector("#start-button");
const pauseButton = document.querySelector("#pause-button");
const circle = document.querySelector("circle");
const perimeter = 2 * circle.getAttribute("r") * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);
let duration;

const timer = new Timer(inputDuration, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
    }, 
    onTick(timeRemaining) {
        circle.setAttribute("stroke-dashoffset", perimeter * timeRemaining / duration - perimeter);
    }, 
    onComplete() {
        console.log("timer complete");
    } 
});