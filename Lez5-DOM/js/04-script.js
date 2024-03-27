// Aggiungere una classe a quelle esistenti
let listaLibri = document.querySelectorAll('#listaLibri li');

[...listaLibri].forEach(libro => {
    libro.classList.add('underline');
    console.log(libro.classList);
});

[...listaLibri].forEach(libro => {

    libro.addEventListener('click', function() {
        if (libro.classList.contains('underline')) {
            libro.classList.remove('underline');
        } else {
            libro.classList.add('underline');
        }
    })

});