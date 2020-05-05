(function($) {
  'use strict';
  $(function() {
    if ($('#calendar3').length) {
      $('#calendar3').fullCalendar({
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,basicWeek,basicDay'
        },
        defaultDate: '2020-05-01',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [{
            title: 'Entendimento do processo',
            start: '2020-05-18',
			 end: '2020-05-25'
          },
          {
            title: 'Long Event',
            start: '2017-07-01',
            end: '2017-07-07'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2017-07-09T16:00:00'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2017-07-16T16:00:00'
          },
          {
            title: 'Conference',
            start: '2017-07-11',
            end: '2017-07-13'
          },
          {
            title: 'Meeting',
            start: '2017-07-12T10:30:00',
            end: '2017-07-12T12:30:00'
          },
          {
            title: 'Lunch',
            start: '2017-07-12T12:00:00'
          },
          {
            title: 'Meeting',
            start: '2017-07-12T14:30:00'
          },
          {
            title: 'Happy Hour',
            start: '2017-07-12T17:30:00'
          },
          {
            title: 'Dinner',
            start: '2017-07-12T20:00:00'
          },
          {
            title: 'Birthday Party',
            start: '2017-07-13T07:00:00'
          },
          {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2017-07-28'
          }
        ]
      })
    }
  });
  
})(jQuery);