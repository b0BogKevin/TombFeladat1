var tomb = [1,2,3];
function elso() {
    document.getElementById("kimenet").innerHTML = tomb[0];
}
function masodik() {
    document.getElementById("kimenet").innerHTML = tomb[1];
}
function harmadik() {
    document.getElementById("kimenet").innerHTML = tomb[2];
}
function ossz() {
    let ki = "";
    for (let i in tomb) {
        ki +=tomb[i] + " "
    }
    document.getElementById("kimenet").innerHTML=ki;
}

var be = document.getElementById("bemenet")
be.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      if (be.value !=null) {
        tomb.push(be.value);
      }
      
    }
  });

function hossz() {
    document.getElementById("kimenet").innerHTML = "A tömb " + tomb.length +" elemet tartalmaz."
}

var indexKi = document.getElementById("indexKi");
indexKi.addEventListener("keypress", function(event1) {
    if (event1.key === "Enter") {

      if (indexKi.value !=null) {
        if (indexKi.value <=tomb.length) {
          var torloSzam = parseInt(document.getElementById("indexKi").value);
        tomb.splice(torloSzam,1);
        }
        
      }
      
    }
  });