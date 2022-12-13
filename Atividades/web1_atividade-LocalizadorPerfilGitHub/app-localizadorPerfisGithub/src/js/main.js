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

function getErro(response) {
  const usuarioErro = `
    <div class="usuario-box">
            <div class="foto-avatar">
                    <img src="./img/empty.png" class="avatar" alt="Indefinido"></img>
            </div>
            <div class="info-usuario">
                <h2>Usuário inexistente</h2>
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
  perfil.innerHTML = usuarioErro;
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

form.addEventListener("submit", async (e) => {
  //e.preventDefault();
  const valor_pesquisa = pesquisa.value;
  const resultado_pesquisa = await getUsuario(valor_pesquisa);
  console.log(resultado_pesquisa);
  if (!resultado_pesquisa.login) {
    alert('Indefinido')
  } else { // parei aqui
    if (valor_pesquisa) {
      getUsuario(valor_pesquisa);
      pesquisa.value = "";
    }
  }
  
});
