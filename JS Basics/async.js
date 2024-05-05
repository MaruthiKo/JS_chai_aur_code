const start = document.getElementById("start");
const stop = document.getElementById("stop");
const display = document.getElementById("display");
const reset = document.getElementById("reset");
let intervalId;

display.innerHTML  = 0;

let increment = () => {
    display.innerHTML = Number(display.innerHTML) + 1; 
}

start.addEventListener("click", () => {
    console.log("Start")
    intervalId = setInterval(increment, 1000);
    
})


stop.addEventListener("click", () => {
    clearInterval(intervalId);
    console.log("Stop");
    intervalId = null;
})

reset.addEventListener("click", () => {
    display.innerHTML = 0;
    console.log("Reset");
})