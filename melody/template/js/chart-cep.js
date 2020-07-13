/// Total de Ceps buscados  por hora
var line = {
    type: 'line',
    data: {
        labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00','21:00', '22:00', '23:00', '24:00'],
        datasets: [{
            label: 'Total Buscas',
            backgroundColor:[ 'rgba(210,105,30, 0.2)'],
            borderColor: [ 'rgba(210,105,30, 2)'],
            data: [12, 15, 16, 26, 56, 23, 53, 64, 15, 17, 13, 19, 26, 65, 13, 28, 17, 10, 6, 32, 45, 25, 36, 15],
            fill: false,
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: ''
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Horarios'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Quantidade'
                }
            }]
        }
    }
};

$(document).ready(function(){   console.log('Ready disparado'); 
var ctx = document.getElementById('cep-periodo');
window.myLine = new Chart(ctx, line);
});
////Por dia
var line2 = {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20','21', '22', '23', '24', '25', '26', '27', '28', "29", '30', '31'],
        datasets: [{
            label: 'Total Buscas',
            backgroundColor:[ 'rgba(72,209,204, 0.2)'],
            borderColor: [ 'rgba(72,209,204, 2)'],
            data: [12, 15, 16, 26, 56, 23, 53, 64, 15, 17, 13, 19, 26, 65, 13, 28, 17, 10, 6, 32, 45, 25, 36, 15],
            fill: false,
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: ''
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Horarios'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Quantidade'
                }
            }]
        }
    }
};

$(document).ready(function(){   console.log('Ready disparado'); 
var ctx = document.getElementById('cep-periodo2');
window.myLine = new Chart(ctx, line2);
});
/// SMS com sucesso e falha

var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};

