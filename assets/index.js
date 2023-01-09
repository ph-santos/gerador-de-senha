const spanValue = document.querySelector('#valor');
const sliderValue = document.querySelector('#slider');
const password = document.querySelector('#password');
const containerPassword = document.querySelector('#container-password');
const button = document.querySelector('#button');

const characters = 'abcdefghijklmnopqrstuvwxzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&*'; 
let newPassword = '';

spanValue.innerHTML = sliderValue.value;

sliderValue.oninput = function () {
    spanValue.innerHTML = this.value;
}

button.addEventListener('click', function () {
    let pass = '';

    for (let i = 0, n = characters.length; i < sliderValue.value; i++) {
        pass += characters.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove('hide');
    password.innerHTML = pass;
    newPassword = pass;
})

password.addEventListener('click', function () {
    navigator.clipboard.writeText(newPassword);
    alert('Senha copiada!');
})