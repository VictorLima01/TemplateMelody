//Bill bank 

var data22 = {
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
  if ($("#barChart22").length) {
    var barChartCanvas = $("#barChart22").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart22 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data22,
      options: options
    });
  }
// End Bill Bank

//Pay
var data23 = {
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
  if ($("#barChart23").length) {
    var barChartCanvas = $("#barChart23").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart23 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data23,
      options: options
    });
  }


//End Pay

//True
var data24 = {
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
  if ($("#barChart24").length) {
    var barChartCanvas = $("#barChart24").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart24 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data24,
      options: options
    });
  }


//End True

//Account

var data25 = {
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
  if ($("#barChart25").length) {
    var barChartCanvas = $("#barChart25").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart25 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data25,
      options: options
    });
  }
//End Account

//Check 
var data26 = {
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
  if ($("#barChart26").length) {
    var barChartCanvas = $("#barChart26").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart26 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data26,
      options: options
    });
  }
// End Check 

//Card

var data27 = {
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
  if ($("#barChart27").length) {
    var barChartCanvas = $("#barChart27").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart27 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data27,
      options: options
    });
  }
//End Card