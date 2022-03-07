
let deck = [];
const types = ["C", "D", "H", "A"];
const specials = ["A", "J", "Q", "K"];

//Esta funcion crea una nueva baraja
const crearDeck = () => {
    for (let index = 2; index < 10; index++) {
        for (const type of types) {
            deck.push(index + type);
        }
    }

    for (const type of types) {
        for (const esp of specials) {
            deck.push(esp + type);
        }
    }

    // console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();


//Esta funcion me permirte tomar una carta
const pedirCarta = () => {

    if(deck.length  === 0){ throw "No hay mas cartas en le deck" }

    let carta = deck.pop();
    console.log(carta);
    console.log(deck);

    return carta;

}

// pedirCarta();

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN(valor) == true ) ? 
            ( ( valor === "A") ? 11 : 10 ) 
            : valor * 1;  
}

const valor = valorCarta(pedirCarta());
console.log(valor);