console.log('moviesAdd succes');

const h1 = document.querySelector('.moviesAddTitulo');
const section = document.getElementById('formulario');
const article = document.querySelector('article')

h1.innerHTML = 'AGEREGAR PELICULAS';
h1.classList.add('titulo');
article.classList.add('fondoTransparente');
section.classList.add('fondoCRUD')