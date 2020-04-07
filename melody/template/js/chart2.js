  $(function() {
  
   var data3 = {
    labels: ["Auto-Peças", "Bar,Res,Lan,pizza,pada", "Café,Casa-chá", "Cosméticos", "Metrial-const",  "Minimercado", "outros/perfume,salão,vestuário"],
    datasets: [{
      label: '',
      data: [26, 19, 32, 54, 25, 36, 20],
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
		 'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1,
      fill: false
    }]
  };
  var multiLineData2 = {
    labels: ["Fev/19", "Mar/19", "Abr/19", "Mai/19", "Jun/19", "Jul/19", "Ago/19", "Set/19", "Out/19", "Nov/19", "Dez/19"],
    datasets: [{
        label: 'IOS',
        data: [12, 19, 3, 5, 2, 3,7,35,45,10,11],
        borderColor: [
          '#587ce4'
        ],
        borderWidth: 2,
        fill: false
      },
      {
        label: 'Android',
        data: [5, 23, 7, 12, 42, 23, 8,12,54,14,23,15],
        borderColor: [
          '#ede190'
        ],
        borderWidth: 2,
        fill: false
      },
      {
        label: 'Web',
        data: [15, 10, 21, 32, 12, 33, 15, 11, 15, 25, 32],
        borderColor: [
          '#f44252'
        ],
        borderWidth: 2,
        fill: false
      }
    ]
  };
  var areaData2 = {
    labels: ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
    datasets: [{
      label: 'Todos os dispositivos',
	 
      data: [1, 5, 3, 5, 2, 3, 8, 9, 8, 6 , 11 , 25, 23, 14, 18, 26, 17, 28, 23, 10, 15,11, 3, 5 ],
	 
      backgroundColor: [
        'rgba(123,104,238, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        
		'rgba(123,104,238, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      fill: true, // 3: no fill
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
   var options2 = {
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
 
  var areaOptions = {
    plugins: {
      filler: {
        propagate: true
      }
    }
  }
   if ($("#barChart3").length) {
    var barChartCanvas = $("#barChart3").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart = new Chart(barChartCanvas, {
      type: 'bar',
      data: data3,
      options: options2
    });
  }
  
  if ($("#linechart-multi2").length) {
    var multiLineCanvas = $("#linechart-multi2").get(0).getContext("2d");
    var lineChart2 = new Chart(multiLineCanvas, {
      type: 'line',
      data: multiLineData2,
      options: options
    });
  }
  if ($("#areaChart2").length) {
    var areaChartCanvas = $("#areaChart2").get(0).getContext("2d");
    var areaChart = new Chart(areaChartCanvas, {
      type: 'line',
      data: areaData2,
      options: areaOptions
    });
  }
 
 
 
 var c3BarChart2 = c3.generate({
    bindto: '#c3-bar-chart2',
    data: {
      columns: [
        ['VR', 30, 200, 100, 400, 150, 250],
        ['Vero', 130, 100, 140, 200, 150, 50]
		
		
      ],
      type: 'bar'
    },
    color: {
      pattern: ['rgba(88,216,163,1)', 'rgba(4,189,254,0.6)', 'rgba(237,28,36,0.6)']
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 30,
      left: 0,
    },
    bar: {
      width: {
        ratio: 0.7 // this makes bar width 50% of length between ticks
      }
    }
  });

  setTimeout(function() {
    c3BarChart2.load({
      columns: [
        ['Cielo', 130, 0, 200, 300, 0, 100]
      ]
    });
  }, 1000);
  google.charts.load('current', {
  'packages': ['bar']
});

// Bar Charts Starts
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
  var data2 = new google.visualization.arrayToDataTable([
    ['Canais de distribuição', 'Quant.'],
    ["Vero", 44],
    ["4keys", 31],
    ["VR", 12],
	["Tiquei", 25]
    
  ]);

  var options2 = {
    title: 'Approximating Normal Distribution',
    legend: {
      position: 'none'
    },
    colors: ['#FF0000'],
	
    chartArea: {
      width: 401
    },
    hAxis: {
      ticks: [-1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1]
    },
    bar: {
      gap: 0
    },

    histogram: {
      bucketSize: 0.02,
      maxNumBuckets: 200,
      minValue: -1,
      maxValue: 1
    }
  };

  var chart = new google.charts.Bar(document.getElementById('Bar-chart2'));
  chart.draw(data2, options2);
};
 var multiAreaData9 = {
    labels: ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
    datasets: [{
        label: 'Número de acessos ao produto',
        data: [8, 11, 13, 15, 12, 13, 16, 15, 13, 19, 11, 14, 25, 22, 28, 26, 15, 13, 12, 45, 44, 26, 8 ,3],
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
   if ($("#areachart-multi9").length) {
    var multiAreaCanvas = $("#areachart-multi9").get(0).getContext("2d");
    var multiAreaChart9 = new Chart(multiAreaCanvas, {
      type: 'line',
      data: multiAreaData9,
      options: multiAreaOptions
    });
  }
   var multiAreaData10 = {
    labels: ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
    datasets: [{
        label: 'Número de acessos ao produto',
        data: [8, 11, 13, 15, 12, 13, 16, 15, 13, 19, 11, 14, 25, 22, 28, 26, 15, 13, 12, 45, 44, 26, 8 ,3],
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
   if ($("#areachart-multi10").length) {
    var multiAreaCanvas = $("#areachart-multi10").get(0).getContext("2d");
    var multiAreaChart10 = new Chart(multiAreaCanvas, {
      type: 'line',
      data: multiAreaData10,
      options: multiAreaOptions
    });
  }
});