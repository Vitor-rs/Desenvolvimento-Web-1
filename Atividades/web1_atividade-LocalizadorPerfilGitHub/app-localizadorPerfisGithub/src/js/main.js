const input = document.querySelector("input");
const btn = document.querySelector("button");
const card = document.querySelector(".card");

const repos_container = document.querySelector(".repos");

// Recebendo a API do Github do usuário
async function usuario(usuario) {
  const response = await fetch(`https://api.github.com/users/${usuario}`);
  const responseDados = await response.json();
  return responseDados; // a const responseDados irá para a const resultadoPesquisa
}

//
// Recebendo a API do Github dos repositórios do usuário
/*async function repos(usuario) { 
  const response = await fetch(`https://api.github.com/users/${usuario}/repos`);
  const responseDados = await response.json();
  return responseDados; // a const responseDados irá para a const resultadoPesquisa
}



const perfil = document.querySelector("#perfil-Usuario");
const form = document.querySelector("#form");
const pesquisa = document.querySelector("#pesquisaBox");

// Função que capta a API
/*async function getUsuario(usuario) {
  const response = await fetch(APIGITHUB + usuario);
  const responseDado = await response.json();
  return getInfoUsuario(responseDado);
}*/

// Botão que aciona toda a cadeia de eventos
btn.addEventListener("click", async () => {
  const valor_input = input.value;
  const resultadoPesquisa = await usuario(valor_input); // recebe a const responseDados da função

  /*add_repo();*/

  // Deixei o console.log só para analisar o código ao inspecionar
  console.log(resultadoPesquisa);

  if (!resultadoPesquisa.login) {
    alert("Usuário inexistente");
  } else {
    card.innerHTML = `
            <div class="avatar">
                <img src="${resultadoPesquisa.avatar_url}" alt="">
            </div>
            <div class="info">
                <h2>${resultadoPesquisa.name}</h2>
                <p>${resultadoPesquisa.login}</p>
                <div class="info-seguir">
                    <div class="elemento">
                        <span>${resultadoPesquisa.followers}</span>
                        <span>Seguidores</span>
                    </div>
                    <div class="elemento">
                        <span>${resultadoPesquisa.following}</span>
                        <span>Seguindo</span>
                    </div>
                </div>
                <div class="elemento">
                    <span>${resultadoPesquisa.public_repos}</span>
                    <span>Respositório</span>
                </div>
            </div>
            <a href="${resultadoPesquisa.html_url}" target="_blank">Visitar perfil > </a>
        `;
  }
});
