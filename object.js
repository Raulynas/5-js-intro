/*
type of variables
*/

const petras = {
    vardas: 'Petras',
    amzius: 99, 
    plaukuSpalva: 'ruda',
    arVairuoja: true,
    arMeluoja: false,
    aplankytiMiestai: ['vilnius', 'Kaunas'],
    vaikai: [
        {
            vardas: 'Onute',
            amzius: 70,
        },
        {
        vardas: 'jonas',
        amzius: 60,
        }
    ]
}

console.log(petras.vardas);
console.log(petras.vaikai[0].vardas);
console.log(petras.vaikai[0].amzius);

console.log('_______________');

console.log(petras.vardas);
console.log(petras.vaikai[0].vardas);
console.log(petras.vaikai[0].amzius);

console.clear()

const namas = {
    pamatuTipas:'poliniai',
    stogoTipas: 'slaitinis',
    languKiekis: 6, 
    aukstai: 2,
    durys: 2,
    kambariai: 7
}

dominantisParametras = 'durys';
const reiksme = namas[dominantisParametras];

console.log(reiksme);