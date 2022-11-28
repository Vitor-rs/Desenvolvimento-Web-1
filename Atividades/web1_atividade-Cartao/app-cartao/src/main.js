const form = document.querySelector("#cartao");

const numCartao = document.querySelector("#numero-cartao");
const portadorCard = document.querySelector("#texto-nome");
const validadeCartao = document.querySelector("#texto-valido-ate");
const cvcCartao = document.querySelector("#texto-cvc");

const numCartaoText = document.querySelector(".numeroValor");
const portadorCardText = document.querySelector(".nomeValor");
const validadeCartaoText = document.querySelector(".validade-ate");
const cvcCartaoText = document.querySelector(".cvcValor");


numCartao.addEventListener("keyup", (e) => { // Expressões regulares para mascarare validar os inputs
  if (!e.target.value) {
    numCartaoText.innerText = "0000 0000 0000 0000";
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