const formConsultarCep = document.querySelector("#consultarCep");
const inputCep = formConsultarCep.cep;

formConsultarCep.addEventListener("submit", function (event) {
  event.preventDefault(); // anula o comportamento padrão de envio do form
});
