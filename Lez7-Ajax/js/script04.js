const URLPOKEMON = 'http://localhost:3000/pokemon';

fetch(URLPOKEMON)
    .then(data => {
        return data.json()
    })
    .then(response => {
        console.log(response);

        creaCard(response);
    })

let pokedex = document.querySelector('#pokedex');

function creaCard(pokemonArray) {
    pokemonArray.forEach(pokemon => {
        let card = `
            <div class="col-lg-3 col-md-6">
                <div class="card">
                    <img src="${pokemon.sprite}" class="card-img-top" alt="${pokemon.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${pokemon.nome}</h5>
                        <p class="card-text">${pokemon.abilita}</p>
                        <a href="#" class="btn btn-primary" id="pkmn${pokemon.id}" data-id="${pokemon.id}">Mostra Info</a>
                    </div>
                </div>
            </div>
        `;

        pokedex.innerHTML += card;
    });

    mostraInfo(pokemonArray);
}

function mostraInfo(pokemon) {
    let bottoni = document.querySelectorAll('.btn');

    [...bottoni].forEach(btn => {
        btn.addEventListener('click', function() {
            let pInfo = document.createElement('p');

            console.log(this.previousSibling.textContent.trim());

            if (this.previousSibling.textContent.trim() == '') {
                pInfo.textContent = pokemon[this.getAttribute('data-id')].info;
                // Soluzione con filter() che funziona anche se l'ordine dell'array di pokemon è stato cambiato
                // console.log(pokemon.filter(p => p.id == this.getAttribute('data-id'))[0].info);
                this.parentNode.insertBefore(pInfo, this);
                this.textContent = 'Nascondi Info';

                this.parentNode.previousElementSibling.setAttribute('src', pokemon[this.getAttribute('data-id')].spriteSpalle);
            } else {
                this.previousSibling.remove();
                this.textContent = 'Mostra Info';

                this.parentNode.previousElementSibling.setAttribute('src', pokemon[this.getAttribute('data-id')].sprite);
            }
        })
    });
}