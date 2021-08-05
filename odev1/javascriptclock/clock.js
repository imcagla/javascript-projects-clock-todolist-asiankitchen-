// asking name
function Name() {
    var name = prompt('Adınız nedir ?');
    document.getElementById("myName").innerHTML = name;
}

// datetime

function showTime() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var weekday = date.getDay();

    // identify weekday
    if(weekday == 1) 
        weekday = 'Pazartesi';
    else if (weekday == 2)
        weekday = 'Salı';
    else if (weekday == 3)
        weekday = 'Çarşamba';
    else if (weekday == 4)
        weekday = 'Perşembe';
    else if (weekday == 5)
        weekday = 'Cuma';
    else if (weekday == 6)
        weekday = 'Cumartesi';
    else
        weekday = 'Pazar';

    // if hour, minute or second is smaller than 10, put '0' to the front    
    if(hour < 10)
        hour = "0" + hour;
    else
        hour = hour;

    if(minute < 10)
        minute = "0" + minute;
    else
        minute = minute;

    if(second < 10)
        second = "0" + second;
    else
        second = second;

    var time = `${hour}:${minute}:${second} ${weekday}`
    document.getElementById("myClock").innerHTML = time;

    setTimeout(showTime, 1000);
}

// call functions
Name();
showTime();
