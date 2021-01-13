function bigNum(list) {
    if (typeof list !== 'object') {
        return 'ERROR: parameter has to be array'
    }
    if (list.length === 0) {
        return 'ERROR: array cannot be empty'
    }

    let biggestNumber = list[0];
    for ( let i = 0; i < list.length; i++) {
        const number = list[i];
        if (number > biggestNumber) {
            biggestNumber = number;
        } 
    }

return biggestNumber;
}







console.log(bigNum('pomidoras'));

console.log(bigNum([]));
console.log(bigNum([1]));
console.log(bigNum([1, 2, 3]));
console.log(bigNum([-1, -2, -3]));
console.log(bigNum([69, 69, 69, 69, 66]));

console.log(bigNum([1, 2, 'a']));







