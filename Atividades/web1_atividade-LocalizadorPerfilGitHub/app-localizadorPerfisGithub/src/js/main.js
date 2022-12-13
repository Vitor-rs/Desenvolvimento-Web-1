// import "@picocss/pico";

// recebendo a API em uma constante
const APIGITHUB = "https://api.github.com/users/";

const perfil = document.querySelector("#perfil-Usuario");
const form = document.querySelector("#form");
const pesquisa = document.querySelector("#pesquisaBox");

// Função que capta a API
async function getUsuario(usuario) {
  const response = await fetch(APIGITHUB + usuario);
  const responseDado = await response.json();
  return getInfoUsuario(responseDado);
}

// Função para mostrar o resultado
function getInfoUsuario(usuario) {
  const usuarioBox = `
        <div class="usuario-box">
            <div class="foto-avatar">
                <a href="${usuario.html_url}" target="_blank">
                    <img src="${usuario.avatar_url}" class="avatar" alt="${usuario.name}"></img>
                </a>
            </div>
            <div class="info-usuario">
                <h2>${usuario.name}</h2>
                <div class="bio-usuario">
                    <p>${usuario.bio}</p>
                    <a href="${usuario.html_url}" target="_blank">Ver perfil ></a>
                </div>
                <ul class="meta-dados">
                    <li>${usuario.followers} <strong>Seguidores</strong></li>
                    <li>${usuario.following} <strong>Seguindo</strong></li>
                    <li>${usuario.public_repos} <strong>Repositórios</strong></li>
                </ul>
            </div>
        </div>
    `;
    perfil.innerHTML = usuarioBox;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const usuario = pesquisa.value;

  if (usuario) {
    getUsuario(usuario);
    pesquisa.value = '';
  }
});

