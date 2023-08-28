async function buscaEndereco(cep) {
    const mensagemErro = document.querySelector('#erro');
    mensagemErro.innerHTML = "";
    try {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const response = await fetch(url);
        console.log(response)
        const data = await response.json();
    
        if(data.erro) {
            throw Error('CEP não existe')
        }
        const cidade = document.querySelector('#cidade');
        const logradouro = document.querySelector('#endereco');
        const estado = document.querySelector('#estado');

        cidade.value = data.localidade;
        logradouro.value = data.logradouro;
        estado.value = data.uf;


        console.log(data)

        return data;
    } catch(erro) {
        mensagemErro.innerHTML = `<p>CEP INVALIDO, TENTE NOVAMENTE</p>`
        console.log(erro)
    }

}

const cep = document.querySelector('#cep');

cep.addEventListener("focusout", () => {
    buscaEndereco(cep.value) 
})

