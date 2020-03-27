$(function() {
	
	
var multiLineData2 = {
    labels: ["Fev/19", "Mar/19", "Abr/19", "Mai/19", "Jun/19", "Jul/19", "Ago/19", "Set/19", "Out/19", "Nov/19", "Dez/19"],
	datasets: [{
        label: 'Total Geral',
        data: [12, 19, 3, 5, 2, 3, 6, 7, 10, 11, 12],
        borderColor: [
          '#02F83C'
        ],
        borderWidth: 2,
        fill: false
      },
      {
        label: 'Total únicos',
        data: [5, 23, 7, 12, 42, 23, 28, 15, 15,19,20],
        borderColor: [
          '#8302F5'
        ],
        borderWidth: 2,
        fill: false
      },
      {
        label: 'Total compostos',
        data: [15, 10, 21, 32, 12, 33, 5,13,16,14,11],
        borderColor: [
          '#06C7F8'
        ],
        borderWidth: 2,
        fill: false
      }
	]
 
	};	
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


if ($("#linechart-multi2").length) {
    var multiLineCanvas = $("#linechart-multi2").get(0).getContext("2d");
    var lineChart2 = new Chart(multiLineCanvas, {
      type: 'line',
      data: multiLineData2,
      options: options
    });
  }
  
  if ($("#areachart-multi3").length) {
    var multiAreaCanvas = $("#areachart-multi3").get(0).getContext("2d");
    var multiAreaChart3 = new Chart(multiAreaCanvas, {
      type: 'line',
      data: multiAreaData3,
      options: multiAreaOptions
    });
  }

  
  });