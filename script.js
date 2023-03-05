/*----------------------
    DOM ELEMENTS
-----------------------*/

const daysElm = document.querySelector('#days');
const hoursElm = document.querySelector('#hours');
const minutesElm = document.querySelector('#minutes');
const secondsElm = document.querySelector('#seconds');
const headerElm = document.querySelector('.header');


//data anniversario
const endDate = new Date("May 2 2023");
const endDateInMs = endDate.getTime();


//tabella in ms

const secondInMs = 1000;
const minuteInMs = 60 * secondInMs;
const hourInMs = 60 * minuteInMs;
const dayInMs = 24 * hourInMs;

const counterTimer = setInterval(timer, 1000);

function timer() {
    //oggi in ms
    const nowInMs = new Date().getTime();

    const diff = endDateInMs - nowInMs;
    
    if (diff > 0) {
    daysElm.innerHTML = Math.floor(diff / dayInMs);
    hoursElm.innerHTML = Math.floor ((diff % dayInMs) / hourInMs);
    minutesElm.innerHTML = Math.floor ((diff % hourInMs) / minuteInMs);
    secondsElm.innerHTML = Math.floor ((diff % minuteInMs) / secondInMs);
    } else {
    clearInterval(timer);
    headerElm.innerHTML = '<h1 style = margin-top:30%>Buon anniversario!</h1>'
    }
}
