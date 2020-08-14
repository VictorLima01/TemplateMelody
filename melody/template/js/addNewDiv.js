// Add a nova div

$('#button_id').click(function() {

    var structure = $('<div class="col-12 mt-3 second"><button type="button" id="cross" class="btn btn-danger btn-icon buttonImgTop relative"><i class="fas fa-trash icon-style"></i> </button>  <div  class="card relative-parent" id="ValuWrapper" ondrop="drop(event)" ondragover="allowDrop(event)"> <div class="card-body "><div class="row">  <div class="col-2"> <h5 contenteditable="true" class="align-tittle-7 margin-botton-tittle">Seu título </h5>   </div> <div class="col-0">  <i  class="fas fa-pencil-alt"></i> </div></div></div></div></div>');
   $('#whatever').append(structure); 

});
/// Scroll com o button

$("#button_id").click(function() {
    $('html,body').animate({
        scrollTop: $(".second").offset().top},
        'slow');
});