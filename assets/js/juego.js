
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

// crearDeck();


