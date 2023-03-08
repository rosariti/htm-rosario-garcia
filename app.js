document.addEventListener("DOMcontentLoaded", () => {
  const cardsAdj = [
    { name: "icaro", img: "images/1 icaro.jpg" },
    { name: "manos", img: "images/2 manos.jpg" },
    { name: "craneo", img: "images/3 craneo.jpg" },
    { name: "imagen", img: "images/4 imagen.jpg" },
    { name: "corazon", img: "images/5 carazon.jpg" },
    { name: "ojos", img: "images/6 ojos.jpg" },
    { name: "nube", img: "images/7 nube.jpg" },
    { name: "planeta", img: "images/8 planeta.jpg" }
  ];

//console.log(cartasrr)
const cuadricula = document.querySelector(".cudricula");
const resultado = document.querySelector("#resultado");
var cartasEscojidas = [];
var cartasEscojidasId = [];
var cartasGanadas = [];

function creartablero() {
  for (let i =0 ; i < cardAdj.length; i ++){
  var carta = document.createElement(`img`);
  carta.setAttribute("src", "imagenes/reverso.jpg");
  carta.setAttribute("dta-id", i);
  carta.addEventListener("click", voltercarta);
  cuadricula.appendChild(carta);
}
 
function voltearCarta(){
  var cardId= this .getAttribute("data-id");
cartasEscojidas.push(cardsAdj[cardId].name);
cartasEscojidasId.push(cardId);
this.setAttribute("src",cardsAdj[cardId].img);
if(cartasEscojidas.length === 2  ){
  setTimeout(verificarPareja, 1000 );
    
}
}
creartablero();
});
