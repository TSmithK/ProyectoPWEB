// JavaScript para controlar el carrusel de noticias
document.addEventListener('DOMContentLoaded', function() {
    const noticias = document.querySelectorAll('.noticia');
    let indiceNoticiaActual = 0;

    function mostrarNoticia(indice) {
        noticias.forEach((noticia, i) => {
            if (i === indice) {
                noticia.style.display = 'block';
            } else {
                noticia.style.display = 'none';
            }
        });
    }

    function mostrarNoticiaSiguiente() {
        if (indiceNoticiaActual < noticias.length - 1) {
            indiceNoticiaActual++;
        } else {
            indiceNoticiaActual = 0;
        }
        mostrarNoticia(indiceNoticiaActual);
    }

    function mostrarNoticiaAnterior() {
        if (indiceNoticiaActual > 0) {
            indiceNoticiaActual--;
        } else {
            indiceNoticiaActual = noticias.length - 1;
        }
        mostrarNoticia(indiceNoticiaActual);
    }

    mostrarNoticia(indiceNoticiaActual);

    const botonSiguiente = document.querySelector('.siguiente');
    const botonAnterior = document.querySelector('.anterior');

    botonSiguiente.addEventListener('click', mostrarNoticiaSiguiente);
    botonAnterior.addEventListener('click', mostrarNoticiaAnterior);
});
