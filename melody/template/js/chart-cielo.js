/// Cadastro por dia
var line2 = {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20','21', '22', '23', '24', '25', '26', '27', '28', "29", '30', '31'],
        datasets: [{
            label: 'Total cadastros',
            backgroundColor:[ 'rgba(75,0,130, 0.2)'],
            borderColor: [ 'rgba(75,0,130, 2)'],
            data: [12, 15, 16, 26, 56, 23, 53, 64, 15, 17, 13, 19, 26, 65, 13, 28, 17, 10, 6, 32, 45, 25, 36, 15, 67, 12, 25, 31, 28, 61, 12],
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
var ctx = document.getElementById('cadastro-dia');
window.myLine = new Chart(ctx, line2);
});

/// Cadastro por hora
var line = {
    type: 'line',
    data: {
        labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00','21:00', '22:00', '23:00', '24:00'],
        datasets: [{
            label: 'Total cadastros',
            backgroundColor:[ 'rgba(0,128,128, 0.2)'],
            borderColor: [ 'rgba(0,128,128, 2)'],
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
var ctx = document.getElementById('cadastro-hora');
window.myLine = new Chart(ctx, line);
});

//Status por cadastros
		
var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};

var polar = {
    data: {
        datasets: [{
            data: [367, 456],
            backgroundColor: [
                'rgba(72,209,204, 0.2)',
                'rgba(255,0,0, 0.2)'
                
                
            ],
            borderColor: [
                'rgba(72,209,204,1)',
                'rgba(255,0,0, 1)'
               
                ],
                borderWidth: 1,
            label: 'My dataset' // for legend
        }],
        labels: [
            "Disponível(AVALIABLE)", "Indisponível(INVALUABLE)"
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
var ctx = document.getElementById('status-cadastro');
window.myPolarArea = Chart.PolarArea(ctx, polar);
});
// Status por cadastro realizado
var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};

var polar2 = {
    data: {
        datasets: [{
            data: [367, 456, 301],
            backgroundColor: [
                'rgba(50,205,50, 0.2)',
                'rgba(255,159,64, 0.2)',
                'rgba(255, 0, 0, 0.2)'
                
            ],
            borderColor: [
                'rgba(50,205,50, 1)',
                'rgba(255,159,64, 1)',
                'rgba(255, 0, 0, 1)'
                ],
                borderWidth: 1,
            label: 'My dataset' // for legend
        }],
        labels: [
            "Inserido", "No aguardo", "Não inserido"
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
var ctx = document.getElementById('status-cadastro-realizado');
window.myPolarArea = Chart.PolarArea(ctx, polar2);
});

// Segementos mais cadastrados
var horizontalBarChartData2 = {
	labels: ['PJ', 'Mercado', 'Farmácia', 'Loja de roupas', 'Restaurantes', 'Cafeteria'],
	datasets: [{
		label: 'Total cadastros',
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
		data: [112, 110, 100, 75, 64, 26, 12]
	}]

};

$(document).ready (function() {
	var ctx = document.getElementById('segmentos-cadastrados').getContext('2d');
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
				text: ''
			}
		}
	});

});
// CNPJ unico data
		var config = {
			type: 'line',
			data: {
				labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20','21', '22', '23', '24', '25', '26', '27', '28', "29", '30', '31'],
				datasets: [{
					label: '27.614.562/0001-81',
                    backgroundColor:[ 'rgba(0,0,128, 0.2)'],
                    borderColor: [ 'rgba(0,0,128, 2)'],
                    data: [2, 5, 6, 6, 6, 3, 3, 4, 5, 7, 3, 9, 6, 5, 3, 8, 7, 0, 6, 2, 5, 5, 6, 5, 7, 2, 5, 1, 8, 1, 2],
					fill: false,
				}, {
					label: '27.485.104/0001-90',
					fill: false,
                    backgroundColor:[ 'rgba(255,0,0, 0.2)'],
                    borderColor: [ 'rgba(255,0,0, 2)'],
                    data: [7, 4, 5, 2, 5, 2, 5, 6, 1, 7, 1, 7, 5, 6, 1, 2, 9, 10, 0, 3, 4, 2, 3, 1, 7, 3, 3, 5, 7, 0, 1],
                },
                {
					label: '27.485.104/0001-90',
					fill: false,
                    backgroundColor:[ 'rgba(255,165,0, 0.2)'],
                    borderColor: [ 'rgba(255,165,0, 2)'],
                    data: [5, 6, 7, 8, 3, 5, 8, 4, 6, 1, 1, 1, 8, 4, 4, 2, 8, 1, 8, 5, 4, 7, 2, 2, 3, 2, 6, 4, 7, 7, 3],
                },
            ]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'CNPJs mais relevantes'
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
							labelString: 'dias do mês'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'quantidade'
						}
					}]
				}
			}
		};

		$(document).ready( function() {
			var ctx = document.getElementById('cnpj-unico-data').getContext('2d');
			window.myLine = new Chart(ctx, config);
		});
// CNPJ unico hora
var confighora = {
    type: 'line',
    data: {
        labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00','21:00', '22:00', '23:00', '24:00'],
        datasets: [{
            label: '27.614.562/0001-81',
            backgroundColor:[ 'rgba(75,0,130, 0.2)'],
                    borderColor: [ 'rgba(75,0,130, 2)'],
                    data: [0, 0, 0, 0, 0, 0, 1, 2, 1, 1, 3, 0, 6, 5, 0, 1, 4, 0, 1, 3, 0, 0, 0, 0],
            fill: false,
        }, {
            label: '27.485.104/0001-90',
            fill: false,
            backgroundColor:[ 'rgba(0,128,0, 0.2)'],
                    borderColor: [ 'rgba(0,128,0, 2)'],
                    data: [0, 0, 0, 0, 0, 0, 2, 0, 0, 4, 3, 4, 5, 1, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0],
        },
        {
            label: '27.485.104/0001-90',
            fill: false,
            backgroundColor:[ 'rgba(0,128,128, 0.2)'],
                    borderColor: [ 'rgba(0,128,128, 2)'],
                    data: [0, 0, 0, 0, 0, 0, 3, 1, 2, 2, 2, 4, 0, 1, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0],
        }
    ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Chart.js Line Chart'
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
                    labelString: 'hora'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'quantidade'
                }
            }]
        }
    }
};

$(document).ready( function() {
    var ctx = document.getElementById('cnpj-unico-hora').getContext('2d');
    window.myLine = new Chart(ctx, confighora);
});
//Vinculo de PV´s com CNPJ

var line3 = {
    type: 'line',
    data: {
        labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00','21:00', '22:00', '23:00', '24:00'],
        datasets: [{
            label: 'Total cadastros',
            backgroundColor:[ 'rgba(0,128,128, 0.2)'],
            borderColor: [ 'rgba(0,128,128, 2)'],
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
var ctx = document.getElementById('pv-cnpj');
window.myLine = new Chart(ctx, line3);
});
