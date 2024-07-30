
var relogio = document.createElement("h1");
document.body.appendChild(relogio); 

relogio.style.fontFamily = "Courier New, monospace";
relogio.style.fontSize = "4em";
relogio.style.textAlign = "center";
relogio.style.marginTop = "25%";

function time() {
    
    var hr = new Date();
    
    relogio.innerText = hr.toLocaleTimeString();
    
}

time();

setInterval(time,1000);



