console.log('It works!!!');

function wow(){
    if(document.querySelector('#search-input').value == ''){
        return;}
        else{
            localStorage.setItem("word",document.querySelector('#search-input').value);
            var tex = document.getElementById('search-output');
            tex.innerText = 'Hi ' + localStorage.getItem("word") + '!';}
}

document.querySelector('#buttonA').addEventListener('click', wow);