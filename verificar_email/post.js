function fazPost(url,body){

const request = new XMLHttpRequest()

request.open("POST",url, true)
request.setRequestHeader("Content-type","application/json")
request.send(JSON.stringify(body))

request.onload = function(){
    console.log(this.responseText)
    
}
return request.responseText
}

function enviarFormulario(){
    event.preventDefault()
    const nome=document.getElementById('nome').value;
    const cidade =document.getElementById('cidade').value;
    const estado=document.getElementById('estado').value;
    const logradoro=document.getElementById('logradouro').value;
    const emailUsuario= document.getElementById('emailValue').value;
    const idade = document.querySelector('idade');
    const url="https://github.com/leostacowski/prog-bolsas-api"

    body = {
        "name":nome,
        "cidade":cidade,
        "estado":estado,
        "logradouro":logradoro,
        "email":emailUsuario,
        "ch":idade
    }
    alert("envio do formulario con sucesso!!!")

    fazPost(url, body)
}
