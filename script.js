const minutesInput=document.querySelector('.minutes-input');
const secondsInput=document.querySelector('.seconds-input');
const Minutes=document.querySelector('.minutes');
const Seconds=document.querySelector('.seconds');
const Display=document.querySelector('.display');
const timerFinished=document.querySelector('.timer-finished');
const startButton=document.querySelector('.start');
const pauseButton=document.querySelector('.pause');
const clearButton=document.querySelector('.clear');

let totalSeconds=0;
let timerInterval=null;
let isRunning=false;
let isPaused=false;

function UpdateDisplay() {
    let minutes= Math.floor(totalSeconds/60);
    let seconds=totalSeconds%60;

    let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    
    Minutes.textContent = formattedMinutes;
    Seconds.textContent = formattedSeconds; 
}

function getTimeFromInputs() {
    let minutes=Number(minutesInput.value);
    let seconds=Number(secondsInput.value);
    totalSeconds=minutes*60+seconds;
    UpdateDisplay()
}