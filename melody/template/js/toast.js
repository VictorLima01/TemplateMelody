
$(function () {

  $('#DIVerror').show();
  $('#DIVhide').hide();
});

$(function () {

        $('#DIVsuccess').show();
 });
 // Set Timeout
$(document).ready(function(){
   $('.tela--fundo').hide();
   setTimeout(function(){ 
     $('.tela--fundo').show();
    }, 5000);
});
$('.sair').click(function (){
  $('.tela--fundo').hide();
});