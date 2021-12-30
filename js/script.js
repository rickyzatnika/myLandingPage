// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    // Set AM or PM
    
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  hour = hour % 24 || 24;

  // Output Time

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
  
}

// Add Zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if(hour < 12) {
    // morning
    document.body.style.backgroundImage = "url('../../images/morning.jpg')";
    greeting.textContent = 'Good Morning';
  } else if(hour < 18) {
    // affternoon
    document.body.style.backgroundImage = "url('.././/images/affternoon.jpeg')";
    greeting.textContent = 'Good Afternoon';
  } else {
    // evening
    document.body.style.backgroundImage = "url('../../images/evening.jpg')";
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
  }
}
// Get Name
function getName() {
  if(localStorage.getItem('name') === null) {
    name.textContent = '[ Enter Name ]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if(e.type === 'keypress') {
    // make sure enter is pressed
    if(e.which == 13 || e.keycode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}
// Set focus
function setFocus(e) {
  if(e.type === 'keypress') {
    // make sure enter is pressed
    if(e.which == 13 || e.keycode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}
// Get Focus
function getFocus() {
  if(localStorage.getItem('focus') === null) {
    focus.textContent = '[ Enter Focus ]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
setName(e);
