/*Case sensitive = reconhece letras maiúsculas e minúsculas

por Tag: getElementsByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Seletor: querySelector()
*/

let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false



nome.style.width = '50%'
email.style.width = '50%'
assunto.style.width = '50%'

function validaNome() {
    let nome = document.querySelector('#nome') // Obtém o valor do campo nome
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let email = document.querySelector('#email') // Obtém o valor do campo email
    let txtEmail = document.querySelector('#txtEmail')
    let emailValue = email.value
    if (emailValue.indexOf('@') == -1 || emailValue.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let assunto = document.querySelector('#assunto')
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar () {
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar.')
    }
}