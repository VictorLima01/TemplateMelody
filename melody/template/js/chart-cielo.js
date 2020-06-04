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
            "Android", "IOS", "Windows Phone"
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

		window.onload = function() {
			var contexto = document.getElementById('sms-periodo').getContext('2d');
			window.myLine = new Chart(contexto, line);
        };
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
		label: 'Dataset1',
		backgroundColor:[ 'rgba(72,209,204, 0.2)'],
		borderColor: [ 'rgba(72,209,204, 2)'],
		borderWidth: 1,
		data: [25, 51, 38, 33, 47, 26, 12]
	}, {
		label: 'Dataset 2',
		backgroundColor:[ 'rgba(210,105,30, 0.2)'],
		borderColor: [ 'rgba(210,105,30, 2)'],
		data: [39, 33, 65, 51, 55, 51, 52]
	}]

};

$(document).ready(function(){   console.log('Ready disparado'); 
var ctx = document.getElementById('total-unico');
window.myHorizontalBar = new Chart(ctx, horizontalBarChartData );
});
