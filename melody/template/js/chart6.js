$(function() {
 var data3 = {
    labels: ["Tiquei", "Fornax", "Apus",  "Access Doc", "Access Check", "Access Pay4"],
    datasets: [{
      label: '',
      data: [3094, 120977, 81550, 20000, 27000, 350000],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
		'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
		 'rgba(255,99,132,1)'
      ],
      borderWidth: 1,
      fill: false
    }]
  };
  
  var doughnutPieData3 = {
    datasets: [{
      data: [50 , 50 ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Logins  88.682', 
      'Intercâmbios  491.639 ', 
	 
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
   var doughnutPieOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };
  
   if ($("#linechart-multi3").length) {
    var multiLineCanvas = $("#linechart-multi3").get(0).getContext("2d");
    var lineChart3 = new Chart(multiLineCanvas, {
      type: 'line',
      data: multiLineData3,
      options: options
    });
  }
  
  if ($("#barChart3").length) {
    var barChartCanvas = $("#barChart3").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart3 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data3,
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
});