$(document).ready(function () {
	 'use strict';
  if ($("#datepicker-popup2").length) {
	  var $j = jQuery.noConflict();
    $j("#datepicker-popup2").datepicker({
      enableOnReadonly: true,
      todayHighlight: true,
	  
    });
	
  }

});