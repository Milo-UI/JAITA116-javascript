let demo = document.querySelector("#demo");
//Attraverso la API fetch posso comunicare con delle API esterne, ovvero richiendo o inviando dati presso delle risorse (endpoint = url)
const urlEndPoint = "https://dummyjson.com/recipes";

//Quando nella fetch passo solo lo URL sto eseguendo una request di tipo GET
//La fetch è una Promise nello specifico una Request. Quindi accetta delle funzioni di callback
fetch(urlEndPoint)
//i metodi then sono i miei consumer
.then(data =>{
    return data.json(); //questo metodo json() applicato a data nasconde un parse(), quindi li sto trasformando in oggetti comprensibili alla mia tecnologia
})
.then(response => {
    console.log(response)
    //response.recipes è un array di 30 oggetti
    let ricette = response.recipes;
    console.log(ricette[0].name);

    // ricette.forEach(ricetta => {
    //     demo.innerHTML += stampaRicette(ricetta);
    // });
    stampaTutteRicette(ricette);
});

// function stampaRicette(ricetta){
//     return `<li> ${ricetta.name} <img style='width: 150px; heigth: auto' src = ${ricetta.image}> </li>`
// }

function stampaTutteRicette(ricette){
    ricette.forEach(ricetta => {
        demo.innerHTML += `<li> ${ricetta.name} <img style='width: 150px; heigth: auto' src = ${ricetta.image}> </li>`
    });
}

function inviaProdotto(){

    
    let mioProdotto = {
        name: "PC DEll",
    version: "Vostro 5580"
}
let urlEndPointPOST = "https://dummyjson.com/products/add";

fetch(urlEndPointPOST, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(mioProdotto)
})
.then(    data =>{
    console.log(data);
    return data.json(); 
}
)

}

let btn = document.querySelector("#btn");
btn.addEventListener("click", inviaProdotto);