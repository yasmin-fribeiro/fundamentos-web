

/*
Case sensitive = reconhece letras maisculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByTagName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome inválido'
        txt.style.color = 'red'
     } else {
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'green'
    }
    
}


nome.style.width = '50%'
email.style.width = '50%'
assunto.style.width = '50%'