
let deck = [];
const types = ["C", "D", "H", "S"];
const specials = ["A", "J", "Q", "K"];

let puntosJugador = 0;
let puntosComputadora = 0;

//Referencias html
const btnPedir = document.querySelector("#btnPedir");
const small = document.querySelectorAll("small");
const jugadorCartas = document.querySelector("#jugador-cartas");

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
    return deck;
}

crearDeck();


//Esta funcion me permirte tomar una carta
const pedirCarta = () => {
    if(deck.length  === 0){ throw "No hay mas cartas en le deck" }
    let carta = deck.pop();
    return carta;
}

// pedirCarta();

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN(valor) == true ) ? 
            ( ( valor === "A") ? 11 : 10 ) 
            : valor * 1;  
}

//Eventos
btnPedir.addEventListener("click", () => {
    
    const carta = pedirCarta();
    puntosJugador += valorCarta(carta);

    small[0].innerHTML = puntosJugador;

    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add("carta");

    jugadorCartas.append(imgCarta);

    if( puntosJugador > 21 ){
        alert("Perdiste!");
        btnPedir.disabled = true;
    }else if( puntosJugador === 21 ){
        alert("Ufa ufa");
    }

});


