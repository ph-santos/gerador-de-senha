const sliderElement = document.querySelector('#slider');
const buttonElement = document.querySelector('#button');
const sizePasswrd = document.querySelector('#valor');
const password = document.querySelector('#password');
const contatinerPassword = document.querySelector('#container-password');

let charset = 'abcdefghijklmnopqrstuvwxzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&*';
let novaSenha = '';

sizePasswrd.innerHTML = sliderElement.value;

sliderElement.oninput = function () {
    sizePasswrd.innerHTML = this.value;
}

buttonElement.addEventListener('click', function generetePassword() {
    let pass = '';
    
    for (let i = 0, n = charset.length; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    contatinerPassword.classList.remove('hide');
    password.innerText = pass;

    novaSenha += pass;
})

password.addEventListener('click', function () {
    alert('Senha copiada!');
    navigator.clipboard.writeText(novaSenha);
})