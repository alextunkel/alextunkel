const inputs=document.querySelectorAll('input')
inputs.forEach(input =>{
   
})
function formulario(){
  
    let request = new XMLHttpRequest('msg')
    request.open("GET", url, false)
     .then(response => response.Post())
     .then(data =>{
   request.send='https://github.com/leostacowski/prog-bolsas-api'
       alert('vc clicou no botao')
   })
     
   return request.responseText
}