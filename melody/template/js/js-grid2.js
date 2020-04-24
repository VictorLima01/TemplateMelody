(function($) {
  'use strict';
  $(function() {
	  
	  if ($("#js-grid-sortable2").length) {
      $("#js-grid-sortable2").jsGrid({
        height: "500px",
        width: "100%",
		filtering: true,
        editing: true,
        inserting: true,
        sorting: true,
        paging: true,
        autoload: true,
		autoload: true,
        selecting: false,
        pageSize: 15,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete the client?",
		 data: db.clients,
		controller: db,

        fields: [{
            name: "Nome",
            type: "text",
            width: 150
          },
          {
			title:"CNPJ",
            name: "cnpj",
            type: "text",
            width: 200
          },
          {
            name: "Segmento",
            type: "select",
			 items: db.countries,
            valueField: "Id",
            textField: "Name",
			width: 100
            
          },
          {
			title:"Razão social",
            name: "razao-social",
            type: "text",
			width: 150
          },
          {
            name: "canal-distribuicao",
            title: "Canal de distribuição",
			type: "text",
			width: 200
          },
		
		  {
            type: "control"
          }
		  
        ]
      });
    }

    if ($("#sort").length) {
      $("#sort").on("click", function() {
        var field = $("#sortingField").val();
        $("#js-grid-sortable2").jsGrid("sort", field);
      });
    }
  
   });
})(jQuery);