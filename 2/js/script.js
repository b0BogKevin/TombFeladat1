var tomb = [];
var be = document.getElementById("bemenet")
function bevitel() {
    if (be.value !="") {
        if (!tomb.includes(be.value)) {
            tomb.push(be.value);
        kiiras();
        }
        
        
      }
}
be.addEventListener("keypress",function(event)
{
    if (event.key ==="Enter") {
        bevitel();
    }
})

function kiiras() {
    let ki = "";
    for (var i in tomb) {
        ki +=`<div id="adat">${tomb[i]}</div>`;
    }
    document.getElementById("kimenet").innerHTML = ki;
}
      
      

