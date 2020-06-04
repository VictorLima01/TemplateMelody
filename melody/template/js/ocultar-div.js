$(function () {

    $('#id-da-div').hide();

    $(document).on('change', '#id-do-select', function(){
        var valor = $(this).val();
        if(valor == "produto"){
            $('#id-da-div').hide();
        }else{
            $('#id-da-div').show();
        }
       
    });
 });
 
 