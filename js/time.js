const nextYear = new Date('April 30 2022 00:00:00');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minuts = document.querySelector('#minuts');
const seconds = document.querySelector('#seconds');
let header = document.querySelector('.header__title');

function updateCounter() { 
    const currentTime = new Date();
    const diff = nextYear - currentTime;
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutsLeft = Math.floor(diff / 1000 / 60) % 60;
    const secondsLeft = Math.floor(diff / 1000)  % 60;

    days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minuts.innerText = minutsLeft < 10 ? '0' + minutsLeft : minutsLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}
updateCounter();
setInterval(updateCounter, 1000)

