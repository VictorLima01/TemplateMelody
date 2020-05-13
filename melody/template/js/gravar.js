function gravar(){
    var titulo = document.getElementById("txtTitulo").value;
    var subtitulo = document.getElementById("txtSubtitulo").value;
    var div = document.getElementById("divResultado");
    
     
    div. innerHTML = "<h6>" + titulo +"</h6>"+ "\n" + "<p>" + subtitulo + "</p>";
}
function select(){
    var nome = document.getElementById("txtNome").value;
    var option = document.getElementById("divSelect");
    
     
    option. innerHTML = "<h6>" + nome +"</h6>"; 
}