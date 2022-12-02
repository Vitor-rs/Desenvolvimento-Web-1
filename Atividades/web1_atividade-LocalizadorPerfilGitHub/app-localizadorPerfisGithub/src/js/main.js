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
            <div class="repositorios" id="repositorio">ABC</div>
        </div>
    </div>        
    `;
}

// método para retornar o tipo de erro caso a api falhe
const criarCartoDeErro = (mensagem) => {

}

// método para pegar o usuário
const getUsuario = async (nome_usuario) => {
    try { // aqui estou usando o axios para fazer um fetch da api com tratamento de erro
        const {dados} = await axios(APIGITHUB + nome_usuario)
    } catch {

    }
}


