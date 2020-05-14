/// Grava o nome e a descrição da atividade dentro da Div
function gravar(){
    var titulo = document.getElementById("txtTitulo").value;
    var subtitulo = document.getElementById("txtSubtitulo").value;
    var div = document.getElementById("divResultado");
    
     
    div. innerHTML = "<h6>" + titulo +"</h6>"+ "\n" + "<p>" + subtitulo + "</p>";
    console.log(div);

}
///  Colocar label de options dos produtos
function select(){
    var nome = document.getElementById("txtNome").value;
    var option = document.getElementById("divSelect");
    
     
    option. innerHTML = "<h6>" + nome +"</h6>"; 
}
//// Duplica a div
function duplicarCampos(){

	var clone = document.getElementById('origem').cloneNode(true);
	var destino = document.getElementById('destino');
	destino.appendChild (clone);
	
	var camposClonados = clone.getElementsByTagName('input');
	
	 
	for(i=0; i<camposClonados.length;i++){
		camposClonados[i].getElementById("fone").value;
	}
	
	
	
}

function removerCampos(id){
	var node1 = document.getElementById('destino');
	node1.removeChild(node1.childNodes[0]);
}