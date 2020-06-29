(function($) {
    showSwal = function(type) {
      'use strict';
      if (type === 'auto-close') {
        swal({
          title: 'Cadastro feito com sucesso',
          text: 'I will close in 2 seconds.',
          type: 'info',
          html:
    'You can use <b>bold text</b>, ' +
    '<a href="//github.com">links</a> ' +
    'and other HTML tags',
          timer: 2000,
          button: false
        }).then(
          function() {},
          // handling the promise rejection
          function(dismiss) {
            if (dismiss === 'timer') {
              console.log('I was closed by the timer')
            }
          }
        )
      }else if (type === 'auto-close2') {
        swal({
          title: 'Cadastro não foi feito',
          text: 'I will close in 2 seconds.',
          timer: 2000,
          button: false
        }).then(
          function() {},
          // handling the promise rejection
          function(dismiss) {
            if (dismiss === 'timer') {
              console.log('I was closed by the timer')
            }
          }
        )
      } 
    }
  
  })(jQuery);