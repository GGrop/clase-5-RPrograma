document.querySelector('#boton-form').onclick= function(e){
  e.preventDefault()
  const nombre = document.querySelector("#nombre-usuario").value
  const segundoNombre = document.querySelector("#segundo-nombre-usuario").value
  const apellido = document.querySelector("#apellido-usuario").value
  const edad = Number(document.querySelector("#edad-usuario").value)

  document.querySelector("#data-registro").innerHTML = `Datos de registro: ${nombre} ${segundoNombre}, ${apellido} | Edad: ${ edad}`
  console.log(nombre, segundoNombre, apellido, edad)

  const $bienvenida = document.querySelector("#bienvenida")
  $bienvenida.innerHTML = "Bienvenido," + nombre
}