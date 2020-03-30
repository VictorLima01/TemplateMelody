$(function() {
	
 // Gráficos BillBank
 
 var multiAreaData3 = {
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
   var multiLineData3 = {
    labels: ["Fev/19", "Mar/19", "Abr/19", "Mai/19", "Jun/19", "Jul/19", "Ago/19", "Set/19", "Out/19", "Nov/19", "Dez/19"],
    datasets: [{
        label: 'Clientes',
        data: [1000, 2956, 1444, 8555, 865, 1056, 1054, 2544, 1098, 1147, 1285],
        borderColor: [
          '#587ce4'
        ],
        borderWidth: 2,
        fill: false
      },
      
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
   if ($("#areachart-multi3").length) {
    var multiAreaCanvas = $("#areachart-multi3").get(0).getContext("2d");
    var multiAreaChart3 = new Chart(multiAreaCanvas, {
      type: 'line',
      data: multiAreaData3,
      options: multiAreaOptions
    });
  }
 
    if ($("#linechart-multi3").length) {
    var multiLineCanvas = $("#linechart-multi3").get(0).getContext("2d");
    var lineChart3 = new Chart(multiLineCanvas, {
      type: 'line',
      data: multiLineData3,
      options: options
    });
  }
  
  
  // End Gráfico Bill Bank
 
 //Gráficos Pay
 var multiAreaData9 = {
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
   var multiLineData9 = {
    labels: ["Fev/19", "Mar/19", "Abr/19", "Mai/19", "Jun/19", "Jul/19", "Ago/19", "Set/19", "Out/19", "Nov/19", "Dez/19"],
    datasets: [{
        label: 'Clientes',
        data: [1000, 2956, 1444, 8555, 865, 1056, 1054, 2544, 1098, 1147, 1285],
        borderColor: [
          '#587ce4'
        ],
        borderWidth: 2,
        fill: false
      },
      
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
   if ($("#areachart-multi9").length) {
    var multiAreaCanvas = $("#areachart-multi9").get(0).getContext("2d");
    var multiAreaChart9 = new Chart(multiAreaCanvas, {
      type: 'line',
      data: multiAreaData9,
      options: multiAreaOptions
    });
  }
 
    if ($("#linechart-multi9").length) {
    var multiLineCanvas = $("#linechart-multi9").get(0).getContext("2d");
    var lineChart9 = new Chart(multiLineCanvas, {
      type: 'line',
      data: multiLineData9,
      options: options
    });
  }
 //End Pay


// Gráficos True
 var multiAreaData5 = {
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
   var multiLineData5 = {
    labels: ["Fev/19", "Mar/19", "Abr/19", "Mai/19", "Jun/19", "Jul/19", "Ago/19", "Set/19", "Out/19", "Nov/19", "Dez/19"],
    datasets: [{
        label: 'Clientes',
        data: [1000, 2956, 1444, 8555, 865, 1056, 1054, 2544, 1098, 1147, 1285],
        borderColor: [
          '#587ce4'
        ],
        borderWidth: 2,
        fill: false
      },
      
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
   if ($("#areachart-multi5").length) {
    var multiAreaCanvas = $("#areachart-multi5").get(0).getContext("2d");
    var multiAreaChart5 = new Chart(multiAreaCanvas, {
      type: 'line',
      data: multiAreaData5,
      options: multiAreaOptions
    });
  }
 
    if ($("#linechart-multi5").length) {
    var multiLineCanvas = $("#linechart-multi5").get(0).getContext("2d");
    var lineChart5 = new Chart(multiLineCanvas, {
      type: 'line',
      data: multiLineData5,
      options: options
    });
  }
//End True


//Gráficos Account
 var multiAreaData6 = {
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
   var multiLineData6 = {
    labels: ["Fev/19", "Mar/19", "Abr/19", "Mai/19", "Jun/19", "Jul/19", "Ago/19", "Set/19", "Out/19", "Nov/19", "Dez/19"],
    datasets: [{
        label: 'Clientes',
        data: [1000, 2956, 1444, 8555, 865, 1056, 1054, 2544, 1098, 1147, 1285],
        borderColor: [
          '#587ce4'
        ],
        borderWidth: 2,
        fill: false
      },
      
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
   if ($("#areachart-multi6").length) {
    var multiAreaCanvas = $("#areachart-multi6").get(0).getContext("2d");
    var multiAreaChart6 = new Chart(multiAreaCanvas, {
      type: 'line',
      data: multiAreaData6,
      options: multiAreaOptions
    });
  }
 
    if ($("#linechart-multi6").length) {
    var multiLineCanvas = $("#linechart-multi6").get(0).getContext("2d");
    var lineChart6 = new Chart(multiLineCanvas, {
      type: 'line',
      data: multiLineData6,
      options: options
    });
  }
//End Account

//Gráficos Check
 var multiAreaData7 = {
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
   var multiLineData7 = {
    labels: ["Fev/19", "Mar/19", "Abr/19", "Mai/19", "Jun/19", "Jul/19", "Ago/19", "Set/19", "Out/19", "Nov/19", "Dez/19"],
    datasets: [{
        label: 'Clientes',
        data: [1000, 2956, 1444, 8555, 865, 1056, 1054, 2544, 1098, 1147, 1285],
        borderColor: [
          '#587ce4'
        ],
        borderWidth: 2,
        fill: false
      },
      
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
   if ($("#areachart-multi7").length) {
    var multiAreaCanvas = $("#areachart-multi7").get(0).getContext("2d");
    var multiAreaChart7 = new Chart(multiAreaCanvas, {
      type: 'line',
      data: multiAreaData7,
      options: multiAreaOptions
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
//End Check


//Gráficos Card
 var multiAreaData8 = {
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
   var multiLineData8 = {
    labels: ["Fev/19", "Mar/19", "Abr/19", "Mai/19", "Jun/19", "Jul/19", "Ago/19", "Set/19", "Out/19", "Nov/19", "Dez/19"],
    datasets: [{
        label: 'Clientes',
        data: [1000, 2956, 1444, 8555, 865, 1056, 1054, 2544, 1098, 1147, 1285],
        borderColor: [
          '#587ce4'
        ],
        borderWidth: 2,
        fill: false
      },
      
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
   if ($("#areachart-multi8").length) {
    var multiAreaCanvas = $("#areachart-multi8").get(0).getContext("2d");
    var multiAreaChart8 = new Chart(multiAreaCanvas, {
      type: 'line',
      data: multiAreaData8,
      options: multiAreaOptions
    });
  }
 
    if ($("#linechart-multi8").length) {
    var multiLineCanvas = $("#linechart-multi8").get(0).getContext("2d");
    var lineChart4 = new Chart(multiLineCanvas, {
      type: 'line',
      data: multiLineData8,
      options: options
    });
  }
//End Card

  
  });