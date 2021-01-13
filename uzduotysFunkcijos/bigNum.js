function bigNum(list) {


    if (!Array.isArray(list)) {
        return 'ERROR: parameter has to be array'
    }
    if (list.length === 0) {
        return 'ERROR: array cannot be empty'
    }
    let biggestNumber = -Infinity;
    for ( let i = 0; i < list.length; i++) {
        const number = list[i];
        if (typeof number !== 'number' ||
        !isFinite(number)) {
            continue;
        }
        if (number > biggestNumber) {
            biggestNumber = number;
        } 
    }
    // post logic validation
    if (biggestNumber === -Infinity) {
        return 'ERROR: no numbers in array'
    }
return biggestNumber;
}



// console.log(bigNum('pomidoras'));
// console.log(bigNum([]));
// console.log(bigNum({}));
// console.log(bigNum(['a']));
// console.log(bigNum(['', [], 'acccc']));



console.log(bigNum([1]));
console.log(bigNum([1, 2, 3]));
console.log(bigNum([-1, -2, -3]));
console.log(bigNum([69, 69, 69, 69, 66]));
