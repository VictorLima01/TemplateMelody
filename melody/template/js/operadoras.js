$(function() {
	
	// Gráfico Cielo
 var data4 = {
    labels: ["ifood", "Uber", "Cartão", "Online/cartão", "Sodexo", "Ticket", "Alelo", "VR"],
	
    datasets: [{
      label: '',
      data: [10, 19,  5, 2, 3, 20, 12, 10],
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
 var data13 = {
    labels: ["Auto-Peças", "Bar,Res,Lan,pizza,pada", "Café,Casa-chá", "Cosméticos", "Metrial-const",  "Minimercado", "outros/perfume,salão,vestuário"],
	
    datasets: [{
      label: '',
      data: [26, 19, 32, 54, 25, 36, 20],
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
    var options13 = {
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
    if ($("#barChart13").length) {
    var barChartCanvas = $("#barChart13").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart13 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data13,
      options: options13
    });
  }
  // End Gráfico Cielo
  
  
  // Gráfico Getnet
   var data5 = {
    labels: ["ifood", "Uber", "Cartão", "Online/cartão", "Sodexo", "Ticket", "Alelo", "VR"],
    datasets: [{
      label: '',
      data: [10, 19,  5, 2, 3, 20, 12, 10],
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
 var data14 = {
    labels: ["Auto-Peças", "Bar,Res,Lan,pizza,pada", "Café,Casa-chá", "Cosméticos", "Metrial-const",  "Minimercado", "outros/perfume,salão,vestuário"],
	
    datasets: [{
      label: '',
      data: [26, 19, 32, 54, 25, 36, 20],
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
   if ($("#barChart14").length) {
    var barChartCanvas = $("#barChart14").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart14 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data14,
      options: options
    });
  }
  // End Gráfico Getnet
  
  // Gráfico Sodexo
  var data6 = {
    labels: ["ifood", "Uber", "Cartão", "Online/cartão", "Sodexo", "Ticket", "Alelo", "VR"],
    datasets: [{
      label: '',
      data: [10, 19,  5, 2, 3, 20, 12, 10],
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
   var data15 = {
    labels: ["Auto-Peças", "Bar,Res,Lan,pizza,pada", "Café,Casa-chá", "Cosméticos", "Metrial-const",  "Minimercado", "outros/perfume,salão,vestuário"],
	
    datasets: [{
      label: '',
      data: [26, 19, 32, 54, 25, 36, 20],
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
   if ($("#barChart15").length) {
    var barChartCanvas = $("#barChart15").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart15 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data15,
      options: options
    });
  }
  
  //End Sodexo
  
  //Gráfico VR 
    var data7 = {
    labels: ["ifood", "Uber", "Cartão", "Online/cartão", "Sodexo", "Ticket", "Alelo", "VR"],
    datasets: [{
      label: '',
      data: [10, 19,  5, 2, 3, 20, 12, 10],
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
  var data16 = {
    labels: ["Auto-Peças", "Bar,Res,Lan,pizza,pada", "Café,Casa-chá", "Cosméticos", "Metrial-const",  "Minimercado", "outros/perfume,salão,vestuário"],
	
    datasets: [{
      label: '',
      data: [26, 19, 32, 54, 25, 36, 20],
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
    if ($("#barChart16").length) {
    var barChartCanvas = $("#barChart16").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart16 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data16,
      options: options
    });
  }
  //End VR
  
  // Gráfico ticket
    var data8 = {
    labels: ["ifood", "Uber", "Cartão", "Online/cartão", "Sodexo", "Ticket", "Alelo", "VR"],
    datasets: [{
      label: '',
      data: [10, 19,  5, 2, 3, 20, 12, 10],
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
    var data17 = {
    labels: ["Auto-Peças", "Bar,Res,Lan,pizza,pada", "Café,Casa-chá", "Cosméticos", "Metrial-const",  "Minimercado", "outros/perfume,salão,vestuário"],
	
    datasets: [{
      label: '',
      data: [26, 19, 32, 54, 25, 36, 20],
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
   if ($("#barChart17").length) {
    var barChartCanvas = $("#barChart17").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart17 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data17,
      options: options
    });
  }
  
  
  //end ticket
  
  
  //Gráfico bin
  
    var data9 = {
    labels:["ifood", "Uber", "Cartão", "Online/cartão", "Sodexo", "Ticket", "Alelo", "VR"],
    datasets: [{
      label: '',
      data: [10, 19,  5, 2, 3, 20, 12, 10],
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
   var data18 = {
    labels: ["Auto-Peças", "Bar,Res,Lan,pizza,pada", "Café,Casa-chá", "Cosméticos", "Metrial-const",  "Minimercado", "outros/perfume,salão,vestuário"],
	
    datasets: [{
      label: '',
      data: [26, 19, 32, 54, 25, 36, 20],
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
    if ($("#barChart18").length) {
    var barChartCanvas = $("#barChart18").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart18 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data18,
      options: options
    });
  }
  
  
  //End Bin
  
  
  //Gráfico Stone
  
    var data10 = {
    labels: ["ifood", "Uber", "Cartão", "Online/cartão", "Sodexo", "Ticket", "Alelo", "VR"],
    datasets: [{
      label: '',
      data: [10, 19,  5, 2, 3, 20, 12, 10],
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
   var data19 = {
    labels: ["Auto-Peças", "Bar,Res,Lan,pizza,pada", "Café,Casa-chá", "Cosméticos", "Metrial-const",  "Minimercado", "outros/perfume,salão,vestuário"],
	
    datasets: [{
      label: '',
      data: [26, 19, 32, 54, 25, 36, 20],
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
   if ($("#barChart19").length) {
    var barChartCanvas = $("#barChart19").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart19 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data19,
      options: options
    });
  }
  
  
  
  // End Stone
  
  
  //Gráfico Rede
    var data11 = {
    labels: ["ifood", "Uber", "Cartão", "Online/cartão", "Sodexo", "Ticket", "Alelo", "VR"],
    datasets: [{
      label: '',
      data: [10, 19, 5, 2, 3, 20, 12, 10],
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
   var data20 = {
    labels: ["Auto-Peças", "Bar,Res,Lan,pizza,pada", "Café,Casa-chá", "Cosméticos", "Metrial-const",  "Minimercado", "outros/perfume,salão,vestuário"],
	
    datasets: [{
      label: '',
      data: [26, 19, 32, 54, 25, 36, 20],
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
    if ($("#barChart20").length) {
    var barChartCanvas = $("#barChart20").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart20 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data20,
      options: options
    });
  }
  
  
  //End Rede
  
  //Gráfico vero
    var data12 = {
    labels: ["ifood", "Uber", "Cartão", "Online/cartão", "Sodexo", "Ticket", "Alelo", "VR"],
    datasets: [{
      label: '',
      data: [10, 19,  5, 2, 3, 20, 12, 10],
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
   var data21 = {
    labels: ["Auto-Peças", "Bar,Res,Lan,pizza,pada", "Café,Casa-chá", "Cosméticos", "Metrial-const",  "Minimercado", "outros/perfume,salão,vestuário"],
	
    datasets: [{
      label: '',
      data: [26, 19, 32, 54, 25, 36, 20],
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
    if ($("#barChart21").length) {
    var barChartCanvas = $("#barChart21").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart21 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data21,
      options: options
    });
  }
  
  //End Vero
});