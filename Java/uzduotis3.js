

let firstNumber = 0;
let secondNumber = 11;
let argument = 3;
let count = 0;

for ( let i = firstNumber; i <= secondNumber; i++ ) {
    if ( i % argument === 0) {
        count++;
    }
}
console.log("Skaičių intervale tarp", firstNumber, "ir", secondNumber, "besidalijančių be liekanos iš", argument, "yra", count, "vienetai");