function login() {

    let nickname = document.querySelector('#nickname').value;
    let ruolo = document.querySelector('#ruolo').value;

    if (nickname != '' && ruolo != -1) {
        localStorage.setItem('nickname', nickname);
        localStorage.setItem('ruolo', ruolo);
    } else {
        alert('Non hai inserito nessun Nickname o il ruolo non è selezionato');
        event.preventDefault();
    }

}

let btnLogin = document.querySelector('#btnLogin');
btnLogin.addEventListener('click', login);

function logout() {
    // il metodo removeItem() cancella solo i valori assegnati a una particolare chiave
    // localStorage.removeItem('nickname');
    // localStorage.removeItem('ruolo');

    // il metodo clear() cancella TUTTA la localStorage in un colpo solo
    localStorage.clear();
}

let btnLogout = document.querySelector('#btnLogout');
btnLogout.addEventListener('click', logout);

let sessioneUser = document.querySelector('#sessioneUser');

// Verifica se esiste qualcosa in local o session storage
function salutaUser() {

    let nickname = localStorage.getItem('nickname');
    let ruolo = localStorage.getItem('ruolo');

    if (nickname != null && ruolo != null) {
        sessioneUser.innerHTML = `
            <div class="alert alert-success" role="alert">
                <strong>Benvenuto/a ${nickname}!!!</strong> Hai selezionato il ruolo di ${ruolo}.
            </div>
        `
    } else {
        sessioneUser.innerHTML = `
            <div class="alert alert-warning" role="alert">
                Non c'è nessun utente connesso, effettua il login per partecipare!
            </div>
        `
    }
}

document.addEventListener('DOMContentLoaded', salutaUser);

let btnVerifica = document.querySelector('#btnVerifica');

function verificaStorage() {
    // console.log(localStorage.key(0));

    for (let i = 0; i < localStorage.length; i++) {
        console.log(localStorage.key(i) + ' = ' + localStorage.getItem(localStorage.key(i)));
    }
}

btnVerifica.addEventListener('click', verificaStorage);