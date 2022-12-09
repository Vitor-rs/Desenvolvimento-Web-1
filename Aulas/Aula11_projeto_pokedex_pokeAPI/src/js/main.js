import "../css/style.css";

/* Selecionando os elementos do DOM */
const inputPesquisa = document.querySelector("#inputPesquisa");
const btnLocalizar = document.querySelector("#btnLocalizar");
const pokedexDisplay = document.querySelector("#display");

/* Adicionando eventos do DOM */ /* função assíncrona para */
btnLocalizar.addEventListener("click", async function () {
  /* buscar os dados da pokemon na API */
  const dadosDoPokemon = await localizarPokemon(inputPesquisa.value);
  /* criar o cartão do pokemon */
  criarCartao(dadosDoPokemon);
});

async function localizarPokemon(termoBusca) {
  const url = `https://pokeapi.co/api/v2/pokemon/${termoBusca}`;
  const response = await fetch(url); /* esperando a resposta da API */
  const pokemon = await response.json(); /* convertendo a resposta para JSON sendo uma função*/
  console.log(pokemon)
  return pokemon;
}

function criarCartao(pokemon) {
  /* criando elemento container div */
  const cartaoPokemon = document.createElement("div");
  cartaoPokemon.className = "cartaoPokemon";

  cartaoPokemon.innerHTML = `
        <div class="cardPokemon">
        <img class="pokemonSprite" src="${pokemon.sprites.front_default}"/>
        <h2>${pokemon.name}</h2>
        </div>
    `;
  pokedexDisplay.appendChild(cartaoPokemon);
}