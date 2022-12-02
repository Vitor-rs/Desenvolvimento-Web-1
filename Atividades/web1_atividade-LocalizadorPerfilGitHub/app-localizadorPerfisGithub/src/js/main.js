import "@picocss/pico";
import axios from "axios";

// recebendo a API em uma constante
const APIGITHUB = "https://api.github.com/users/";

const form = document.querySelector("form");
const main = document.querySelector("main");
const pesquisar = document.querySelector("pesquisar");

// método para injetar uma template string do card do usuário
const criarCardUser = (user) => {
    const cardHTML = `
     <div class="card">
        <div>
            <img src="${user.avatar_url}" class="avatar" alt="${user.name}">
        </div>
        <div class="info-user">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul>
                <li>${user.followers}<strong>Seguidores</strong></li>
                <li>${user.following}<strong>Seguindo</strong></li>
                <li>${user.public_repos}<strong>Repositórios</strong></li>
            </ul>
            <div class="repo" id="repos">ABC</div>
        </div>
    </div>        
    `;
    main.innerHTML = cardHTML;
};

// método para retornar o tipo de erro caso a api falhe
function criarCardDeErro(mensagem) {
    const cardHTML = `<div class="card"><h1>${mensagem}</h1></div>`;
    main.innerHTML = cardHTML;
}    

// método para adicionar o repositório ao card
function addReposCard(mensagem) {
    const elementoDoRepos = document.querySelector("#repos");
    repos.slice(0, 5).forEacg((repo) => {
        const elementoRepo = document.createElement('a');
        elementoRepo.classList.add("repo");
        elementoRepo.href = repo.html_url;
        elementoRepo.target = "_blank";
        elementoRepo.innerHTML = repo.name;
        elementoDoRepos.appendChild(elementoRepo);
    });
}

// método para captar o repositório
async function getRepositorio(username) {
    try { //
        const { data } = await axios(APIGITHUB + username + "/repos?sort=created");
        addReposCard(data);
    } catch (error) {
        criarCardDeErro("Problemas ao procurar o repositório");
    }
}

// método para pegar o usuário
async function getUser(username) {
    try { // aqui estou usando o axios para fazer um fetch da api com tratamento de erro
        const { data } = await axios(APIGITHUB + username);
        criarCardUser(data);
        getRepositorio(username);
    } catch (error) {
        if (error.response.status == 404)
            criarCardDeErro("Perfil inexistente!");
    }
}

// função para sub,eter as requisições
form.addEventListener("submit", (e) => {
   e.preventDefault();
   const user = pesquisar.value;
   if(user) {
       getUser(user);
       pesquisar.value = ";"
   }
});


