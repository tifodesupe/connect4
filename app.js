const cuadrado = document.querySelectorAll(".grid div")
const resultado = document.querySelector("#puntos")
const mostrarElJugadorActual = document.querySelector("#jugador-actual")
let jugadorActual = "azul"

for(let i = 0; i < cuadrado.length; i++){
  if (cuadrado[i].classList.contains("piso")) {
    continue
  }
  cuadrado[i].onclick = function () {
    if (cuadrado[i + 7].classList.contains("taken")) {
      cuadrado[i].classList.add("taken")
      cuadrado[i].classList.add("jugador-" + jugadorActual)
      if(jugadorActual === "azul"){
        jugadorActual = "verde"
      }else{
        jugadorActual = "azul"
      }
      mostrarElJugadorActual.innerHTML = jugadorActual
    }else{
      alert("No puedes ponerla aqui")
    }
  }
}