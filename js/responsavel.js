
// cadastrar
function cadastrar() {
    const nome = document.getElementById("name").value;

    const telefone = document.getElementById("telefone").value;

    const endereco = document.getElementById("endereco").value;

    const cep= document.getElementById("cep").value;

        alert(nome + " - " + telefone + " - " + endereco + " - " + cep);

}

// validarNome
function validarNome() {
    const nome = document.getElementById("name").value;

    if(nome == ""){
        alert("Você precisa preencher o campo nome");
    }
}

//validarTelefone
function validarTelefone(){
    const telefone = document.getElementById("telefone").value;

    if(telefone == ""){
            alert("Você precisa preencher o campo telefone");
    }
}


//validarEndereco
function validarEndereco(){
    const endereco = document.getElementById("endereco").value;
       
    if(endereco == ""){
            alert("Você precisa preencher o campo endereco");
    }
}

//validarCep
function validarCep(){
    const cep = document.getElementById("cep").value;
            
    if(cep == ""){
            alert("Você precisa preencher o campo CEP");
    }
}