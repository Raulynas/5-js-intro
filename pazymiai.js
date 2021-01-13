

let pazymiai = [10, 2, 8, 4, 6, 4, 8, 2, 10];

let vidurkis = 0;
for ( let i = 0; i < pazymiai.length; i++) {
    vidurkis += pazymiai[i] / pazymiai.length
}
console.log("Pazymiu vidurkis:", vidurkis);