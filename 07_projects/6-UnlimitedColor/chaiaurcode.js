//generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];//FLOOR will give the lower value of the whole number with decimals
    }
    return color;
};

let intervalId;//GLOBAL SCOPE DECLARATION
const startChangingColor = function () {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

