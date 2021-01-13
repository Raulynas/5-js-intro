    function countNumber(a, b, c) {
        let count = 0;
        for ( let i = a; i <= b; i++ ) {
            if ( i % c === 0) {
                count++;
            }
    }

    console.log('Skaičių intervale tarp', a, 'ir',  b, 'besidalijančių be liekanos iš', c, 'yra', count, 'vienetai.');
}

countNumber(0, 11, 3);
countNumber(0, 11, 5);
countNumber(0, 11, 7);
console.log("_______________________________");
countNumber(8, 31, 3);
countNumber(8, 31, 5);
countNumber(8, 31, 7);
console.log("_______________________________");
countNumber(-18, 18, 3);
countNumber(-18, 18, 5);
countNumber(-18, 18, 7);






// i.	Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// ii.	Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// iii.	Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.