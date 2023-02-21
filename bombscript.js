const bombContainer = document.querySelector("#bomb_container");
const bombSprite = document.querySelector("#bomb_sprite");

let bombPausedState = false;
let zoomInState = false;

window.addEventListener("load", bombStart);

function bombStart(){
    console.log("start");
    bombContainer.classList.remove("falling");
    bombContainer.offsetLeft;
    bombContainer.classList.add("falling");
    bombContainer.addEventListener("click", handleBombClick);
    bombSprite.addEventListener("animationend", bombReStart);
}

function handleBombClick(){
    if (!bombPausedState) {
        bombPausedState = true;
        console.log("paused");
        bombContainer.classList.add("paused");
    }
    if (!zoomInState) {
        zoomInState = true;
        console.log("zoom_in");
        bombSprite.classList.add("zoom_in");
    }
}

function bombReStart() {
    console.log("re-start");
    bombSprite.classList.remove("zoom_in");
    bombContainer.classList.remove("paused");
    bombPausedState = false;
    zoomInState = false;
    bombStart()
}
