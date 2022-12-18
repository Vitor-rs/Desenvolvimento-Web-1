import swal from "sweetalert";

const APIGITHUB = "https://api.github.com/users/";
const input = document.querySelector("input");
const btn = document.querySelector("button");
const card = document.querySelector(".card");

// Recebendo a API do Github do usuário
async function usuario(usuario) {
    const response = await fetch(APIGITHUB + usuario);
    /* os dados do reponse.json() irá para a const resultadoPesquisa no btn.addEventListener
       a partir do usuario(input.value) */
    return await response.json();
}

// Botão que aciona toda a cadeia de eventos
btn.addEventListener("click", async () => {
    const resultadoPesquisa = await usuario(input.value); // recebe a const responseDados da função

    // Deixei o console.log só para analisar o código ao inspecionar
    console.log(resultadoPesquisa);

    // Usando o Sweet Alert para personalizar o alert do navegador ao não encontrar o usuário
    if (!resultadoPesquisa.login) {
        swal("Atenção!", "Usuário inexistente.", "error").then(function () {
            location.reload();
        });
    // Se o usuário existir, ele retornará a template String abaixo
    } else {
        card.innerHTML = `
            <div class="avatar">
                <img src="${resultadoPesquisa.avatar_url}" alt="">
            </div>
            <div class="info">
                <h2>${resultadoPesquisa.name}</h2>
                <p>${resultadoPesquisa.login}</p>
                <div class="info-seguir">
                    <div class="elemento">
                        <span>${resultadoPesquisa.followers}</span>
                        <span>Seguidores</span>
                    </div>
                    <div class="elemento">
                        <span>${resultadoPesquisa.following}</span>
                        <span>Seguindo</span>
                    </div>
                </div>
                <div class="elemento">
                    <span>${resultadoPesquisa.public_repos}</span>
                    <span>Repositório(s)</span>
                </div>
            </div>
            <a href="${resultadoPesquisa.html_url}" target="_blank">Visitar perfil > </a>
        `;
    }
});
