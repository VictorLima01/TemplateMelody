

var ctx = document.getElementById('myChart').getContext('2d');
var mixedChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [
		
		{
            label: 'Auto-peças',
            data: [1235698, 1896545, 1086547, 2564789, 1456236, 5698741, 1236547],
            type: 'line',
			fill: false,
			 borderColor: [
          '#02F83C'
        ],
        borderWidth: 2,
            // this dataset is drawn on top
            order: 1
        },
		{
            label: 'Alimentação',
            data: [2346798, 2896545, 2086547, 3564789, 2456236, 7698741, 1886547],
            type: 'line',
			fill: false,
			 borderColor: [
          '#191970'
        ],
        borderWidth: 2,
            // this dataset is drawn on top
            order: 1
        },
		{
            label: 'Café',
            data: [1334567, 7654321, 3023456, 6543217, 2345671, 3654712, 4567123],
            type: 'line',
			fill: false,
			 borderColor: [
          '#7FFFD4'
        ],
        borderWidth: 2,
            // this dataset is drawn on top
            order: 1
        },
		{
            label: 'Cosméticos',
            data: [1466553, 6967671, 9081584, 1010945, 3447647	, 8073745, 9902184],
            type: 'line',
			fill: false,
			 borderColor: [
          '#FF0000	'
        ],
        borderWidth: 2,
            // this dataset is drawn on top
            order: 1
        },
		{
            label: 'Material-const',
            data: [1080431	, 5014118, 5369906	, 3889758, 1071176, 3894451, 7952160],
            type: 'line',
			fill: false,
			 borderColor: [
          '#FFA500'
        ],
        borderWidth: 2,
            // this dataset is drawn on top
            order: 1
        },{
            label: 'Minimercado',
            data: [9006168	, 4859183, 6657627	,6955001, 8206898, 3385152	, 8057008],
            type: 'line',
			fill: false,
			 borderColor: [
          '#FFD700'
        ],
        borderWidth: 2,
            // this dataset is drawn on top
            order: 1
        },
		{
            label: 'outros',
            data: [6615620, 2236276, 1967027, 1333333, 3430896, 9075929, 2941698],
            type: 'line',
			fill: false,
			 borderColor: [
          '#8B008B'
        ],
        borderWidth: 2,
            // this dataset is drawn on top
            order: 1
        }],
        labels: ['01', "02", "03", "04", "05",  "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
    },
   options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
   }
});


// var lineChartData = {
			// labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			// datasets: [{
				// label: 'My First dataset',
				// borderColor:[ 'rgba(255, 99, 132, 1)'],
				// backgroundColor:[  'rgba(255, 99, 132, 0.2)'],
				// fill: false,
				// data: [15, 25, 26, 33],
				// yAxisID: 'y-axis-1',
			// }, {
				// label: 'My Second dataset',
				// borderColor: [ 'rgba(54, 162, 235, 1)'],
				// backgroundColor: ['rgba(54, 162, 235, 0.2)'],
				// fill: false,
				// data: [28, 33, 12, 32],
				// yAxisID: 'y-axis-2'
			// }]
		// };

		// window.onload = function() {
			// var ctx = document.getElementById('canvas').getContext('2d');
			// window.myLine = Chart.Line(ctx, {
				// data: lineChartData,
				// options: {
					// responsive: true,
					// hoverMode: 'index',
					// stacked: false,
					// title: {
						// display: true,
						// text: 'Chart.js Line Chart - Multi Axis'
					// },
					// scales: {
						// yAxes: [{
							// type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							// display: true,
							// position: 'left',
							// id: 'y-axis-1',
						// }, {
							// type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							// display: true,
							// position: 'right',
							// id: 'y-axis-2',

							// // grid line settings
							// gridLines: {
								// drawOnChartArea: false, // only want the grid lines for one axis to show up
							// },
						// }],
					// }
				// }
			// });
		// };

  // var ctx = document.getElementById('myChart2').getContext('2d');
// var mixedChart = new Chart(ctx, {
    // type: 'line',
    // data: {
         // datasets: [
		// {
            // label: 'Vendas em R$',
            // data: [1235698, 1896545, 1086547, 2564789, 1456236, 5698741, 1236547],
            // type: 'line',
			 // borderColor: [
          // '#02F83C'
        // ],
        // borderWidth: 2,
            // // this dataset is drawn on top
            // order: 1
        // }],
        // labels: ['Auto-peças', "Alimentação", "Café", "Cosméticos", "Metrial-const",  "Minimercado", "outros"]
    // },
   // options: {
        // scales: {
            // yAxes: [{
                // ticks: {
                    // beginAtZero: true
                // }
            // }]
        // }
   // }
// });
 var ctx = document.getElementById('myChart3').getContext('2d');
var mixedChart = new Chart(ctx, {
    type: 'bar',
    data: {
         datasets: [
		 {
            label: 'Quantidade',
            data: [110, 247, 346, 408, 508, 456, 899],
			 backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
				 'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
			],
			borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
				 'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
			],
			borderWidth: 1,
            order: 2
        }
		],
        labels: ['Auto-peças', "Alimentação", "Café", "Cosméticos", "Metrial-const",  "Minimercado", "outros"]
    },
   options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
   }
});
// var randomScalingFactor = function() {
			// return Math.round(Math.random() * 100);
		// };

		// var config = {
			// type: 'doughnut',
			// data: {
				// datasets: [{
					// data: [25, 25, 25, 25],
					// backgroundColor: [
					// 'rgba(178,34,34, 0.2)',
					// 'rgba(0,255,0, 0.2)',
					// 'rgba(75,0,130, 0.2)',
					// 'rgba(255,255,0, 0.2)',
					// ],
					 // borderColor: [
					// 'rgba(178,34,34, 1)',
					// 'rgba(0,255,0, 1)',
					// 'rgba(75,0,130, 1)',
					// 'rgba(255,255,0, 1)',
					// ],
					// label: 'Dataset 1'
				// }],
				// labels: [
					// 'Web - 25%' ,
					// 'IOS - 25%' ,
					// 'Android - 25%',
					// 'Poral - 25%' 
					
				// ]
			// },
			// options: {
				// responsive: true,
				// legend: {
					// position: 'left',
				// },
				// title: {
					// display: true,
					// text: ''
				// },
				// animation: {
					// animateScale: true,
					// animateRotate: true
				// }
			// }
		// };

		// window.onload = function() {
			// var ctx = document.getElementById('chart-area').getContext('2d');
			// window.myDoughnut = new Chart(ctx, config);
		// };

