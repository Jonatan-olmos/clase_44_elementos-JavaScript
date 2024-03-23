const main = document.querySelector('main');
const subtitulo = document.querySelector('.subtitulo');
const link = document.querySelector('a');
const parrafos = document.querySelectorAll('p');



 Swal.fire({
  title: "Ingresa tu nombre",
  input: "text",
  showCancelButton: true,
  
}).then(({value : nombre}) => {
subtitulo.innerHTML += nombre ? nombre : 'invitado';
subtitulo.style.textTransform = "uppercase";
link.style.color = "#E51B3E";

Swal.fire({
    title: "¿desea cambiar el fondo de pantalla",
    showDenyButton: true,
    confirmButtonText: "Si, Quiero ",
    denyButtonText: `No,ni ahi`
  }).then((result) => {
   if(result.isConfirmed) document.body.classList.add("fondo")

  });


}).catch(error => console.log(error));

//const nombre = prompt("ingrese su nombre");
//subtitulo.innerHTML += nombre ? nombre : 'invitado';
//subtitulo.style.textTransform = "uppercase";
//link.style.color = "#E51B3E";
//const respuesta = confirm("¿desea cambiar el fondo de pantalla");
//if(respuesta) document.body.classList.add("fondo")

/*
if (nombre) {
    subtitulo.innerHTML += nombre;
}else{
    subtitulo.innerHTML += 'invitado';

}*/

parrafos.forEach((parrafo, index) => {
    (index +1) % 2 === 0 ? parrafo.classList.add("destacadoPar") : parrafo.classList.add("destacadoImpar")
})










