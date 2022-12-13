import {
  isValid,
  isExpirationDateValid,
  isSecurityCodeValid,
  getCreditCardNameByNumber,
} from "creditcard.js";

const form = document.querySelector("#cartao");

// Aqui é o formulário onde se preenche com as informações do cartão
const numCartao = document.querySelector("#numero-cartao");
const portadorCartao = document.querySelector("#texto-nome");
const validadeCartao = document.querySelector("#texto-valido-ate");
const cvcCartao = document.querySelector("#texto-cvc");

const numCartaoText = document.querySelector(".numeroValor");
const portadorCartaoText = document.querySelector(".nomeValor");
const validadeCartaoText = document.querySelector(".validade-ate");
const cvcCartaoText = document.querySelector(".cvcValor");




// Funcão para formatar e validar o número do cartão
numCartao.addEventListener("keyup", (e) => {
  // Expressões regulares para mascarar e validar os inputs
  if (!e.target.value) {
    numCartaoText.innerText = "xxxx xxxx xxxx xxxx";
  } else {
    const valuesOfInput = e.target.value.replaceAll(" ", "");

    if (e.target.value.length > 14) {
      e.target.value = valuesOfInput.replace(
        /(\d{4})(\d{4})(\d{4})(\d{0,4})/,
        "$1 $2 $3 $4"
      );
      numCartaoText.innerHTML = valuesOfInput.replace(
        /(\d{4})(\d{4})(\d{4})(\d{0,4})/,
        "$1 $2 $3 $4"
      );
    } else if (e.target.value.length > 9) {
      e.target.value = valuesOfInput.replace(
        /(\d{4})(\d{4})(\d{0,4})/,
        "$1 $2 $3"
      );
      numCartaoText.innerHTML = valuesOfInput.replace(
        /(\d{4})(\d{4})(\d{0,4})/,
        "$1 $2 $3"
      );
    } else if (e.target.value.length > 4) {
      e.target.value = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
      numCartaoText.innerHTML = valuesOfInput.replace(
        /(\d{4})(\d{0,4})/,
        "$1 $2"
      );
    } else {
      numCartaoText.innerHTML = valuesOfInput;
    }
  }
});

// Recebendo o nome do portador e formatando-o
portadorCartao.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    portadorCartaoText.innerHTML = "----- ----- -----";
  } else {
    portadorCartaoText.innerHTML = e.target.value.toUpperCase();
  }
});

// Validando o input de data com máscara
validadeCartao.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    validadeCartaoText.innerHTML = "--/--";
  } else {
    const valuesOfInput = e.target.value.replace("/", "");

    if (e.target.value.length > 2) {
      e.target.value = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
      validadeCartaoText.innerHTML = valuesOfInput.replace(
        /^(\d{2})(\d{0,2})/,
        "$1/$2"
      );
    } else {
      validadeCartaoText.innerHTML = valuesOfInput;
    }
  }
});
