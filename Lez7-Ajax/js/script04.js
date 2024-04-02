const URLUtenti = 'http://localhost:3000/utenti';

fetch(URLUtenti)
    .then(data => {
        return data.json();
    })
    .then(utenti => {
        console.log(utenti);
    })