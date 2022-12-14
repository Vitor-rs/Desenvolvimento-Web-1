const input = document.querySelector("input");
const btn = document.querySelector("button");
const card = document.querySelector(".card");

const repos_container = document.querySelector(".repos");

// Recebendo a API do Github do usuário
async function user(username) {
  const resp = await fetch(`https://api.github.com/users/${username}`);
  const respData = await resp.json();
  return respData; // a const respData irá para a const search_result
}

//
// Recebendo a API do Github dos repositórios do usuário
/*async function repos(username) { 
  const resp = await fetch(`https://api.github.com/users/${username}/repos`);
  const respData = await resp.json();
  return respData; // a const respData irá para a const search_result
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
  const input_val = input.value;
  const search_result = await user(input_val); // recebe a const respData da função

  /*add_repo();*/

  // Deixei o console.log só para analisar o código ao inspecionar
  console.log(search_result);

  if (!search_result.login) {
    alert("User not found");
  } else {
    card.innerHTML = `
            <div class="avatar">
                <img src="${search_result.avatar_url}" alt="">
            </div>
            <div class="info">
                <h2>${search_result.name}</h2>
                <p>${search_result.login}</p>
                <div class="follow-info">
                    <div class="single">
                        <span>${search_result.followers}</span>
                        <span>Followers</span>
                    </div>
                    <div class="single">
                        <span>${search_result.following}</span>
                        <span>Following</span>
                    </div>
                </div>
                <div class="single">
                    <span>${search_result.public_repos}</span>
                    <span>Respos</span>
                </div>
            </div>
            <a href="${search_result.html_url}" target="_blank">Visitar repositorio > </a>
        `;
  }
});
