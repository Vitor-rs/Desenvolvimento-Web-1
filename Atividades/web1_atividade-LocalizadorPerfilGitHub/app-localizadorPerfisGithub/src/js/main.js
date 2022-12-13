import "@picocss/pico";

// recebendo a API em uma constante
const APIGITHUB = "https://api.github.com/users/";

const perfil = document.querySelector("#perfil-Usuario");
const form = document.querySelector("#form");
const pesquisa = document.querySelector("pesquisaBox");

// Função que capta a API
async function gerUsuario(usuario) {
    const response = await fetch(APIGITHUB + usuario);
    const responseDado = await response.json();
}




