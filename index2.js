let horas = 0
let minutos = 0
let segundos = 0
let contador = 0
let tiempoTotal = 0

function LimpiarFormularios(){
  document.querySelector("#tiempo-hora").value = ""
  document.querySelector("#tiempo-minuto").value = ""
  document.querySelector("#tiempo-segundo").value = ""
}

document.querySelector("#boton-agregar").onclick = function(e){
  e.preventDefault()
  horas = horas + Number(document.querySelector("#tiempo-hora").value)
  minutos = minutos + Number(document.querySelector("#tiempo-minuto").value)
  segundos = segundos + Number(document.querySelector("#tiempo-segundo").value)
  tiempoTotal = `${horas} horas, ${minutos} minutos, ${segundos} segundos`

  LimpiarFormularios()

  contador++
  document.querySelector("#contador-clases").textContent = contador
}

document.querySelector("#boton-finalizar").onclick = function(e){
  e.preventDefault()

  LimpiarFormularios()

  document.querySelector("#tiempo-total-clases").textContent = tiempoTotal
}


