
let delay = 300;

$( "#datepicker-popup2" ).datepicker({
	inline: true
});

$( document ).ready(function() {


});

$( ".timeline-panel" ).click(function() {

  let timelineContainer = $("#timeline-container");
  let calendarContainer = $("#calendar-container");
  let h5Title = $("#timeline-calendar-title");
  timelineContainer.fadeOut(delay,function(){
    calendarContainer.fadeIn(delay);
  });
  h5Title.fadeOut(delay, function() {
    h5Title.text("Calendário Versão 1.0.0");
    h5Title.fadeIn(delay);
  });
  
 
});

$("#back-timeline-button").click(function(){

  let timelineContainer = $("#timeline-container");
  let calendarContainer = $("#calendar-container");
  let h5Title = $("#timeline-calendar-title");
  calendarContainer.fadeOut(delay,function(){
    timelineContainer.fadeIn(delay);
  });
  h5Title.fadeOut(delay, function() {
    h5Title.text("Linha do tempo de alterações");
    h5Title.fadeIn(delay);
  });

});

$("#versions-select").change(function() {
    let val = $(this).val();
    let calendar1 = $("#calendar-1-container");
    let calendar2 = $("#calendar-2-container");
    if(val == "0"){
        calendar2.fadeOut(delay);
    } else {
        calendar2.fadeIn(delay);
    }
  });


