const red = document.getElementById("red");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const btnStart = docuemnt.getElementById("btnStart");
const ULTIMO_NIVEL = 10;

class Juego {
  constructor() {
    this.inicializar = this.inicializar.bind(this);
    this.inicializar();
    this.generarSecuencia();
    setTimeout(this.siguienteNivel, 500);
  }
}

function Jugar() {
  window.juego = new Juego();
}