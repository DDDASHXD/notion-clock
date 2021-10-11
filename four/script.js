var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const month = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;
  document.getElementById('date').innerHTML = weekday[today.getDay()] + ', ' + today.getDate() + ' ' + month[today.getMonth()]
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

startTime();

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

var inColor = document.getElementById('color')
var clock = document.getElementById('time')
var color = inColor.value
var currentTheme = getCookie("themeFour")
var currentColor = getCookie("colorFour")
inColor.value = currentColor;
console.log('Current theme: ' + currentTheme)
console.log('Current color: ' + currentColor)

function toggleTheme() {
  if (currentTheme === 'dark') {
    document.getElementById('body').classList.add('theme--light');
    setCookie("themeFour","light",30);
    currentTheme = getCookie("themeFour")
  } else if (currentTheme === 'light') {
    document.getElementById('body').classList.remove('theme--light')
    setCookie("themeFour","dark",30)
    currentTheme = getCookie("themeFour")
  }
}



inColor.addEventListener("change", function() {
  color = inColor.value;
  clock.style.color = color;
  currentColor = color;
  setCookie("colorFour",color,30)
  //console.log(currentColor);
  console.log(clock.style.color)
})

if (currentTheme === 'dark') {
    document.getElementById('body').classList.remove('theme--light');
  } else if (currentTheme === 'light') {
    document.getElementById('body').classList.add('theme--light')
  } else if (currentTheme == null) {
    setCookie('themeFour','dark')
    currentTheme = getCookie('themeFour')
  }
clock.style.color = currentColor;