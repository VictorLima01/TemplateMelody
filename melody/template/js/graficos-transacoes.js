$(function() {
	 

 //Gráficos Vendas na parte de transações
  
 var multiAreaDataVendas = {
    labels: ["6:00", "9:00", "12:00", "15:00", "18:00", "21:00"],
    datasets: [{
        label: 'Número de acessos ao produto',
        data: [8, 11, 13, 15, 12, 13, 16, 15, 13, 19, 11, 14],
        borderColor: ['rgba(0,0,255, 0.5)'],
        backgroundColor: ['rgba(0,0,255, 0.5)'],
        borderWidth: 1,
        fill: true
      }
    
    ]
  };
  
   var multiAreaOptions = {
    plugins: {
      filler: {
        propagate: true
      }
    },
    elements: {
      point: {
        radius: 0
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  }
    if ($("#areachart-multivendas").length) {
    var multiAreaCanvas = $("#areachart-multivendas").get(0).getContext("2d");
    var multiAreaChartVendas = new Chart(multiAreaCanvas, {
      type: 'line',
      data: multiAreaDataVendas,
      options: multiAreaOptions
    });
  }
 //End Vendas 
 
 //Gráficos Recebimentos na parte de transações
 var multiAreaDataRecebimentos = {
    labels: ["6:00", "9:00", "12:00", "15:00", "18:00", "21:00"],
    datasets: [{
        label: 'Número de acessos ao produto',
        data: [8, 11, 13, 15, 12, 13, 16, 15, 13, 19, 11, 14],
        borderColor: ['rgba(255, 99, 132, 0.5)'],
        backgroundColor: ['rgba(255, 99, 132, 0.5)'],
        borderWidth: 1,
        fill: true
      }
    
    ]
  };
  
   var multiAreaOptions = {
    plugins: {
      filler: {
        propagate: true
      }
    },
    elements: {
      point: {
        radius: 0
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  }
    if ($("#areachart-multirecebimentos").length) {
    var multiAreaCanvas = $("#areachart-multirecebimentos").get(0).getContext("2d");
    var multiAreaChartRecebimentos = new Chart(multiAreaCanvas, {
      type: 'line',
      data: multiAreaDataRecebimentos,
      options: multiAreaOptions
    });
  }
 //End Vendas 
 
 //Gráficos Taxas na parte de transações
  var multiAreaDataTaxas = {
    labels: ["6:00", "9:00", "12:00", "15:00", "18:00", "21:00"],
    datasets: [{
        label: 'Número de acessos ao produto',
        data: [8, 11, 13, 15, 12, 13, 16, 15, 13, 19, 11, 14],
        borderColor: ['rgba(255, 99, 132, 0.5)'],
        backgroundColor: ['rgba(255, 99, 132, 0.5)'],
        borderWidth: 1,
        fill: true
      }
    
    ]
  };
  
   var multiAreaOptions = {
    plugins: {
      filler: {
        propagate: true
      }
    },
    elements: {
      point: {
        radius: 0
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  }
    if ($("#areachart-multitaxas").length) {
    var multiAreaCanvas = $("#areachart-multitaxas").get(0).getContext("2d");
    var multiAreaChartTaxas = new Chart(multiAreaCanvas, {
      type: 'line',
      data: multiAreaDataTaxas,
      options: multiAreaOptions
    });
  }
 //End Vendas 





});