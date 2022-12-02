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
            <h2>Vitor Santos</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, maxime.</p>
            <ul>
                <li>3<strong>Seguidores</strong></li>
                <li>5<strong>Seguindo</strong></li>
                <li>14<strong>Repositórios</strong></li>
            </ul>
            <div class="repositorios" id="repositorio">ABC</div>
        </div>
    </div>        
    `;
}

// método para pegar o usuário
const getUsuario = async (nome_usuario) => {
    try { // aqui estou usando o axios para fazer um fetch da api com tratamento de erro
        const {dados} = await axios(APIGITHUB + nome_usuario)
    } catch {

    }
}


