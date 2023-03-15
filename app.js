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
