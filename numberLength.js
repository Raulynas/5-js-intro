function numberLength(number) {
    if (typeof number !== 'number') {
        return 'ERROR: reikia skaiciaus tipo reiksmes'
    }
    if (!isFinite (number) || isNaN(number)) {
        return 'ERROR: reikia normalaus skaiciaus'
    }
    
    
    const numberAsString = '' + number;
    
    for ( i = 0; i < numberAsString.length; i++) {
        if ( numberAsString[i] === "e") {
            return 'ERROR: Number contains too many characters'
        }
    }
    
    let length = numberAsString.length;

    if (number % 1 !== 0) {
        length--;
    }
    if (number < 0) {
        length--;

    }
    return length;
}




// console.log( numberLength('asd'));
// console.log( numberLength(true));
// console.log( numberLength(NaN));
// console.log( numberLength(Infinity));
// console.log( numberLength(10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000));

// console.log( numberLength());

// console.log( numberLength(5));
// console.log( numberLength(781));
// console.log( numberLength(3.2));

console.log( numberLength(4e1));