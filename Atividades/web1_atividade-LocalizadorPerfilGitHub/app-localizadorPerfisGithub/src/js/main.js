import "@picocss/pico";

// recebendo a API em uma constante
const APIGITHUB = "https://api.github.com/users/";

const input = document.querySelector("input");
const btn = document.querySelector("button");
const card = document.querySelector(".card");

// const repos_container = document.querySelector(".repos");

// Recebendo a API do Github do usuário
async function usuario(usuario) {
    const response = await fetch(APIGITHUB + usuario);
    const responseDados = await response.json();
    return responseDados; // a const responseDados irá para a const search_result
}


