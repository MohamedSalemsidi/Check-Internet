let title = document.querySelector(".title");
let ul = document.querySelector("ul");
let botton = document.querySelector('button');

window.onload = function() {
    if(window.navigator.onLine) {
        onLine()
    }
    else {
        offLine();
    }
}

window.addEventListener("online", function(){
    onLine();
})
window.addEventListener("offline", function(){
    offLine();
})

botton.onclick = function(){
    window.location.reload();
}

function onLine(){
    title.innerHTML = "Online Now";
    title.style.color = "green";
    ul.classList.add('hide');
    botton.classList.add('hide');
}

function offLine(){
    title.innerHTML = "Offline Now";
    title.style.color = "#666";
    ul.classList.remove('hide');
    botton.classList.remove('hide');
}