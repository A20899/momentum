const timeElement = document.getElementById('time');
const greetingElement = document.getElementById('greeting');


function updateTime() {
  const date = new Date();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  let is12 = localStorage.getItem("clockContext") || "12"
  let session = is12 == "12" ? "AM" : "";

  if (is12 == "12") {
    if(hours === 0){ 
        hours = 12;
    }
    if(hours > 12){
        hours = hours - 12;
        session = "PM";
     }
    }
  

  const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${session}`;
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

timeElement.addEventListener("click", () => {
  const storage = localStorage.getItem("clockContext") || "12"
  localStorage.setItem("clockContext", storage == "12" ? "24" : "12")
})


updateTime();
setGreeting();
