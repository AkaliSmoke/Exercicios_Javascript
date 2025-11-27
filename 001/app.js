function fnCadastrar(){
    //Criar váriaveis
    let nome="", idade=0

    //Pegarr o contéudo digitado nos campos
    nome = document.getElementById("nome").value
    idade = document.getElementById("idade").value  

    //Mostrar com uma mensagem amigável as informações
    document.getElementById("resultado").innerText = `Olá, seu nome é ${nome} e sua idade é ${idade}`

    //Limpar os campos
    document.getElementById("nome").value = ""
    document.getElementById("idade").value = ""
}