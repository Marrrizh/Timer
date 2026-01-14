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
    UpdateDisplay();
};

startButton.addEventListener('click', function() {
   getTimeFromInputs();
   if (totalSeconds>0 && isRunning===false) {

     isRunning = true;
     isPaused = false;

   
    Display.classList.remove('ready', 'paused', 'finished');
    Display.classList.add('running');
        
    
    pauseButton.disabled = false;

    timerInterval = setInterval(function() {
    totalSeconds--; 
    UpdateDisplay();
     if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        finishTimer();
    }

    }, 1000);
};

});

pauseButton.addEventListener('click', function() {
    if (isRunning === true && isPaused === false) {
     clearInterval(timerInterval);
     isPaused = true;
   
     Display.classList.remove('ready', 'running', 'finished');
     Display.classList.add('paused');

    } else if (isPaused === true) {
      isPaused = false;
      isRunning = true;

       timerInterval = setInterval(function() {
    totalSeconds--; 
    UpdateDisplay();

    if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        finishTimer();
    }

  }, 1000);

    Display.classList.remove('ready', 'paused', 'finished');
    Display.classList.add('running');     
    }
   
});

function finishTimer() {
    clearInterval(timerInterval);
    totalSeconds = 0;
    UpdateDisplay();

    Display.classList.remove('running', 'paused', 'ready');
    Display.classList.add('finished');

 
timerFinished.style.display = 'block';

document.querySelector('.timer-digits').style.display = 'none';

isRunning = false;
isPaused = false;
};

clearButton.addEventListener('click', function() {
   
   clearInterval(timerInterval);
    
   isRunning = false;
   isPaused = false;
   totalSeconds=0;
 
   minutesInput.value='';
   secondsInput.value='';
   
   UpdateDisplay();

    Display.classList.remove('running', 'paused', 'finished');
    Display.classList.add('ready');
    
    timerFinished.style.display = 'none';
document.querySelector('.timer-digits').style.display = 'block';
    
    
   
});