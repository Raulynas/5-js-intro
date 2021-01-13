function numberLength(number) {
    if (typeof number !== 'number') {
        return 'ERROR: reikia skaiciaus tipo reiksmes'
    }
    if (!isFinite (number) || isNaN(number)) {
        return 'ERROR: reikia normalaus skaiciaus'
    }

    
    const numberAsString = '' + number;
    
    
    let length = numberAsString.length;

    if (number % 1 !== 0) {
        length--;
    }
    if (number < 0) {
        length--;

    }
    return length;
}



console.log( numberLength('asd'));
console.log( numberLength(true));
console.log( numberLength(NaN));
console.log( numberLength(Infinity));


console.log( numberLength(5));
console.log( numberLength(781));
console.log( numberLength(3.2));
console.log( numberLength(3.1415));
console.log( numberLength(-3.2));
console.log( numberLength());


