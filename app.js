let numeroSecreto = 0; // para darle un valor inicial
let intentos = 0;
let numeroSecretoGenerados = [];
let numeroMaximo = 10;

function verificarIntento() {
  let numeroIngresadoPorUsuario = parseInt(document.getElementById("numeroUsuario").value);
  console.log(numeroSecreto);
  console.log(numeroSecretoGenerados);

  if (numeroIngresadoPorUsuario === numeroSecreto) {
    asignarTextoElemnto("p", `Acertaste el numero!! en ${intentos} ${intentos === 1 ? "vez" : "veces"}`);
    document.querySelector("#reiniciar").removeAttribute("disabled");
  } else {
    // usuario no acierta
    if (numeroIngresadoPorUsuario > numeroSecreto) {
      asignarTextoElemnto("p", "El numero secreto es menor");
    } else {
      asignarTextoElemnto("p", "El numero secreto es mayor");
    }
    limpiarInput();
  }
  intentos++;
}

function generaNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  if (numeroSecretoGenerados.length == numeroMaximo) {
    asignarTextoElemnto("p", "maximo intentos posibles");
  } else {
    if (numeroSecretoGenerados.includes(numeroGenerado)) {
      return generaNumeroSecreto(); //para que me devuelva el valor
    } else {
      numeroSecretoGenerados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function limpiarInput() {
  document.querySelector("#numeroUsuario").value = "";
}

function condicionesInicial() {
  asignarTextoElemnto("h1", "Juego del numero secreto");
  asignarTextoElemnto("h3", "vamos a juga");
  asignarTextoElemnto("p", `Selecciona un numero del ${numeroMaximo-(numeroMaximo-1)} al ${numeroMaximo}`);
  numeroSecreto = generaNumeroSecreto();
  intentos = 1;
}

function asignarTextoElemnto(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function reiniciarJuego() {
  limpiarInput();
  condicionesInicial();
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}



condicionesInicial();
