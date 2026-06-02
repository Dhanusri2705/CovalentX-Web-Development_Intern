let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

let lapCounter = 1;

function updateDisplay(){

    let h = String(hours).padStart(2,"0");
    let m = String(minutes).padStart(2,"0");
    let s = String(seconds).padStart(2,"0");

    document.getElementById("display").innerText =
        `${h}:${m}:${s}`;
}

function stopwatch(){

    seconds++;

    if(seconds === 60){
        seconds = 0;
        minutes++;
    }

    if(minutes === 60){
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

function startStopwatch(){

    if(timer !== null){
        return;
    }

    timer = setInterval(stopwatch,1000);
}

function pauseStopwatch(){

    clearInterval(timer);

    timer = null;
}

function resetStopwatch(){

    clearInterval(timer);

    timer = null;

    seconds = 0;
    minutes = 0;
    hours = 0;

    lapCounter = 1;

    document.getElementById("laps").innerHTML = "";

    updateDisplay();
}

function addLap(){

    if(hours === 0 && minutes === 0 && seconds === 0){
        return;
    }

    let lapTime =
        `${String(hours).padStart(2,'0')}:` +
        `${String(minutes).padStart(2,'0')}:` +
        `${String(seconds).padStart(2,'0')}`;

    let lap = document.createElement("div");

    lap.classList.add("lap");

    lap.innerText =
        `Lap ${lapCounter} - ${lapTime}`;

    document.getElementById("laps")
            .appendChild(lap);

    lapCounter++;
}