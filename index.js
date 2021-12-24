// count = document.getElementById("count-id")
// count.innerText="hello"

// let count = 0

// console.log(count);
var cont = 0 
function increment(){
    cont++
    document.getElementById("count-id").textContent = cont;
}

function savebtn(){
    console.log("saved")
    document.getElementById("Entry").textContent= document.getElementById("Entry").textContent +" " + cont + " - ";
    cont= 0 ;
    document.getElementById("count-id").textContent = cont;
}

console.log(cont)
