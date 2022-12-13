import "@picocss/pico";

// recebendo a API em uma constante
const APIGITHUB = "https://api.github.com/users/";

const input = document.querySelector("input");
const btn = document.querySelector("button");
const card = document.querySelector(".card");


// Função que capta a API
/*async function getUsuario(usuario) {
  const response = await fetch(APIGITHUB + usuario);
  const responseDado = await response.json();
  return getInfoUsuario(responseDado);
}*/

