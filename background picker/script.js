document.getElementById("shirly").onclick = shirlyForHim ;
document.getElementById("kallen").onclick = kallenForHim ;
document.getElementById("cc").onclick = ccForHim ;

document.getElementById("names");


function shirlyForHim() {
    document.body.style.backgroundImage = "url('images/shirley-and-lelouch.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.getElementById("names").textContent = "Shirley";
  document.querySelector("body").style.color = "orange";
  document.querySelector("body").style.textShadow = "2px 2px 1px #000";
}

function kallenForHim(){
    document.body.style.backgroundImage = "url('images/kallen-lelouch.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.getElementById("names").textContent = "Kallen";
  document.querySelector("body").style.color = "pink";
  document.querySelector("body").style.textShadow = "2px 2px 1px #000";
}

function ccForHim(){
    document.body.style.backgroundImage = "url('images/cc-lelouch.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.getElementById("names").textContent = "CC";
  document.querySelector("body").style.color = "green";
  document.querySelector("body").style.textShadow = "2px 2px 1px #000";
}

