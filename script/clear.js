document.getElementById("clear")
.addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("activity").innerHTML = "";
});