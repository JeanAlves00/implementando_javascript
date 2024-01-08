const form = document.getElementById('form-registro');
const nome = document.getElementById('nome');
let formEValidao = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const password = document.getElementById('password');
    const email = document.getElementById('email');
    const telefone = document.getElementById('telefone');
    const datanascimento = document.getElementById('datanascimento');
    const mensagemSuceso = `registro efetuado com sucesso: <b>${nome.value}</b>`;


    formEValidao = validaNome(nome.value)
    if (formEValidao) {
        const containerMesagemSucesso = document.querySelector('.success-message');
        containerMesagemSucesso.innerHTML = mensagemSuceso;
        containerMesagemSucesso.style.display = 'block';

        nome.value = '';
        password.value = '';
        email.value = '';
        telefone.value = '';
        datanascimento.value = '';

    } else {
        nome.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
});

nome.addEventListener('keyup', function (e) {
    console.log(e.target.value);
    formEValidao = validaNome(e.target.value);

    if (!formEValidao) {
        nome.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nome.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
    });