function remChild(obj){

    $($(obj).next()).slideUp(200,function()
    {
        $(obj).next().remove();
		$(obj).remove();
		console.log(obj);
	});           
	
 }
$(document).ready(function(obj){

    original = document.getElementById('ValuWrapper');
    crossButton = document.getElementById('cross');


    $("body").on("click",".buttonImgTop",function(){
        remChild(this);
		console.log("teste1");
    });
}); 