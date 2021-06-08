console.log('It works!!!');

function showTime(){
    //borrowed from codePen https://codepen.io/afarrar/pen/JRaEjP
    console.log('clock working');
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}
showTime();

function wow(){
    if(document.querySelector('#search-input').value == ''){
        return;

    }
        else{
            localStorage.setItem("word",document.querySelector('#search-input').value);
            var tex = document.getElementById('search-output');
            tex.innerText = 'Hi ' + localStorage.getItem("word") + '!';

        }
}

document.querySelector('#buttonA').addEventListener('click', wow);

/*Kanye West quotes and cat pic
let quotesDiv = document.getElementById("quotes");

fetch ('https://api.kanye.rest')
.then(res => res.json())
.then(quote => {
    quotesDiv.innerHTML += '<p> ${quote.quote} </p>'
})*/

let extrasbg = document.getElementById('green');
let colorChange = document.getElementById('changer');

changer.addEventListener('click', set =>{
    if (extrasbg.className == 'green1'){
        extrasbg.className = 'green2';
    }   else if (extrasbg.className == 'green2'){
        extrasbg.className = 'green3';
    }   else if (extrasbg.className == 'green3'){
        extrasbg.className = 'green4';
    }   else if(extrasbg.className == 'green4'){
        extrasbg.className = 'green1';
    }
});