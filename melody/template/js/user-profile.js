(function($) {
    'use strict';
    $( ".input-container" ).focusin(function() {
        $( this ).find( "div" ).css( "display", "block" );
      });

      $( ".input-container" ).focusout(function() {
        $( this ).find( "div" ).css( "display", "none" );
      });
  })(jQuery);