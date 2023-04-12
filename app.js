document.addEventListener("DOMContentLoaded", () => {
  const cardsAdj = [
    { name: "icaro", img: "images/1 icaro.jpg" },
    { name: "manos", img: "images/2 manos.jpg" },
    { name: "craneo", img: "images/3 craneo.jpg" },
    { name: "imagen", img: "images/4 imagen.jpg" },
    { name: "corazon", img: "images/5 carazon.jpg" },
    { name: "ojos", img: "images/6 ojos.jpg" },
    { name: "icaro", img: "images/1 icaro.jpg" },
    { name: "manos", img: "images/2 manos.jpg" },
    { name: "craneo", img: "images/3 craneo.jpg" },
    { name: "imagen", img: "images/4 imagen.jpg" },
    { name: "corazon", img: "images/5 carazon.jpg" },
    { name: "ojos", img: "images/6 ojos.jpg" }
  ];

  //console.log(cartasrr)
  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscojidas = [];
  var cartasEscojidasId = [];
  var cartasGanadas = [];

  function crearTablero() {
    for (let i = 0; i < cardsAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "images/reverso.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
  }
  function verificarPareja() {
    var cards = document.querySelectorAll("img");
    const opcionUnoId = cartasEscojidasId[0];
    const opcionDosId = cartasEscojidasId[1];

    if (opcionUnoId === opcionDosId) {
      cards[opcionUnoId].setAttribute("src", "imagenes/reverso.png");
      cards[opcionDosId].setAttribute("src", "imagenes/reverso.png");
      alert("!diste click a la misma imagen!");
    } else if (cartasEscojidas[0] === cartasEscojidas[1]) {
      alert("!correcto!");
      cards[opcionUnoId].setAttribute("src", "imagenes/blank.png");
      cards[opcionDosId].setAttribute("src", "imagenes/blank.png");
      cards[opcionUnoId].removeEventListener("click", voltearCarta);
      cards[opcionDosId].removeEventListener("click", voltearCarta);
      cartasGanadas.push(cartasEscojidas);
    } else {
      cards[opcionUnoId].setAttribute("src", "imagenes/reverso.png");
      cards[opcionDosId].setAttribute("src", "imagenes/reverso.png");
      alert("!INTENTA DE NUEVO!");
    }
    cartasEscojidas = [];
    cartasEscojidasId = [];

    resultado.textContent = cartasGanadas.length;

    if (cartasGanadas.length === cardsAdj.length / 2) {
      resultado.textContent = "!FELICIDADES,encontrastes todos los pares!";
    }
  }

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscojidas.push(cardsAdj[cardId].name);
    cartasEscojidasId.push(cardId);
    this.setAttribute("src", cardsAdj[cardId].img);
    if (cartasEscojidas.length === 2) {
      setTimeout(verificarPareja, 1500);
    }
  }
  crearTablero();
});
