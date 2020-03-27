  $(function() {
  
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

  
});