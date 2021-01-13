function letters(text, num) {
    if ( num <= 0) {
        return 'ERROR: number must be positive and bigger than 0'
    }
    if ( typeof num !== 'number') {
        return 'ERROR: number must be positive and bigger than 0'
    }
    if (text.length === 0 || text.length > 100) {
        return 'ERROR: invalid input length'
    }
    if (num > text.length) {
        return 'ERROR: argument must be smaller than number of letters in text'
    }
    if (typeof text !== 'string') {
        return 'ERROR: input must be text'
    }
    let newText = '';

    for ( let i = num-1; i < text.length; i += num) {
        newText += text[i];
    }
    return newText;
}

// console.log(letters('abc', 0));
// console.log(letters('abc', 4));
// console.log(letters(1561, 2));
// console.log(letters('', 1));
// console.log(letters(false, 1));
// console.log(letters(0, 1));
// console.log(letters('abcdef', Infinity));
// console.log(letters('abcdef', true));
// console.log(letters('abcdef', []));
// console.log(letters('abcdef', {}));
// console.log(letters('abcdef', ''));

console.log(letters('abcdefg', 2), '=> bdf');
console.log(letters('abcdefghijkl', 3), '=> cfil');
console.log(letters('abc', 1));
console.log(letters('322', 2));
