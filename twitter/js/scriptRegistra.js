/* --------------------- recupero gli elementi del form --------------------- */
let username = document.querySelector('#username');
let userCheck = document.querySelector('#userCheck');

let password = document.querySelector('#password');
let passwordCheck = document.querySelector('#passwordCheck');

let registraForm = document.querySelector('#registraForm');

/* ---------------------- controlli per username e psw ---------------------- */
const FORMATO_USER = /^[a-zA-Z0-9]{4,15}$/;
const FORMATO_PW = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]{8,}$/i;

function checkUser() {
    if (username.value.length < 4) {
        userCheck.textContent = 'Il tuo username deve contenere almeno 4 caratteri!'
        return false;
    } else if (username.value.length > 15) {
        userCheck.textContent = 'Il tuo username deve contenere meno di 15 caratteri!'
        return false;
    } else if (!username.value.match(FORMATO_USER)) {
        userCheck.textContent = 'Il tuo username può contenere solo lettere e numeri!'
        return false;
    } else {
        userCheck.textContent = '';
        return true;
    }
}

function checkPass() {
    if (password.value.length < 8 || !password.value.match(FORMATO_PW)) {
        passwordCheck.innerHTML = `
                            <li>La tua password deve contenere: </li>
                            <li>Almeno 8 caratteri</li>
                            <li>Almeno una maiuscola</li>
                            <li>Almeno una minuscola</li>
                            <li>Almeno un numero</li>
                            <li>Almeno un carattere speciale</li>`;
        return false;
    } else {
        passwordCheck.innerHTML = '';
        return true;
    }
}

/* ------------ creo la funzione costruttore per l'oggetto utente ------------ */
function User(username, password) {
    this.username = username;
    this.password = password;
}

function addUser() {
    let userOk = checkUser();
    let passwordOk = checkPass();

    if (userOk && passwordOk) {
        let newUser = new User(username.value, password.value);

        newUser.tweets = [];
        newUser.avatar = 'https://pbs.twimg.com/profile_images/1143032401108578305/8IYSjofV_400x400.jpg'

        localStorage.setItem('log', JSON.stringify(newUser));
    } else {
        event.preventDefault();
    }
}

registraForm.addEventListener('submit', addUser);