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
        
    `;
}

// método para pegar o usuário
const getUsuario = async (nome_usuario) => {
    try { // aqui estou usando o axios para fazer um fetch da api com tratamento de erro
        const { dados } = await axios(APIGITHUB + nome_usuario)
    } catch {

    }
}


