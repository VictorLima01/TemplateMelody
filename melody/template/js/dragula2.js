(function($) {
    'use strict';
    var iconTochange;
    dragula([document.getElementById("dragula-left"), document.getElementById("dragula-right")]);
    dragula([document.getElementById("profile-list-left"), document.getElementById("profile-list-right")]);
    dragula([document.getElementById("dragula-event-left"), document.getElementById("dragula-event-right")]);
    dragula([document.getElementById("dragula-event-left2"), document.getElementById("dragula-event-right2")]);
    dragula([document.getElementById("dragula-event-left3"), document.getElementById("dragula-event-right3")])
    
      .on('drop', function(el) {
        console.log($(el));
        iconTochange = $(el).find('.fa');
        if (iconTochange.hasClass('text-primary')) {
          iconTochange.removeClass('text-primary').addClass('text-success');
        } else if (iconTochange.hasClass('text-success')) {
          iconTochange.removeClass('text-success').addClass('text-primary');
        }
      })
  })(jQuery);