import "@picocss/pico";
import "../css/global.css";
import "../css/dom-parte1.css";

let inputDisciplina = document.querySelector("#disciplina");
let btnAdicionar = document.querySelector(".btn-add");
let lista = document.querySelector(".lista");

/*btnAdicionar.onclick = function () {
  let disciplina = inputDisciplina.value;
  alert(disciplina);
  let li = document.createElement("li");
  li.textContent = disciplina;
  lista.appendChild(li);
};*/

function adicionarDisciplina() {
  let disciplina = inputDisciplina.value;
  let li = document.createElement("li");
  li.textContent = disciplina;
  lista.appendChild(li);
}

btnAdicionar.addEventListener('click', adicionarDisciplina)
