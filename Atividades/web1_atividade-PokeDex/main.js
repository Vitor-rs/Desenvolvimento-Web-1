
const pokeCard = document.querySelector("[dado-poke-card]");
const pokeNome = document.querySelector("[dado-poke-nome]");
const pokeImg = document.querySelector("[dado-poke-img]");
const pokeImgContainer = document.querySelector("[dado-poke-img-container]");
const pokeId = document.querySelector("[dado-poke-id]");
const pokeTipos = document.querySelector("[dado-poke-tipos]");
const pokeStats = document.querySelector("[dado-poke-stats]");

const tipoCores = {
  electric: "#FFEA70",
  normal: "#B09398",
  fire: "#FF675C",
  water: "#0596C7",
  ice: "#AFEAFD",
  rock: "#999799",
  flying: "#7AE7C7",
  grass: "#4A9681",
  psychic: "#FFC6D9",
  ghost: "#561D25",
  bug: "#A2FAA3",
  poison: "#795663",
  ground: "#D2B074",
  dragon: "#DA627D",
  steel: "#1D8A99",
  fighting: "#2F2F2F",
  default: "#2A1A1F",
};

async function getPokemon(event) {
  event.preventDefault();
  const { value } = event.target.pokemon;
  await fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
    .then((data) => data.json())
    .then((response) => renderizarDadoPoke(response))
    .catch((err) => renderNaoEncontrado());
}

function renderizarDadoPoke(data) {
  const sprite = data.sprites.front_default;
  const { stats, types } = data;

  pokeNome.textContent = data.name;
  pokeImg.setAttribute("src", sprite);
  pokeId.textContent = `Nº ${data.id}`;
  setCorCard(types);
  renderizarTipoPoke(types);
  renderizarStatsPoke(stats);
}

function setCorCard(types) {
  const corUm = tipoCores[types[0].type.name];
  const corDois = types[1] ? tipoCores[types[1].type.name] : tipoCores.default;
  pokeImg.style.background = `radial-gradient(${corDois} 33%, ${corUm} 33%)`;
  pokeImg.style.backgroundSize = " 5px 5px";
}

function renderizarTipoPoke(types) {
  pokeTipos.innerHTML = "";
  types.forEach((type) => {
    const typeTextElement = document.createElement("div");
    typeTextElement.style.color = tipoCores[type.type.name];
    typeTextElement.textContent = type.type.name;
    pokeTipos.appendChild(typeTextElement);
  });
}

function renderizarStatsPoke(stats) {
  pokeStats.innerHTML = "";
  stats.forEach((stat) => {
    const elementoStat = document.createElement("div");
    const elementoStatNome = document.createElement("div");
    const elementoStatQuantidade = document.createElement("div");
    elementoStatNome.textContent = stat.stat.name;
    elementoStatQuantidade.textContent = stat.base_stat;
    elementoStat.appendChild(elementoStatNome);
    elementoStat.appendChild(elementoStatQuantidade);
    pokeStats.appendChild(elementoStat);
  });
}

const renderNaoEncontrado = () => {
  pokeNome.textContent = "Pokemon inexistente!";
  pokeImg.setAttribute("src", "pergunta.png");
  pokeImg.style.background = "#fff";
  pokeTipos.innerHTML = "";
  pokeStats.innerHTML = "";
  pokeId.textContent = "";
};
