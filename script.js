const timeElement = document.getElementById('time');
const greetingElement = document.getElementById('greeting');


function updateTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  timeElement.textContent = timeString;

  setTimeout(updateTime, 1000);
}

function setGreeting() {
  const date = new Date();
  const hours = date.getHours();

  let greeting = '';

  if (hours < 12) {
    greeting = 'Good morning';
  } else if (hours < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  greetingElement.textContent = greeting;
}



updateTime();
setGreeting();