var polar2 = {
    data: {
        datasets: [{
            data: [367, 456, 122, 254, 321],
            backgroundColor: [
                'rgba(50,205,50, 0.2)',
                'rgba(178,34,34, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(0,0,128, 0.2)',
                'rgba(75,0,130,0.2)',
                'rgba(255,0,0, 0.2)'
                
            ],
            borderColor: [
                'rgba(50,205,50, 1)',
                'rgba(178,34,34, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(0,0,128, 1)',
                'rgba(75,0,130,1)',
                'rgba(255,0,0, 1)'
                ],
                borderWidth: 1,
            label: 'My dataset' // for legend
        }],
        labels: [
            "Fornecedor1", "Fornecedor2", "Fornecedor3", "Fornecedor4", "Fornecedor5"
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: ''
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
$(document).ready(function(){   console.log('Ready disparado'); 
var ctx = document.getElementById('cep-por-fornecedores');
window.myPolarArea = Chart.PolarArea(ctx, polar2);
});
// CEP por estado
		var barChartData = {
			labels:  ['SP', 'RJ', 'MG', 'CE', 'SC', 'BA', 'RS'],
			datasets: [{
                label: 'Total buscas',
                backgroundColor:[ 'rgba(72,209,204, 0.2)',
                                    'rgba(50,205,50, 0.2)',
                                    'rgba(178,34,34, 0.2)',
                                    'rgba(255,140,0, 0.2)',
                                    'rgba(255,255,0, 0.2)',
                                    'rgba(138,43,226, 0.2)',
                                    'rgba(139,69,19, 0.2)'],
                borderColor: [ 'rgba(72,209,204, 2)',
                                'rgba(50,205,50, 2)',
                                'rgba(178,34,34, 2)',
                                'rgba(255,140,0, 2)',
                                'rgba(255,255,0, 2)',
                                'rgba(138,43,226, 2)',
                                'rgba(139,69,19, 2)',],
                borderWidth: 1,
                data: [25, 51, 38, 33, 47, 26, 12]
            }]

		};

        $(document).ready(function(){
			var ctx = document.getElementById('cep-estado').getContext('2d');
			window.myBar = new Chart(ctx, {
				type: 'bar',
				data: barChartData,
				options: {
					responsive: true,
					legend: {
						position: 'top',
					},
					title: {
						display: true,
						text: 'Chart.js Bar Chart'
					}
				}
			});

		});

//Buscar por fornecedores por hora
var lineChartData2 = {
     labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00','21:00', '22:00', '23:00', '24:00'],
    datasets: [{
        label: 'Fornecedor 1',
        backgroundColor:[ 'rgba(210,105,30, 0.2)'],
        borderColor: [ 'rgba(210,105,30, 2)'],
        fill: false,
        data: [12, 15, 16, 26, 56, 23, 53, 64, 15, 17, 13, 19, 26, 65, 13, 28, 17, 10, 6, 32, 45, 25, 36, 15],
       
    }, {
        label: 'Fornecedor 2',
        backgroundColor:[ 'rgba(72,209,204, 0.2)'],
        borderColor: [ 'rgba(72,209,204, 2)'],
        fill: false,
        data: [15, 18, 10, 21, 54, 15, 45, 58, 17, 21, 30, 14, 21, 47, 14, 22, 10, 27, 29, 37, 49, 21, 31, 19],
      
    },
    {
        label: 'Fornecedor 3',
        backgroundColor:[  'rgba(50,205,50, 0.2)'],
        borderColor: [ 'rgba(50,205,50, 2)'],
        fill: false,
        data: [24, 19, 29, 15, 41, 27, 35, 61, 25, 27, 34, 37, 57, 61, 24, 46, 52, 61, 24, 48, 56, 39, 52, 60],
      
    },
    {
        label: 'Fornecedor 4',
        backgroundColor:[ 'rgba(138,43,226, 0.2)'],
        borderColor: [ 'rgba(138,43,226, 2)'],
        fill: false,
        data: [9, 27, 34, 21, 40, 50, 49, 12, 37, 17, 64, 45, 44, 47, 48, 0, 10, 6, 28, 41, 61, 11, 19, 34],
      
    }]
};

$(document).ready(function(){ 
    var ctx = document.getElementById('fornecedores-periodo2').getContext('2d');
    window.myLine = Chart.Line(ctx, {
        data: lineChartData2,
        options: {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: ''
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        }
    });
});
//Fornecedores por dia
var lineChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20','21', '22', '23', '24', '25', '26', '27', '28', "29", '30', '31'],
    datasets: [{
        label: 'Fornecedor 1',
        backgroundColor:[ 'rgba(210,105,30, 0.2)'],
        borderColor: [ 'rgba(210,105,30, 2)'],
        fill: false,
        data: [12, 15, 16, 26, 56, 23, 53, 64, 15, 17, 13, 19, 26, 65, 13, 28, 17, 10, 6, 32, 45, 25, 36, 15],
       
    }, {
        label: 'Fornecedor 2',
        backgroundColor:[ 'rgba(72,209,204, 0.2)'],
        borderColor: [ 'rgba(72,209,204, 2)'],
        fill: false,
        data: [15, 18, 10, 21, 54, 15, 45, 58, 17, 21, 30, 14, 21, 47, 14, 22, 10, 27, 29, 37, 49, 21, 31, 19],
      
    },
    {
        label: 'Fornecedor 3',
        backgroundColor:[  'rgba(50,205,50, 0.2)'],
        borderColor: [ 'rgba(50,205,50, 2)'],
        fill: false,
        data: [24, 19, 29, 15, 41, 27, 35, 61, 25, 27, 34, 37, 57, 61, 24, 46, 52, 61, 24, 48, 56, 39, 52, 60],
      
    },
    {
        label: 'Fornecedor 4',
        backgroundColor:[ 'rgba(138,43,226, 0.2)'],
        borderColor: [ 'rgba(138,43,226, 2)'],
        fill: false,
        data: [9, 27, 34, 21, 40, 50, 49, 12, 37, 17, 64, 45, 44, 47, 48, 0, 10, 6, 28, 41, 61, 11, 19, 34],
      
    }]
};

$(document).ready(function(){ 
    var ctx = document.getElementById('fornecedores-periodo').getContext('2d');
    window.myLine = Chart.Line(ctx, {
        data: lineChartData,
        options: {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: ''
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        }
    });
});
