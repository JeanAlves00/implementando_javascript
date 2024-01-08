const form = document.getElementById('form-registro');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEValidao = false;
    e.preventDefault();

    const nome = document.getElementById('nome');
    const senha = document.getElementById('password');
    const email = document.getElementById('email');
    const telefone = document.getElementById('telefone');
    const datanascimento = document.getElementById('data-nascimento');
    const mensagemSuceso = 'registro efetuado com sucesso';


    formEValidao = validaNome(nome.value)
    if (formEValidao) {
        alert(mensagemSuceso);

        nome.value = '';
        password.value = '';
        email.value = '';
        telefone.value = '';
        datanascimento.value = '';

    } else {
        alert('Nome não está completo');
    }
})

console.log(form);