let firstValue = document.getElementById("firstValue");
let azalt = document.getElementById("azalt");
let arttir = document.getElementById("arttir");

let value = 265;
firstValue.innerHTML = value;

function firstValueArttir() {
    value+=1;
    firstValue.innerHTML = value;
}

function firstValueAzalt() {
    value-=1;
    firstValue.innerHTML = value;
}

azalt.addEventListener("click", firstValueAzalt )
arttir.addEventListener("click", firstValueArttir )