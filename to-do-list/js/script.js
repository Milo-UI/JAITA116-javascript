/* 
    Creare una To-do list:
        - Form a sinistra con task e data (2 campi input) + bottone di aggiunta
        - Elenco delle task a destra. Ogni task deve riportare:
            - checkbox spuntabile per indicarne il completamento (opz. al check, la task viene sbarrata)
            - nome della task o descrizione
            - coppia di bottoni "edit" e "delete"
                - Edit: riporta nei campi del form il nome della task e la data, permettendo di aggiornarli o cambiarli.
                - Delete: elimina la task.
    
    Deve ovviamente essere presentabile dal punto di vista dell'aspetto.
    Opzionale: utilizzare icone per i bottoni e animazioni per l'aggiunta e la rimozione delle task:
        - Icone: https://fontawesome.com/
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer"/>

        - Animazioni: https://animate.style/
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" referrerpolicy="no-referrer" />
*/

var btnAggiungi = document.querySelector('#btnAggiungi');
var lista = document.querySelector('#lista');

function aggiungi() {
    var item = document.querySelector('#item').value;
    var data = document.querySelector('#data').value;

    var task = document.createElement('li');
    task.setAttribute('class', 'animate__animated animate__fadeInRight');

    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.classList.add('done');
    task.appendChild(check);

    task.innerHTML += ' <span>' + item + '</span> - <span>' + data + '</span>';

    lista.appendChild(task);

    document.querySelector('#item').value = '';
    document.querySelector('#data').value = '';

    var btnModify = document.createElement('button');
    btnModify.innerHTML = '<i class="fa-solid fa-marker"></i>';
    btnModify.setAttribute('class', 'btn-mod');
    task.appendChild(btnModify);

    btnModify.addEventListener('click', modifica);

    function modifica() {
        rimuovi();
        document.querySelector('#item').value = item;
        document.querySelector('#data').value = data;
    }

    var btnRemove = document.createElement('button');
    btnRemove.innerHTML = '<i class="fa-solid fa-trash"></i>';
    btnRemove.setAttribute('class', 'btn-rem');
    task.appendChild(btnRemove);

    btnRemove.addEventListener('click', rimuovi);

    function rimuovi() {
        task.classList.add('animate__animated', 'animate__fadeOutRight');

        setTimeout(() => {
            lista.removeChild(task);
        }, 500);
    }
}

btnAggiungi.addEventListener('click', aggiungi);