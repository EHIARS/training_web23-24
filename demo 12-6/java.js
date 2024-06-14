function rangeRNG(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function throttle(mainFunction, delay) {
    let timerFlag = null;
    return (...args) => {
        if (timerFlag === null) {
            mainFunction(...args);
            timerFlag = setTimeout(() => {
                timerFlag = null;
            }, delay);
        }
    };
}
function debounce(mainFunction, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            mainFunction(...args);
        }, delay);
    };
};

function changecolor(name){
    let text = document.getElementById(name)
    text.style:color:rgb(rangeRNG(0;250);rangeRNG(0;250);rangeRNG(0;250))
}
const mybutton = document.getElementById("but1")
mybutton.addEventListener("click",changecolor("text1"))