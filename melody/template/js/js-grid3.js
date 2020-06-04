(function($) {
    'use strict';
    $(function() {
        
        if ($("#js-grid-sortable3").length) {
        $("#js-grid-sortable3").jsGrid({
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
           data: db.clients2,
          controller: db,
  
          fields: [{
              name: "Nome",
              type: "text",
              width: 150
            },
            {
              title:"CNPJ",
              name: "cnpj",
              type: "number",
              width: 200
            },
            {
              name: "Status",
              type: "select",
               items: db.countries2,
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
              name: "pv",
              title: "PV",
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
          $("#js-grid-sortable3").jsGrid("sort", field);
        });
      }
    
     });
  })(jQuery);