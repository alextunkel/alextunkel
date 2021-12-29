$(document).ready(function() {
    var botao = $('.home');
    var dropDown = $('.ul-submenu');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });