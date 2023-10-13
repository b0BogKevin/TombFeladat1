var tomb = [];
var be = document.getElementById("bemenet")
function bevitel() {
    if (be.value !=null) {
        tomb.push(be.value);
        kiiras();
      }
}

function kiiras() {
    let ki = "";
    for (var i in tomb) {
        ki +=`<div id="adat">${tomb[i]}</div>`;
    }
    document.getElementById("kimenet").innerHTML = ki;
}
      
      

