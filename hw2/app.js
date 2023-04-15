const parent = document.querySelector('.parent');
const child = document.querySelector('.child');
const radius = parent.offsetWidth / 2 - child.offsetWidth / 2;
let angle = 0;

function animate() {
    const x = radius * Math.cos(angle) + parent.offsetWidth / 2 - child.offsetWidth / 2;
    const y = radius * Math.sin(angle) + parent.offsetHeight / 2 - child.offsetHeight / 2;
    if (x >= 0 && x <= parent.offsetWidth - child.offsetWidth) {
        child.style.left = x + 'px';
    }
    if (y >= 0 && y <= parent.offsetHeight - child.offsetHeight) {
        child.style.top = y + 'px';
    }
    angle += 0.01;
    if (angle >= 2 * Math.PI) {
        angle = 0;
    }
    setTimeout(animate, 10);
}

animate();
const timerMinutes = document.querySelector('.timer-minutes');
const timerSeconds = document.querySelector('.timer-seconds');
const timerMessage = document.querySelector('.timer-message');
let seconds = 0;

function updateTimer() {
    if (seconds === 300) {
        timerMessage.innerHTML = 'Время вышло';
        return;
    }
    if (seconds % 60 === 0) {
    }
    seconds++;
    timerMinutes.innerHTML = Math.floor(seconds / 60);
    timerSeconds.innerHTML = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    setTimeout(updateTimer, 1000);
}

updateTimer();

