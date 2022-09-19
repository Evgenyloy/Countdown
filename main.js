//timer -----------------------------------------------------------------------
let dayElement = document.querySelector('.countdown__number-day');
let hourElement = document.querySelector('.countdown__number-hour');
let minuteElement = document.querySelector('.countdown__number-minute');
let secondElement = document.querySelector('.countdown__number-second');



function countDown() {
    const curentDate = new Date();
    const year = new Date(`2023.01.01 00:00:00`);
    const difference = year - curentDate;
    changeСountDown(difference);
}


setInterval(countDown, 1000);
countDown();


function changeСountDown(difference) {
    const day = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hour = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minute = Math.floor(difference / 1000 / 60) % 60;
    const second = Math.floor(difference / 1000) % 60;

    dayElement.innerText = day;
    hourElement.innerText = hour <= 9 ? '0' + hour : hour;
    minuteElement.innerText = minute <= 9 ? '0' + minute : minute;
    secondElement.innerText = second <= 9 ? '0' + second : second;
}

