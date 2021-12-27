let imputs, clock, alarm, hours, minutes, seconds, repeater;

window,addEventListener ('load', () => {
    imputs = Array.from(document.getElementsByClassName('number'));
    clock = document.querySelector('.clock');
    alarm = new Audio('ringtone/free-music-loop-for-arcade-games-and-videos.mp3')
})

function startTimer() {
   
    //leer imputs
     parseTime();
    //actualizar la vista
    setTimer();
    //arrancar el timer
    countDown();

}

function parseTime(){
    hours = Number(imputs[0].value);
    minutes = Number(imputs[1].value);
    seconds = Number(imputs[2].value)
}

function setTimer(){
    clock.innerHTML = `<p class="number">${hours > 9 ? hours : ('0' + hours)} </p><span>Hs</span>
    <p class="number">${minutes > 9 ? minutes : ('0' + minutes)} </p><span>Min</span>
    <p class="number">${seconds > 9 ? seconds : ('0' + seconds)} </p><span>Seg</span>`;

    document.title = `${hours > 9 ? hours : ('0' + hours)} : ${minutes > 9 ? minutes : ('0' + minutes)} :
    ${seconds > 9 ? seconds : ('0' + seconds)} `;
    }

function countDown() {
    repeater = setInterval(runner,1000);
}

function runner() {
    if (seconds >0) {
        seconds--;
    }else {
        if (minutes >0) {
            seconds =59;
            minutes--;
        }else {
            if(hours>0) {
                seconds =59;
                minutes=59;
                hours--
            } else {
                alarm.play()
            }
        }
    }
    setTimer();
}

function stopTimer() {
    clearInterval(repeater);
    location.reload();

}