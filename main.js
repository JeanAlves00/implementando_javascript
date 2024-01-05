const form = document.getElementById('form-registro');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length > 2;
}

form.addEventListener('submit', function(){
    e.preventDefault();

    const nomeRegistro = document.getElementById('nome-registro');
    if (!validaNome(nomeRegistro.value)) {
        alert('Nome não esta completo');
    }
})

console.log(form);