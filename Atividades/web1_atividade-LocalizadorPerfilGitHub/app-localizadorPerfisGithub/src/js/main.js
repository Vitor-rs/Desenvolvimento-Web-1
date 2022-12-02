import "@picocss/pico";
import axios from "axios";

// recebendo a API em uma constante
const APIGITHUB = "https://api.github.com/users/"

const form = document.querySelector("form");
const main = document.querySelector("main");
const pesquisar = document.querySelector("pesquisar");

// método para injetar uma template string do card do usuário
const criarCartaoUsuario = (usuario) => {
    const cartaoHTML = `
     <div class="cartao">
        <div>
            <img src="${usuario.avatar_url}" class="avatar" alt="${usuario.name}">
        </div>
        <div class="info-usuario">
            <h2>${usuario.name}</h2>
            <p>${usuario.bio}</p>
            <ul>
                <li>${usuario.followers}<strong>Seguidores</strong></li>
                <li>${usuario.following}<strong>Seguindo</strong></li>
                <li>${usuario.public_repos}<strong>Repositórios</strong></li>
            </ul>
            <div class="repo" id="repos">ABC</div>
        </div>
    </div>        
    `;
    main.innerHTML = cartaoHTML;
};

// método para retornar o tipo de erro caso a api falhe
const criarCartoDeErro = (mensagem) => {
    const cartaoHTML = `<div class="cartaoErro"><h1>${mensagem}</h1></div>"`;
    main.innerHTML = cartaoHTML;
}

// método para adicionar o repositório ao cartao
const addReposNoCartao = (mensagem) => {
    const elementoDoRepos = document.querySelector("repos");
    repos.slice(0,5).forEach((repo) => {
        const elementoRepo = document.createElement('a');
        elementoRepo.classList.add("repo");
        elementoRepo.href = repo.html_url;
        elementoRepo.target = "_blank";
        elementoRepo.innerHTML = repo.name;
        elementoDoRepos.appendChild(elementoRepo);
    });
}


// método para captar o repositório
const getRepositorio = async (nome_usuario) => {
    try {
        //
        const {dados} = await axios(APIGITHUB + nome_usuario)
    } catch (error) {
        criarCartoDeErro("Problemas ao procurar o repositório")
    }
}

// método para pegar o usuário
const getUsuario = async (nome_usuario) => {
    try { // aqui estou usando o axios para fazer um fetch da api com tratamento de erro
        const {dados} = await axios(APIGITHUB + nome_usuario)
    } catch {

    }
}


