var access_key= '6a941c36975c82524879ea477df5453f'

function verificaEmail(){
   const emailUsuario= document.getElementById('emailValue').value;
   fetch('http://apilayer.net/api/check?access_key=' + access_key+ '&email=' + emailUsuario )
     .then(response => response.json())
      .then(data =>{

        if(data.smtp_check)
        {
           alert('Email Valido. Acesso concedido!!')
        }else{
           alert('Email invalido.Acesso negado')
        }
      })
       .catch(err => console.error(err));
};

