/// Popular tabela
var dados
[
["98.768.969/0001-01", "CADASTRO - ADRIEL PAIVA", "AVAILABLE", "2007963870"],
["98.768.969/0001-01", "CADASTRO - ADRIEL PAIVA", "AVAILABLE", "2007963889"],
["98.768.969/0001-01", "CADASTRO - ADRIEL PAIVA", "AVAILABLE", "2007963897"],
["98.768.969/0001-01", "CADASTRO - ADRIEL PAIVA", "AVAILABLE", "2007963900"],
["98.768.969/0001-01", "CADASTRO - ADRIEL PAIVA", "AVAILABLE", "2007963919"]
];
var tbody = document.getElementById("tbody");
for(var i = 0; i < dados.length; i ++){
 var tr = "<tr>" + 
 "<td>" + dados[i][0] + "</td>" +
 "<td>" + dados[i][1] + "</td>" +
 "<td>" + dados[i][2] + "</td>" +
 "<td>" + dados[i][3] + "</td>" +
 "</tr>";
tbody.innerHTML += tr;

var tr = tbody.childNodes;
}
// Fim popular a tabela
document.getElementById("txtBusca").addEventListener("keyup", function(){
var busca = document.getElementById("txtBusca").value.toLowerCase();

for(var i = 0; i < td.childNodes.length; i++){
 var achou = false;
 var tr = tbody.childNodes[i];
 var td = tr.childNodes;

for(var j = 0; j < td.length; j++){
 var value = td[j].childNodes[0].nodeValue.toLowerCase();
 if(value.indexOf(busca) >= 0){
     achou = true;
 }
}
if(achou){
   tr.style.display = "table-row";
}else{
   tr.style.display = "none";
}
}
});