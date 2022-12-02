import axios from "axios";
import "@picocss/pico";

// recebendo a API em uma constante
const APIGITHUB = "https://api.github.com/users/"

const form = document.querySelector("form");
const main = document.querySelector("main");
const pesquisar = document.querySelector("pesquisar");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const usuario = pesquisar.ariaValueMax; // pegando valores do input range
});