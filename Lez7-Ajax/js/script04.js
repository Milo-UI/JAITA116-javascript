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
                    <img src = "${pokemon.sprite}" class="card-img-top" alt="${pokemon.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${pokemon.nome}</h5>
                        <p class="card-text">${pokemon.abilita}</p>
                        <a href="#" class="btn btn-primary">Mostra Info</a>
                    </div>
                </div>
            </div>
        `;

        pokedex.innerHTML += card;
    });
}