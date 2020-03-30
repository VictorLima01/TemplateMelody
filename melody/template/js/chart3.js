$(function() {
	
	// Gráfico Cielo
	  var data4 = {
    labels: [ "Ifood", "UberEats", "Pagas Cartão", "Pagas Débito/crédito/Online", "Gratuitas", "Sodexo", "Ticket", "Alelo", "VR"],
    datasets: [{
      label: '',
      data: [10, 19, 3, 5, 2, 3, 20, 12, 10],
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
  if ($("#barChart4").length) {
    var barChartCanvas = $("#barChart4").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart4 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data4,
      options: options
    });
  }
  // End Gráfico Cielo
  
  
  // Gráfico Getnet
   var data5 = {
    labels: [ "Ifood", "UberEats", "Pagas Cartão", "Pagas Débito/crédito/Online", "Gratuitas", "Sodexo", "Ticket", "Alelo", "VR"],
    datasets: [{
      label: '',
      data: [10, 19, 3, 5, 2, 3, 20, 12, 10],
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
  if ($("#barChart5").length) {
    var barChartCanvas = $("#barChart5").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart5 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data5,
      options: options
    });
  }
  // End Gráfico Getnet
  
  // Gráfico Sodexo
  var data6 = {
    labels: [ "Ifood", "UberEats", "Pagas Cartão", "Pagas Débito/crédito/Online", "Gratuitas", "Sodexo", "Ticket", "Alelo", "VR"],
    datasets: [{
      label: '',
      data: [10, 19, 3, 5, 2, 3, 20, 12, 10],
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
  if ($("#barChart6").length) {
    var barChartCanvas = $("#barChart6").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart6 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data6,
      options: options
    });
  }
  
  //End Sodexo
  
  //Gráfico VR 
    var data7 = {
    labels: [ "Ifood", "UberEats", "Pagas Cartão", "Pagas Débito/crédito/Online", "Gratuitas", "Sodexo", "Ticket", "Alelo", "VR"],
    datasets: [{
      label: '',
      data: [10, 19, 3, 5, 2, 3, 20, 12, 10],
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
  if ($("#barChart7").length) {
    var barChartCanvas = $("#barChart7").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart7 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data7,
      options: options
    });
  }
  //End VR
  
  // Gráfico ticket
    var data8 = {
    labels: [ "Ifood", "UberEats", "Pagas Cartão", "Pagas Débito/crédito/Online", "Gratuitas", "Sodexo", "Ticket", "Alelo", "VR"],
    datasets: [{
      label: '',
      data: [10, 19, 3, 5, 2, 3, 20, 12, 10],
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
  if ($("#barChart8").length) {
    var barChartCanvas = $("#barChart8").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart8 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data8,
      options: options
    });
  }
  
  
  //end ticket
  
  
  //Gráfico bin
  
    var data9 = {
    labels: [ "Ifood", "UberEats", "Pagas Cartão", "Pagas Débito/crédito/Online", "Gratuitas", "Sodexo", "Ticket", "Alelo", "VR"],
    datasets: [{
      label: '',
      data: [10, 19, 3, 5, 2, 3, 20, 12, 10],
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
  if ($("#barChart9").length) {
    var barChartCanvas = $("#barChart9").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart9 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data9,
      options: options
    });
  }
  
  
  //End Bin
  
  
  //Gráfico Stone
  
    var data10 = {
    labels: [ "Ifood", "UberEats", "Pagas Cartão", "Pagas Débito/crédito/Online", "Gratuitas", "Sodexo", "Ticket", "Alelo", "VR"],
    datasets: [{
      label: '',
      data: [10, 19, 3, 5, 2, 3, 20, 12, 10],
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
  if ($("#barChart10").length) {
    var barChartCanvas = $("#barChart10").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart10 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data10,
      options: options
    });
  }
  
  
  // End Stone
  
  
  //Gráfico Rede
    var data11 = {
    labels: [ "Ifood", "UberEats", "Pagas Cartão", "Pagas Débito/crédito/Online", "Gratuitas", "Sodexo", "Ticket", "Alelo", "VR"],
    datasets: [{
      label: '',
      data: [10, 19, 3, 5, 2, 3, 20, 12, 10],
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
  if ($("#barChart11").length) {
    var barChartCanvas = $("#barChart11").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart11 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data11,
      options: options
    });
  }
  
  
  //End Rede
  
  //Gráfico vero
    var data12 = {
    labels: [ "Ifood", "UberEats", "Pagas Cartão", "Pagas Débito/crédito/Online", "Gratuitas", "Sodexo", "Ticket", "Alelo", "VR"],
    datasets: [{
      label: '',
      data: [10, 19, 3, 5, 2, 3, 20, 12, 10],
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
  if ($("#barChart12").length) {
    var barChartCanvas = $("#barChart12").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart12 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data12,
      options: options
    });
  }
  
  //End Vero
});