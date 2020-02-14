//used for learning how to set an alarm
//https://www.youtube.com/watch?v=Kcvg0jXwrvU
Notification.requestPermission();
var message;

function show24Time(){
    var date = new Date();
    var h=date.getHours();
    var m =date.getMinutes();
    var s =date.getSeconds();
    var time;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;


    time = h + ":" + m + ":" + s;

    document.getElementById("myclock").innerText=time;

    setTimeout(show24Time, 1000);
}

show24Time();

var alarmSound=new Audio();
alarmSound.src="../sounds/alarm.mp3";
var alarmTimer;

function setAlarm(button){
    var ms = document.getElementById("alarmTime").valueAsNumber;
    if (isNaN(ms)) {
        alert("Invalid Date");
        return;
    }
    var alarm = new Date(ms);
    var alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
    var diffeneceInMS = alarmTime.getTime() - (new Date()).getTime();

    if (diffeneceInMS < 0) {
        alert('Specified Time already passed!');
        return;
    }

    alarmTimer=setTimeout(initAlarm, diffeneceInMS);

    button.innerText="Cancel Alarm";
    button.setAttribute('onclick','cancelAlarm(this);');
}

function cancelAlarm(button) {
    button.innerText="Set Alarm";
    button.setAttribute("onclick", "setAlarm(this);");
    clearTimeout(alarmTimer);
}

function initAlarm() {
    alarmSound.play();
    message = new Notification("Alarm");
    document.getElementById("alarmOptions").style.display="";
}

function stopAlarm() {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    document.getElementById("alarmOptions").style.display = "none";
    cancelAlarm(document.getElementById("alarmButton"));

}

