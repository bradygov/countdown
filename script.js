let countdownTime = 15; 
const countdownElement = document.getElementById('countdown');
const backgroundElement = document.getElementById('background');
const startButton = document.getElementById('startButton');

function updateCountdown() {
    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;
    countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    if (countdownTime <= 0) {
        clearInterval(countdownInterval);
        showFinalMessage();
    }
    countdownTime--;
}

function showFinalMessage() {
    countdownElement.textContent = ""; 
    for (let i = 0; i < 100; i++) { 
        setTimeout(() => {
            createMessage();
        }, i * 300); 
    }
}

function createMessage() {
    const message = document.createElement('div');
    message.textContent = "HAHAHA YOU WASTED YOUR TIME";
    message.style.position = 'absolute';
    message.style.color = 'white';
    message.style.fontSize = '24px';
    message.style.whiteSpace = 'nowrap';
    
   
    const x = Math.random() * (window.innerWidth - 200); 
    const y = Math.random() * (window.innerHeight - 50); 
    message.style.left = `${x}px`;
    message.style.top = `${y}px`;
    
    document.body.appendChild(message);
}

startButton.addEventListener('click', () => {
    startButton.style.display = 'none'; 
    countdownElement.style.display = 'block'; 
    updateCountdown(); 
    countdownInterval = setInterval(updateCountdown, 1000); 
});


document.addEventListener('mousemove', (event) => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    backgroundElement.style.backgroundColor = `rgba(${Math.floor(x * 50)}, ${Math.floor(y * 50)}, 50, 0.9)`;
});


document.addEventListener('click', () => {
    backgroundElement.style.backgroundColor = `rgba(${Math.random() * 50}, ${Math.random() * 50}, ${Math.random() * 50}, 0.9)`;
});