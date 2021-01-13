1.	//Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):



function intervalSum(from, to) { 
    let sum = 0;
    for (let i = from; i < to + 1; i++) {
        sum += i;

    }
    console.log('Skaičių suma intervale nuo', from, 'iki',  to, 'yra', sum);

}

intervalSum(0, 0);
intervalSum(0, 4);
intervalSum(0, 100);
intervalSum(574, 815);
intervalSum(-50, 50);
intervalSum(-70, -30);