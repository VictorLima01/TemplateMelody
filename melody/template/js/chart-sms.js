/// Envios de SMSs por SO
var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};

var polar = {
    data: {
        datasets: [{
            data: [367, 456, 301],
            backgroundColor: [
                'rgba(72,209,204, 0.2)',
                'rgba(255,0,0, 0.2)',
                'rgba(255, 159, 64, 0.2)'
                
            ],
            borderColor: [
                'rgba(72,209,204,1)',
                'rgba(255,0,0, 1)',
                'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
            label: 'My dataset' // for legend
        }],
        labels: [
            "Ana", "Rogerio", "Marcos"
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
var ctx = document.getElementById('sms-dispositivo');
window.myPolarArea = Chart.PolarArea(ctx, polar);
});
/// SMS com sucesso e falha

var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};

var polar2 = {
    data: {
        datasets: [{
            data: [367, 456],
            backgroundColor: [
                'rgba(50,205,50, 0.2)',
                'rgba(178,34,34, 0.2)',
                'rgba(255, 159, 64, 0.2)'
                
            ],
            borderColor: [
                'rgba(50,205,50, 1)',
                'rgba(178,34,34, 1)',
                'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
            label: 'My dataset' // for legend
        }],
        labels: [
            "Sucesso", "Falha"
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
var ctx = document.getElementById('sms-sucesso-falha');
window.myPolarArea = Chart.PolarArea(ctx, polar2);
});

/// Total de SMS enviados por hora
		var line = {
			type: 'line',
			data: {
				labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00','21:00', '22:00', '23:00', '24:00'],
				datasets: [{
					label: 'Total SMS',
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
		var ctx = document.getElementById('sms-periodo');
		window.myLine = new Chart(ctx, line);
		});
////Por dia
		var line2 = {
			type: 'line',
			data: {
				labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20','21', '22', '23', '24', '25', '26', '27', '28', "29", '30', '31'],
				datasets: [{
					label: 'Total SMS',
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
var ctx = document.getElementById('sms-periodo2');
window.myLine = new Chart(ctx, line2);
});
// Total unicos
var horizontalBarChartData = {
	labels: ['remetente1', 'remetente2', 'remetente3', 'remetente4', 'remetente5', 'remetente6', 'remetente7'],
	datasets: [{
		label: 'Total SMS',
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

window.onload = function() {
	var ctx = document.getElementById('total-unico').getContext('2d');
	window.myHorizontalBar = new Chart(ctx, {
		type: 'horizontalBar',
		data: horizontalBarChartData,
		options: {
			// Elements options apply to all of the options unless overridden in a dataset
			// In this case, we are setting the border of each horizontal bar to be 2px wide
			elements: {
				rectangle: {
					borderWidth: 2,
				}
			},
			responsive: true,
			legend: {
				position: 'right',
			},
			title: {
				display: true,
				text: 'Remetente Mais Ativos'
			}
		}
	});

};

// Total único Telefone
var horizontalBarChartData2 = {
	labels: [ '11949712830', '11963214567', '(11)9844-3260', '(11)9639-9207', '(11)9590-4357', '(11)9550-6941'],
	datasets: [{
		label: 'Total sms',
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
		data: [ 118, 100, 50, 50, 50, 50]
	}]

};

$(document).ready (function() {
	var ctx = document.getElementById('total-unico3').getContext('2d');
	window.myHorizontalBar = new Chart(ctx, {
		type: 'horizontalBar',
		data: horizontalBarChartData2,
		options: {
			// Elements options apply to all of the options unless overridden in a dataset
			// In this case, we are setting the border of each horizontal bar to be 2px wide
			elements: {
				rectangle: {
					borderWidth: 2,
				}
			},
			responsive: true,
			legend: {
				position: 'right',
			},
			title: {
				display: true,
				text: '10 números que mais enviaram sms'
			}
		}
	});

});
