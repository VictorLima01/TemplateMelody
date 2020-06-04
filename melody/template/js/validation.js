// Example starter JavaScript for disabling form submissions if there are invalid fields
                        (function() {
                          'use strict';
                          window.addEventListener('load', function() {
                            // Fetch all the forms we want to apply custom Bootstrap validation styles to
                            var forms = document.getElementsByClassName('needs-validation');
                            // Loop over them and prevent submission
                            var validation = Array.prototype.filter.call(forms, function(form) {
                              form.addEventListener('submit', function(event) {
                                if (form.checkValidity() === false) {
                                  event.preventDefault();
                                  event.stopPropagation();
                                }
                                form.classList.add('was-validated');
                              }, false);
                            });
                          }, false);
                        })();
// Filtro por thead
$(function(){
  $("#tabela input").keyup(function(){       
      var index = $(this).parent().index();
      var nth = "#tabela td:nth-child("+(index+1).toString()+")";
      var valor = $(this).val().toUpperCase();
      $("#tabela tbody tr").show();
      $(nth).each(function(){
          if($(this).text().toUpperCase().indexOf(valor) < 0){
              $(this).parent().hide();
          }
      });
  });

  $("#tabela input").blur(function(){
      $(this).val("");
  });
});

