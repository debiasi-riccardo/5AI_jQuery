var btn = document.createElement("button"); 
btn.innerHTML = "clicca"; 

var body = document.getElementByTagNeame("body")[0]; 
body.append(btn); 

btn.addEventListener("click", function(){
    document.getElementById("h1id").innerHTML = "ciao come stai?"; 
}); 