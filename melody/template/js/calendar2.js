(function($) {
  'use strict';
  $(function() {
    if ($('#calendar2').length) {
      $('#calendar2').fullCalendar({
        header: {
          left: 'title', center: ' ', right: 'today prev, next'
        },
        defaultDate: '2020-05-01',
        navLinks: false, // can click day/week names to navigate views
        editable: false,
        eventLimit: false, // allow "more" link when too many events
        events: [{
            title: 'Entendimento do processo',
            start: '2020-05-06',
            end: '2020-05-12'
          },
          {
            title: 'Definição de processos',
            start: '2020-05-15',
            end: '2020-05-20'
          }
        ]
      })
    }

    if ($('#calendar3').length) {
      $('#calendar3').fullCalendar({
        header: {
          left: 'title', center: ' ', right: 'today prev, next'
        },
        defaultDate: '2020-05-01',
        navLinks: false, // can click day/week names to navigate views
        editable: false,
        eventLimit: false, // allow "more" link when too many events
        events: [{
            title: 'Entendimento do processo',
            start: '2020-05-06',
            end: '2020-05-14'
          },
          {
            title: 'Definição de processos',
            start: '2020-05-15',
            end: '2020-05-20'
          }
        ]
      })
    }
  });
})(jQuery);