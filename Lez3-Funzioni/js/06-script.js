let elDemo = document.getElementById('demo');
let elNome = document.getElementById('nome');

// console.log(elNome);

function saluta() {
    let nome = elNome.value;

    if (nome.trim() == '') {
        elDemo.innerHTML = 'Non hai compilato il campo';
        elDemo.style = 'color: red;';
        elNome.value = '';
    } else {
        elDemo.innerHTML = 'Ciao ' + nome + '!';
        elDemo.style = 'color: #535353;';
    }
}