// recupero l'utente creato in registrazione dal local storage
let localUser = JSON.parse(localStorage.getItem('log'));
let localPrevTweet = JSON.parse(localStorage.getItem('prevTweet'));

// visualizzo i dati dell'utente corrente
let currentUser = document.querySelector('#currentUser');
currentUser.innerHTML = `<div class="d-flex align-items-center">
                            <img class="avatar" src="${localUser.avatar}">
                            <p class="mb-0">@${localUser.username}</p>
                        </div>`;

/* -------------------- recupero i vari elementi del form ------------------- */
let tweet = document.querySelector('#tweet');
let carCheck = document.querySelector('#carCheck');
let tweetCheck = document.querySelector('#tweetCheck');

let prevTweet = document.querySelector('#prevTweet');

let tweetForm = document.querySelector('#tweetForm');

let logoutForm = document.querySelector('#logoutForm');

// Faccio in modo che l'utente non possa scrivere più di 50 caratteri
function contaCaratteri() {
    let testoInserito = tweet.value;

    // creo un counter per la lunghezza del tweet
    let counter = (50 - testoInserito.length);
    carCheck.textContent = counter;
}

tweet.addEventListener('keyup', contaCaratteri);

/* ----------------------- indicare l'orario corrente ----------------------- */
function getTime() {
    let now = new Date();
    let ora = (now.getHours() < 10 ? '0' : '') + now.getHours();
    let min = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    let orario = `${ora}:${min}`;
    return orario;
}

/* --------- creo la funzione costruttore per creare l'oggetto tweet -------- */
function Tweet(tweet, orarioTweet) {
    this.tweet = tweet;
    this.orarioTweet = orarioTweet;
}

// Controllo che il tweet non superi la lunghezza consentita e lo aggiungo ai tweet dell'utente corrente salvato in local storage
function addTweet() {
    if (tweet.value.length > 50) {
        tweetCheck.textContent = 'Il tuo tweet è troppo lungo!';
        event.preventDefault();
    } else if (tweet.value.length == 0 || tweet.value == ' ') {
        tweetCheck.textContent = 'Devi scrivere qualcosa per poterlo twittare!';
        event.preventDefault();
    } else {
        let newTweet = new Tweet(tweet.value, getTime());
        localUser.tweets.push(newTweet);
        localStorage.setItem('log', JSON.stringify(localUser));

        localStorage.setItem('prevTweet', JSON.stringify(newTweet));
    }
}

tweetForm.addEventListener('submit', addTweet);

function stampaTweet() {
    prevTweet.textContent = '';

    if (localPrevTweet != null) {
        prevTweet.innerHTML = `[${localPrevTweet.orarioTweet}] @${localUser.username} <br> ${localPrevTweet.tweet}`;
    } else {
        prevTweet.textContent = 'Scrivi il tuo tweet qui sopra e postalo qui!'
    }
}

stampaTweet();

// Quando l'utente esegue il logout, salvo i suoi dati e tweet nel db per poi cancellarli dal local storage
const URL_USERS = 'http://localhost:3000/users';

function logout() {
    fetch(URL_USERS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: localStorage.getItem('log')
    })

    localStorage.removeItem('log');
    localStorage.removeItem('prevTweet');
}

logoutForm.addEventListener('submit', logout);