const coinContainer = document.querySelector("#coin1_container");
const coinSprite = document.querySelector("#coin1_sprite");

let pausedState = false;
let zoomOutState = false;

window.addEventListener("load", start);

function start(){
    console.log("start");
    coinContainer.classList.remove("falling");
    coinContainer.offsetLeft;
    coinContainer.classList.add("falling");
    coinContainer.addEventListener("click", handleCoinClick);
    coinSprite.addEventListener("animationend", reStart);
}

function handleCoinClick(){
    if (!pausedState) {
        pausedState = true;
        console.log("paused");
        coinContainer.classList.add("paused");
    }
    if (!zoomOutState) {
        zoomOutState = true;
        console.log("zoom-out");
        coinSprite.classList.add("zoom_out");
    }
}

function reStart() {
    console.log("re-start");
    coinSprite.classList.remove("zoom_out");
    coinContainer.classList.remove("paused");
    pausedState = false;
    zoomOutState = false;
    start()
}


//////////////////////////////////// pause+zoom working once, replay.

// const coinContainer = document.querySelector("#coin1_container");
// const coinSprite = document.querySelector("#coin1_sprite");

// window.addEventListener("load", start);

// function start(){
//     console.log("start");
//     coinContainer.classList.remove("falling");
//     coinContainer.offsetLeft;
//     coinContainer.classList.add("falling");
//     coinContainer.addEventListener("click", paused);
//     coinSprite.addEventListener("click", zoomOut);
//     coinSprite.addEventListener("animationend", reStart);
// }

// function paused(){
//     console.log("paused");
//     coinContainer.removeEventListener("click", paused)
//     coinContainer.classList.add("paused");
// }

// function zoomOut(){
//     console.log("zoom-out");
//     coinSprite.removeEventListener("click", zoomOut)
//     coinSprite.classList.add("zoom_out")
// }

//     function reStart() {
//     console.log("re-start");;
//     coinSprite.addEventListener("animationstart", reStart);
//     coinSprite.classList.remove("zoom_out");
//     coinContainer.classList.remove("paused");
//     start();
// }

//////////////////////////////////// lots of replay, pause+zoom not working.

// const coinContainer = document.querySelector("#coin1_container");
// const coinSprite = document.querySelector("#coin1_sprite");

// window.addEventListener("load", start);

// function start() {
//   console.log("start");
//   setupAnimation();
// }

// function setupAnimation() {
//   coinContainer.classList.remove("falling");
//   void coinContainer.offsetLeft; // force a reflow to reset the animation
//   coinContainer.classList.add("falling");
//   coinContainer.addEventListener("click", paused);
//   coinSprite.addEventListener("click", zoomOut);
//   coinSprite.addEventListener("animationend", reStart);
// }

// function paused() {
//   console.log("paused");
//   coinContainer.removeEventListener("click", paused);
//   coinContainer.classList.add("paused")
//   coinContainer.addEventListener("click", unpaused);
// }

// function unpaused() {
//   console.log("unpaused");
//   coinContainer.removeEventListener("click", unpaused);
//   coinContainer.classList.remove("paused");
//   coinContainer.addEventListener("click", paused);
// }

// function zoomOut() {
//   console.log("zoom-out");
//   coinSprite.addEventListener("click", zoomOut);
//   coinSprite.classList.add("zoom_out");
//   coinContainer.removeEventListener("click", paused);
//   coinContainer.classList.add("falling");
//   setupAnimation();
// }

// function reStart() {
//   console.log("re-start");;
//   coinSprite.addEventListener("animationstart", reStart);
//   coinSprite.classList.remove("zoom_out");
//   coinContainer.classList.remove("paused");
//   setupAnimation();
// }
