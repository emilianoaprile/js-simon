console.log('Simon says')


// genero numeri random e li stampo in pagina con degli alert
const randomNumberOne = Math.floor(Math.random() * (50 - 1 + 1) + 1);
alert(randomNumberOne);
console.log(randomNumberOne);

const randomNumberTwo = Math.floor(Math.random() * (50 - 1 + 1) + 1);
alert(randomNumberTwo);
console.log(randomNumberTwo);

const randomNumberThree = Math.floor(Math.random() * (50 - 1 + 1) + 1);
alert(randomNumberThree);
console.log(randomNumberThree);

const randomNumberFour = Math.floor(Math.random() * (50 - 1 + 1) + 1);
alert(randomNumberFour);
console.log(randomNumberFour);

const randomNumberFive = Math.floor(Math.random() * (50 - 1 + 1) + 1);
alert(randomNumberFive);
console.log(randomNumberFive);

// COUNT-DOWN: parte il conto alla rovescia di 30 secondi
// - creo struttura html per stampare il conto alla rovescia nella pagina
// - richiamo l'elemento dal DOM
// - gli do il valore di 30 secondi con innerHTML
// - creo la funzione setInterval che fa il conto alla rovescia e stampa il timer sulla pagina
// - quando arriva a zero fermo il timer con clearInterval:
//  -SE arrivo a 0
//      - stampo tempo scaduto

let timeStartDOMElement = document.getElementById('time');
console.log(timeStartDOMElement);

let counter = 30;

let countDown = setInterval(onInterval, 1000)

function onInterval () {
    counter--

    if (counter === 0) {
        timeStartDOMElement.innerHTML = 'Tempo scaduto.. ora scrivi 5 numeri che ricordi';
    } 
}












// finiti i 30 secondi compaiono i prompt nei quali l'utente inserirà i 5 numeri che si ricorda
    // - dopo i 30 secondi compariranno i prompt nei quali l'utente uno alla volta inserira i numeri che si ricorda
// confronto i numeri inseriti con quelli genrati randomicamente





