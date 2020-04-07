$(function() {
	 

 //Gráficos Vendas na parte de transações
 var data28 = {
    labels: ["Auto-peças", "Alimentação", "Café", "Cosméticos", "Metrial-const",  "Minimercado", "outros"],
	
    datasets: [{
      label: '',
      data: [94, 89, 62, 54, 65, 36, 105],
      backgroundColor: [
       'rgba(178,34,34, 0.2)',
        'rgba(0,255,0, 0.2)',
        'rgba(75,0,130, 0.2)',
        'rgba(255,255,0, 0.2)',
        'rgba(0,250,154,0.2)',
        'rgba(0,0,255,0.2)',
		'rgba(220,20,60,0.2)',
        'rgba(0,128,0,0.2)',
		 'rgba(124,252,0, 0.2)'
      ],
      borderColor: [
		 'rgba(178,34,34, 1)',
        'rgba(0,255,0, 1)',
        'rgba(75,0,130, 1)',
        'rgba(255,255,0, 1)',
        'rgba(0,250,154,1)',
        'rgba(0,0,255,1)',
		 'rgba(220,20,60,1)',
        'rgba(0,128,0,1)',
		 'rgba(124,252,0, 1)'
      ],
      borderWidth: 1,
      fill: false
    }]
  };
   var data31 = {
    labels: ["Vero", "4Keys", "VR", "Tiquei"],
	
    datasets: [{
      label: '',
      data: [94, 89, 62, 78],
      backgroundColor: [
       'rgba(255,0,0, 0.2)',
        'rgba(0,0,128, 0.2)',
        'rgba(34,139,34, 0.2)',
        'rgba(218,165,32, 0.2)'
        
      ],
      borderColor: [
		 'rgba(255,0,0, 1)',
        'rgba(0,0,128, 1)',
        'rgba(34,139,34, 1)',
        'rgba(218,165,32, 1)'
        
      ],
      borderWidth: 1,
      fill: false
    }]
  };
    var multiLineData7 = {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17","18","19","20", "21", "22","23", "24", "25", "26", "27", "28", "29", "30", "31"],
	datasets: [{
        label: 'Jan',
        data: [448447, 1256568, 37899, 564782, 222654, 321654, 678548, 798210, 101254, 110567, 128654, 154789, 154789, 659123, 895654,448447, 1256568, 37899, 564782, 222654, 321654, 678548, 798210, 101254, 110567, 128654, 154789, 154789, 659123, 895654 ],
        borderColor: [
          '#0000FF'
        ],
        borderWidth: 2,
        fill: false
      },
      
	]
 
	};	
  
  
 var multiAreaDataVendas = {
    labels: ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
    datasets: [{
        label: 'Número de vendas Tiquei',
        data: [8, 11, 13, 15, 12, 13, 16, 15, 13, 19, 11, 14, 25, 22, 28, 26, 15, 13, 12, 45, 44, 26, 8 ,3],
        borderColor: ['rgba(0,0,255, 0.5)'],
        backgroundColor: ['rgba(0,0,255, 0.5)'],
        borderWidth: 1,
        fill: true
      }
    
    ]
  };
    var doughnutPieData3 = {
    datasets: [{
      data: [50, 25,25],
      backgroundColor: [
       'rgba(210,105,30,0.2)',
        'rgba(128,128,128, 0.2)',
        'rgba(255,0,0, 0.2)'
        
      ],
      borderColor: [
        'rgba(210,105,30, 1)',
        'rgba(128,128,128, 1)',
        'rgba(255,0,0, 1)'
        
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Web 564', 
      'IOS 165', 
	  'Android 865'
    ]
  };
    var doughnutPieOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };
  var options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }

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
    if ($("#barChart28").length) {
    var barChartCanvas = $("#barChart28").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart28 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data28,
      options: options
    });
  }
    if ($("#barChart31").length) {
    var barChartCanvas = $("#barChart31").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart31 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data31,
      options: options
    });
  }
 if ($("#linechart-multi7").length) {
    var multiLineCanvas = $("#linechart-multi7").get(0).getContext("2d");
    var lineChart7 = new Chart(multiLineCanvas, {
      type: 'line',
      data: multiLineData7,
      options: options
    });
  }
  if ($("#doughnutChart3").length) {
    var doughnutChartCanvas = $("#doughnutChart3").get(0).getContext("2d");
    var doughnutChart3 = new Chart(doughnutChartCanvas, {
      type: 'doughnut',
      data: doughnutPieData3,
      options: doughnutPieOptions
    });
  }
 //End Vendas 
 
 //Gráficos Recebimentos na parte de transações
 var multiAreaDataRecebimentos = {
    labels: ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
    datasets: [{
        label: 'Número de recebimentos Tiquei',
        data: [8, 11, 13, 15, 12, 13, 16, 15, 13, 19, 11, 14, 25, 22, 28, 26, 15, 13, 12, 45, 44, 26, 8 ,3],
        borderColor: ['rgba(0,128,0, 0.5)'],
        backgroundColor: ['rgba(0,128,0, 0.5)'],
        borderWidth: 1,
        fill: true
      }
    
    ]
  };
  var data29 = {
    labels: ["Auto-peças", "Alimentação", "Café", "Cosméticos", "Metrial-const",  "Minimercado", "outros"],
	
    datasets: [{
      label: '',
      data: [87, 95, 54, 78, 82, 99, 105],
      backgroundColor: [
       'rgba(178,34,34, 0.2)',
        'rgba(0,255,0, 0.2)',
        'rgba(75,0,130, 0.2)',
        'rgba(255,255,0, 0.2)',
        'rgba(0,250,154,0.2)',
        'rgba(0,0,255,0.2)',
		'rgba(220,20,60,0.2)',
        'rgba(0,128,0,0.2)',
		 'rgba(124,252,0, 0.2)'
      ],
      borderColor: [
		 'rgba(178,34,34, 1)',
        'rgba(0,255,0, 1)',
        'rgba(75,0,130, 1)',
        'rgba(255,255,0, 1)',
        'rgba(0,250,154,1)',
        'rgba(0,0,255,1)',
		 'rgba(220,20,60,1)',
        'rgba(0,128,0,1)',
		 'rgba(124,252,0, 1)'
      ],
      borderWidth: 1,
      fill: false
    }]
  };
   var data32 = {
    labels: ["Vero", "4Keys", "VR", "Tiquei"],
	
    datasets: [{
      label: '',
      data: [94, 89, 62, 78],
      backgroundColor: [
       'rgba(255,0,0, 0.2)',
        'rgba(0,0,128, 0.2)',
        'rgba(34,139,34, 0.2)',
        'rgba(218,165,32, 0.2)'
        
      ],
      borderColor: [
		 'rgba(255,0,0, 1)',
        'rgba(0,0,128, 1)',
        'rgba(34,139,34, 1)',
        'rgba(218,165,32, 1)'
        
      ],
      borderWidth: 1,
      fill: false
    }]
  };
  var multiLineData8 = {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17","18","19","20", "21", "22","23", "24", "25", "26", "27", "28", "29", "30", "31"],
	datasets: [{
        label: 'Jan',
        data: [448447, 1256568, 37899, 564782, 222654, 321654, 678548, 798210, 101254, 110567, 128654, 154789, 154789, 659123, 895654,448447, 1256568, 37899, 564782, 222654, 321654, 678548, 798210, 101254, 110567, 128654, 154789, 154789, 659123, 895654 ],
        borderColor: [
          '#008000'
        ],
        borderWidth: 2,
        fill: false
      },
      
	]
 
	};	
	    var doughnutPieData4 = {
    datasets: [{
      data: [50, 25, 25],
      backgroundColor: [
        'rgba(210,105,30,0.2)',
        'rgba(128,128,128, 0.2)',
        'rgba(255,0,0, 0.2)'
        
      ],
      borderColor: [
        'rgba(210,105,30, 1)',
        'rgba(128,128,128, 1)',
        'rgba(255,0,0, 1)'
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Web 564', 
      'IOS 165', 
	  'Android 865'
    ]
  };
  var options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }

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
    if ($("#barChart29").length) {
    var barChartCanvas = $("#barChart29").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart29 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data29,
      options: options
    });
  }
   if ($("#barChart32").length) {
    var barChartCanvas = $("#barChart32").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart31 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data32,
      options: options
    });
  }
  if ($("#linechart-multi8").length) {
    var multiLineCanvas = $("#linechart-multi8").get(0).getContext("2d");
    var lineChart8 = new Chart(multiLineCanvas, {
      type: 'line',
      data: multiLineData8,
      options: options
    });
  }
  if ($("#doughnutChart4").length) {
    var doughnutChartCanvas = $("#doughnutChart4").get(0).getContext("2d");
    var doughnutChart4 = new Chart(doughnutChartCanvas, {
      type: 'doughnut',
      data: doughnutPieData4,
      options: doughnutPieOptions
    });
  }
  
 //End Vendas 
 
 //Gráficos Taxas na parte de transações
  var multiAreaDataTaxas = {
    labels: ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
    datasets: [{
        label: 'Número taxas Tiquei',
        data: [8, 11, 13, 15, 12, 13, 16, 15, 13, 19, 11, 14, 25, 22, 28, 26, 15, 13, 12, 45, 44, 26, 8 ,3],
        borderColor: ['rgba(255,140,0,0.5)'],
        backgroundColor: ['rgba(255,140,0, 0.5)'],
        borderWidth: 1,
        fill: true
      }
    
    ]
  };
     var data30 = {
    labels: ["Auto-peças", "Alimentação", "Café", "Cosméticos", "Metrial-const",  "Minimercado", "outros"],
	
    datasets: [{
      label: '',
      data: [99, 54, 95, 106, 96, 89, 59],
      backgroundColor: [
       'rgba(178,34,34, 0.2)',
        'rgba(0,255,0, 0.2)',
        'rgba(75,0,130, 0.2)',
        'rgba(255,255,0, 0.2)',
        'rgba(0,250,154,0.2)',
        'rgba(0,0,255,0.2)',
		'rgba(220,20,60,0.2)',
        'rgba(0,128,0,0.2)',
		 'rgba(124,252,0, 0.2)'
      ],
      borderColor: [
		 'rgba(178,34,34, 1)',
        'rgba(0,255,0, 1)',
        'rgba(75,0,130, 1)',
        'rgba(255,255,0, 1)',
        'rgba(0,250,154,1)',
        'rgba(0,0,255,1)',
		 'rgba(220,20,60,1)',
        'rgba(0,128,0,1)',
		 'rgba(124,252,0, 1)'
      ],
      borderWidth: 1,
      fill: false
    }]
  };
  var data33 = {
    labels: ["Vero", "4Keys", "VR", "Tiquei"],
	
    datasets: [{
      label: '',
      data: [94, 89, 62, 78],
      backgroundColor: [
       'rgba(255,0,0, 0.2)',
        'rgba(0,0,128, 0.2)',
        'rgba(34,139,34, 0.2)',
        'rgba(218,165,32, 0.2)'
        
      ],
      borderColor: [
		 'rgba(255,0,0, 1)',
        'rgba(0,0,128, 1)',
        'rgba(34,139,34, 1)',
        'rgba(218,165,32, 1)'
        
      ],
      borderWidth: 1,
      fill: false
    }]
  };
    var doughnutPieData2 = {
    datasets: [{
      data: [22.22 , 11.11 , 11.11, 11.11, 11.11, 11.11, 11.11, 11.11, 11.11],
      backgroundColor: [
       'rgba(72,209,204, 0.2)',
        'rgba(255,0,0, 0.2)',
        'rgba(0,139,139, 0.2)',
        'rgba(50,205,50, 0.2)',
        'rgba(139,0,0, 0.2)',
        'rgba(255, 159, 64, 0.2)',
		 'rgba(127,255,0, 0.2)',
        'rgba(255,140,0, 0.2)',
        'rgba(47,79,79, 0.2)'
      ],
      borderColor: [
        'rgba(72,209,204,1)',
        'rgba(255,0,0, 1)',
        'rgba(0,139,139, 1)',
        'rgba(50,205,50,1)',
        'rgba(139,0,0, 1)',
        'rgba(255, 159, 64, 1)',
		 'rgba(127,255,0,1)',
        'rgba(255,140,0,1)',
        'rgba(47,79,79,1)'
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Cielo R$ 2.300,00', 
      'Getnet R$ 6.564,56', 
	  'Sodexo R$ 3.564,89',
	  'vr R$ 9.865,56',
	  'Ticket R$ 5.654,00',
	  'Bin R$ 2.654,89',
	  'Stone R$ 1.564,89',
	  'Rede R$ 2.654,87',
	  'Vero R$ 86.654,56'
    ]
  };
   var doughnutPieData5 = {
    datasets: [{
      data: [50,25,25],
      backgroundColor: [
      'rgba(210,105,30,0.2)',
        'rgba(128,128,128, 0.2)',
        'rgba(255,0,0, 0.2)'
      ],
      borderColor: [
         'rgba(210,105,30, 1)',
        'rgba(128,128,128, 1)',
        'rgba(255,0,0, 1)'
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Web 564', 
      'IOS 165', 
	  'Android 865'
    ]
  };
    var doughnutPieOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    }
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
   var options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }

  };
    if ($("#areachart-multitaxas").length) {
    var multiAreaCanvas = $("#areachart-multitaxas").get(0).getContext("2d");
    var multiAreaChartTaxas = new Chart(multiAreaCanvas, {
      type: 'line',
      data: multiAreaDataTaxas,
      options: multiAreaOptions
    });
  }
     if ($("#barChart30").length) {
    var barChartCanvas = $("#barChart30").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart30 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data30,
      options: options
    });
  }
   if ($("#barChart33").length) {
    var barChartCanvas = $("#barChart33").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart31 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data33,
      options: options
    });
  }
  
  if ($("#doughnutChart2").length) {
    var doughnutChartCanvas = $("#doughnutChart2").get(0).getContext("2d");
    var doughnutChart2 = new Chart(doughnutChartCanvas, {
      type: 'doughnut',
      data: doughnutPieData2,
      options: doughnutPieOptions
    });
  }
   if ($("#doughnutChart5").length) {
    var doughnutChartCanvas = $("#doughnutChart5").get(0).getContext("2d");
    var doughnutChart5 = new Chart(doughnutChartCanvas, {
      type: 'doughnut',
      data: doughnutPieData5,
      options: doughnutPieOptions
    });
  }
 //End Vendas 





});