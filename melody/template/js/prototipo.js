
        var randomScalingFactor = function() {
            return Math.round(Math.random() * 100);
        };
        
        var chartColors = window.chartColors;
        var color = Chart.helpers.color;
        var config = {
            data: {
                datasets: [{
                    data: [1, 5, 3, 5, 2, 3, 8, 15, 11, 9],
                    backgroundColor: [
                        'rgba(72,209,204, 0.2)',
                        'rgba(255,0,0, 0.2)',
                        'rgba(0,139,139, 0.2)',
                        'rgba(50,205,50, 0.2)',
                        'rgba(139,0,0, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(127,255,0, 0.2)',
                        'rgba(255,140,0, 0.2)',
                        'rgba(47,79,79, 0.2)',
                        'rgba(255,69,0, 0.2)'
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
                        'rgba(47,79,79,1)',
                        'rgba(255,69,0, 1)'],
                        borderWidth: 1,
                    label: 'My dataset' // for legend
                }],
                labels: [
                    "Cielo", "Getnet", "Sodexo", "VR", "Ticket", "Bin", "Stone", "Rede", "Vero", "Itaú"
                ]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Chart.js Polar Area Chart'
                },
                scale: {
                    ticks: {
                        beginAtZero: true
                    },
                    reverse: false
                },
                animation: {
                    animateRotate: false,
                    animateScale: true
                }
            }
        };
        
        window.onload = function() {
            var ctx = document.getElementById('polar');
            window.myPolarArea = Chart.PolarArea(ctx, config);
        };
//
if ($('#sales-chart').length) {
    var lineChartCanvas = $("#sales-chart").get(0).getContext("2d");
    var data = {
      labels: ["2013", "2014", "2014", "2015", "2016", "2017", "2018"],
      datasets: [
        {
          label: 'Support',
          data: [1500, 7030, 1050, 2300, 3510, 6800, 4500],
          borderColor: [
            '#392c70'
          ],
          borderWidth: 3,
          fill: false
        },
        {
          label: 'Product',
          data: [5500, 4080, 3050, 5600, 4510, 5300, 2400],
          borderColor: [
            '#d1cede'
          ],
          borderWidth: 3,
          fill: false
        }
      ]
    };
    var options = {
      scales: {
        yAxes: [{
          gridLines: {
            drawBorder: false
          },
          ticks: {
            stepSize: 2000,
            fontColor: "#686868"
          }
        }],
        xAxes: [{
          display: false,
          gridLines: {
            drawBorder: false
          }
        }]
      },
      legend: {
        display: false
      },
      elements: {
        point: {
          radius: 3
        }
      },
      stepsize: 1
    };
    var lineChart = new Chart(lineChartCanvas, {
      type: 'line',
      data: data,
      options: options
    });
  }
  if ($("#daily-sales-chart").length) {
    var dailySalesChartData = {
      datasets: [{
        data: [50, 10, 10, 30],
        backgroundColor: [
          '#392c70',
          '#04b76b',
          '#e9e8ef',
          '#ff5e6d'
        ],
        borderWidth: 0
      }],
  
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
        'Mail order sales',
        'Instore sales',
        'Download sales',
        'Sales return'
      ]
    };
    var dailySalesChartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      animation: {
        animateScale: true,
        animateRotate: true
      },
      legend: {
        display: false
      },
      legendCallback: function(chart) { 
        var text = [];
        text.push('<ul class="legend'+ chart.id +'">');
        for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
          text.push('<li><span class="legend-label" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span>');
          if (chart.data.labels[i]) {
            text.push(chart.data.labels[i]);
          }
          text.push('</li>');
        }
        text.push('</ul>');
        return text.join("");
      },
      cutoutPercentage: 70     
    };
    var dailySalesChartCanvas = $("#daily-sales-chart").get(0).getContext("2d");
    var dailySalesChart = new Chart(dailySalesChartCanvas, {
      type: 'doughnut',
      data: dailySalesChartData,
      options: dailySalesChartOptions
    });
    document.getElementById('daily-sales-chart-legend').innerHTML = dailySalesChart.generateLegend();
  }

       