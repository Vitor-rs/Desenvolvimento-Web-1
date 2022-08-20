const formLogin = document.querySelector('form[name=form-login]')
const btnEntrar = formLogin.querySelector('button[name=btnEntrar]')
const caixaMensagem = document.querySelector('.mensagem')
caixaMensagem.style.display="none"
let email = 'teste@teste.com'
let senha = "123456"
btnEntrar.addEventListener('click',validarDados)

function validarDados(){

   /*  if(formLogin.email.validity.typeMismatch){
        formLogin.email.setCustomValidity("Formato do Email incorreto!!")
        formLogin.email.reportValidity()
    }
    if(formLogin.email.validity.valueMissing){
        formLogin.email.setCustomValidity("Email não pode ser vazio")
        formLogin.email.reportValidity()
    } */
    
     if(formLogin.email.checkValidity() && formLogin.senha.checkValidity()){
        logar()
    }else{
        formLogin.email.reportValidity()
        formLogin.senha.reportValidity()
    } 
}
function logar(){
    if(formLogin.email.value===email && formLogin.senha.value===senha){
        caixaMensagem.style.display="block"
        caixaMensagem.textContent="Logado Com sucesso!"
    }else{
        caixaMensagem.style.display="block"
        caixaMensagem.textContent="Usuário ou senha inválidos" 
    }
}
