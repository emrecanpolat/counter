let firstValue = document.getElementById("firstValue");
let azalt = document.getElementById("azalt");
let arttir = document.getElementById("arttir");

// localStorage'dan değeri alın (eğer daha önce kaydedilmişse)
let value = localStorage.getItem("value");

// Eğer localStorage'da kayıtlı bir değer yoksa varsayılan değeri ayarlayın
if (value === null) {
    value = "265"; // Değeri tam sayı olarak kaydedin
}

firstValue.innerHTML = value;

function firstValueArttir() {
    value = parseInt(value, 10); // Tam sayıya çevirin
    value += 1;
    firstValue.innerHTML = value.toString(); // Sonucu tekrar bir stringe dönüştürün

    // Değişen değeri localStorage'a kaydedin
    localStorage.setItem("value", value);
}

function firstValueAzalt() {
    value = parseInt(value, 10); // Tam sayıya çevirin
    value -= 1;
    firstValue.innerHTML = value.toString(); // Sonucu tekrar bir stringe dönüştürün

    // Değişen değeri localStorage'a kaydedin
    localStorage.setItem("value", value);
}

azalt.addEventListener("click", firstValueAzalt);
arttir.addEventListener("click", firstValueArttir);
