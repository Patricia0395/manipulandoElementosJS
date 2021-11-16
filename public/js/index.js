

console.log('vinculacion externa con index.js');

let main = document.querySelector('main');
let h2 = document.querySelector('h2');
let a =document.querySelector('a');
let p = document.querySelectorAll('p');

let nombre = prompt('Ingrese su nombre');

if(nombre){
    h2.innerText += nombre
 }else {
    h2.innerText += "Invitado"
 }

 h2.style.textTransform = "upperCase"

 a.style.color = "#E51B3E"

 let responde = confirm("¿Desea colocar un fondo de pantalla?")

 responde && document.body.classList.add('fondo')

 p.forEach((parrafo, index) =>{
 index % 2 == 0 ? parrafo.classList.add('descatadoPar') : parrafo.classList.add('destacadoImpar')
 })

 main.style.display = 'block'
 